const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const onsiteCsvPath = path.join(__dirname, 'onsite_applications.csv');
const databaseUrl = String(process.env.DATABASE_URL || '').trim();

let pgPool = null;

app.use(express.json());

const projectRoot = path.resolve(__dirname, '..', '..');

// Serve repo root index.html as the landing page
app.get('/', (_req, res) => {
  res.sendFile(path.join(projectRoot, 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/workshop', express.static(path.join(projectRoot, 'slides', 'webapp')));

function escapeCsvValue(value) {
  const str = String(value ?? '').replace(/\r?\n|\r/g, ' ').trim();
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

async function appendOnsiteApplication(rowData) {
  const header = 'submission_timestamp,applicant_name,organization_name,email,phone_optional\n';
  const row = [
    rowData.submission_timestamp,
    rowData.applicant_name,
    rowData.organization_name,
    rowData.email,
    rowData.phone_optional
  ].map(escapeCsvValue).join(',') + '\n';

  try {
    await fs.access(onsiteCsvPath);
  } catch {
    await fs.writeFile(onsiteCsvPath, header, 'utf8');
  }

  await fs.appendFile(onsiteCsvPath, row, 'utf8');
}

function getPgPool() {
  if (!databaseUrl) return null;
  if (pgPool) return pgPool;

  // Railway requires SSL for public connections. rejectUnauthorized:false
  // handles Railway's self-signed certs. Safe for internal Railway network too.
  const sslConfig = databaseUrl.startsWith('postgres') ? { rejectUnauthorized: false } : false;

  pgPool = new Pool({
    connectionString: databaseUrl,
    ssl: sslConfig
  });

  return pgPool;
}

async function initPostgres() {
  const pool = getPgPool();
  if (!pool) return false;

  await pool.query(`
    CREATE TABLE IF NOT EXISTS onsite_applications (
      id BIGSERIAL PRIMARY KEY,
      submission_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      applicant_name TEXT NOT NULL,
      organization_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone_optional TEXT
    )
  `);

  return true;
}

async function saveOnsiteApplication(rowData) {
  const pool = getPgPool();

  if (pool) {
    await pool.query(
      `
        INSERT INTO onsite_applications
          (submission_timestamp, applicant_name, organization_name, email, phone_optional)
        VALUES ($1, $2, $3, $4, $5)
      `,
      [
        rowData.submission_timestamp,
        rowData.applicant_name,
        rowData.organization_name,
        rowData.email,
        rowData.phone_optional
      ]
    );
    return 'postgres';
  }

  await appendOnsiteApplication(rowData);
  return 'csv';
}

async function getRecentOnsiteApplications(limit) {
  const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);
  const pool = getPgPool();

  if (pool) {
    const result = await pool.query(
      `
        SELECT submission_timestamp, applicant_name, organization_name, email, phone_optional
        FROM onsite_applications
        ORDER BY submission_timestamp DESC
        LIMIT $1
      `,
      [safeLimit]
    );
    return { storage: 'postgres', rows: result.rows };
  }

  const raw = await fs.readFile(onsiteCsvPath, 'utf8').catch((error) => {
    if (error.code === 'ENOENT') return 'submission_timestamp,applicant_name,organization_name,email,phone_optional\n';
    throw error;
  });

  const lines = raw.trim().split('\n').slice(1).filter(Boolean);
  const rows = lines.slice(-safeLimit).reverse().map((line) => {
    const values = line.split(',').map((v) => v.replace(/^"|"$/g, '').replace(/""/g, '"'));
    return {
      submission_timestamp: values[0] || '',
      applicant_name: values[1] || '',
      organization_name: values[2] || '',
      email: values[3] || '',
      phone_optional: values[4] || ''
    };
  });

  return { storage: 'csv', rows };
}

function buildMockAiResponse(input) {
  const text = String(input || '').trim();
  if (!text) {
    return {
      summary: 'No input provided.',
      key_points: [],
      recommendations: [],
      caution_notes: ['Provide a prompt or business context before requesting analysis.']
    };
  }

  return {
    summary: `AI summary for: ${text.slice(0, 90)}`,
    key_points: [
      'Clarify objective and audience before generation.',
      'Use structured output for easier integration.',
      'Validate claims before publishing results.'
    ],
    recommendations: [
      'Add prompt constraints (tone, length, format).',
      'Include one verification step in every workflow.',
      'Store outputs as markdown or JSON for reusability.'
    ],
    caution_notes: [
      'This starter returns mock output by default.',
      'Replace with real Gemini API call for production use.'
    ]
  };
}

function extractHeroFromContent(content) {
  const text = String(content || '');

  const headlineMatch = text.match(/\*\*Headline:\*\*\s*(.+)/i) || text.match(/headline\s*:\s*"?(.+)/i);
  const subheadlineMatch = text.match(/\*\*Subheadline:\*\*\s*(.+)/i) || text.match(/subheadline\s*:\s*"?(.+)/i);
  const ctaMatch = text.match(/\*\*CTA:\*\*\s*(.+)/i) || text.match(/cta\s*:\s*"?(.+)/i);

  const hero = {
    headline: headlineMatch ? headlineMatch[1].replace(/^[-*]\s*/, '').trim() : '',
    subheadline: subheadlineMatch ? subheadlineMatch[1].replace(/^[-*]\s*/, '').trim() : '',
    cta: ctaMatch ? ctaMatch[1].replace(/^[-*]\s*/, '').trim() : ''
  };

  if (!hero.headline && !hero.subheadline && !hero.cta) {
    const firstContentLine = text
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith('#'));
    hero.headline = firstContentLine || 'Landing hero content not found in artifact';
  }

  return hero;
}

async function buildArtifactResponse(contentPath) {
  if (typeof contentPath !== 'string' || !contentPath.trim()) {
    const err = new Error('Invalid contentPath. Expected a non-empty string.');
    err.status = 400;
    throw err;
  }

  const trimmedPath = contentPath.trim();
  const resolvedPath = path.resolve(projectRoot, trimmedPath);
  const isInProject = resolvedPath === projectRoot || resolvedPath.startsWith(projectRoot + path.sep);

  if (!isInProject) {
    const err = new Error('Invalid contentPath. Path traversal is not allowed.');
    err.status = 400;
    throw err;
  }

  if (!/\.(md|txt)$/i.test(resolvedPath)) {
    const err = new Error('Invalid contentPath. Only .md or .txt files are supported.');
    err.status = 400;
    throw err;
  }

  let raw;
  try {
    raw = await fs.readFile(resolvedPath, 'utf8');
  } catch (readError) {
    if (readError.code === 'ENOENT') {
      const err = new Error('Content file not found. Check contentPath and run Lab C first.');
      err.status = 404;
      throw err;
    }
    throw readError;
  }

  const hero = extractHeroFromContent(raw);
  return {
    mode: 'lab_c_artifact',
    source: path.relative(projectRoot, resolvedPath),
    hero,
    key_points: [
      'Lab D loaded hero content from Lab C artifact.',
      'Structured JSON enables predictable website rendering.',
      'Use Lab E to optimize message clarity and CTA strength.'
    ],
    recommendations: [
      'Verify hero copy matches intended audience and promise.',
      'Track conversion metrics by headline and CTA variant.',
      'Revise one message element at a time before retesting.'
    ]
  };
}

app.post('/api/generate', async (req, res) => {
  try {
    const { input, contentPath } = req.body || {};

    if (contentPath) {
      const result = await buildArtifactResponse(contentPath);
      return res.json({ ok: true, result });
    }

    if (!input || typeof input !== 'string') {
      return res.status(400).json({
        error: 'Invalid payload. Expected non-empty string field: input or contentPath'
      });
    }

    const result = buildMockAiResponse(input);
    return res.json({ ok: true, result });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ ok: false, error: error.message });
    }
    return res.status(500).json({
      ok: false,
      error: 'Unexpected server error',
      details: error.message
    });
  }
});

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'gemini-workshop-webapp-starter',
    storage: getPgPool() ? 'postgres' : 'csv'
  });
});

