const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const projectRoot = path.resolve(__dirname, '..', '..');

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
  res.json({ ok: true, service: 'gemini-workshop-webapp-starter' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