app.get('/api/debug-env', (_req, res) => {
  const url = process.env.DATABASE_URL || '';
  res.json({
    DATABASE_URL_present: url.length > 0,
    DATABASE_URL_prefix: url ? url.slice(0, 15) + '...' : '(empty)',
    NODE_ENV: process.env.NODE_ENV || '(not set)',
    PORT: process.env.PORT || '(not set)',
    storage_mode: getPgPool() ? 'postgres' : 'csv'
  });
});

app.post('/api/onsite-register', async (req, res) => {
  try {
    const applicant_name = String(req.body?.applicant_name || '').trim();
    const organization_name = String(req.body?.organization_name || '').trim();
    const email = String(req.body?.email || '').trim().toLowerCase();
    const phone_optional = String(req.body?.phone_optional || '').trim();

    if (!applicant_name) {
      return res.status(400).json({ ok: false, error: 'applicant_name is required' });
    }

    if (!organization_name) {
      return res.status(400).json({ ok: false, error: 'organization_name is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Valid email is required' });
    }

    const storage = await saveOnsiteApplication({
      submission_timestamp: new Date().toISOString(),
      applicant_name,
      organization_name,
      email,
      phone_optional
    });

    return res.status(201).json({ ok: true, message: 'Application submitted successfully', storage });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Unable to save application', details: error.message });
  }
});

app.get('/api/onsite-register', async (req, res) => {
  try {
    const { rows, storage } = await getRecentOnsiteApplications(req.query.limit);
    return res.json({ ok: true, storage, count: rows.length, rows });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Unable to read applications', details: error.message });
  }
});

async function startServer() {
  try {
    if (databaseUrl) {
      await initPostgres();
      console.log('Postgres connected. Using DATABASE_URL storage.');
    } else {
      console.log('DATABASE_URL not set. Using CSV storage fallback.');
    }

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to initialize storage:', error.message);
    process.exit(1);
  }
}

startServer();
