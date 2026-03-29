const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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

app.post('/api/generate', (req, res) => {
  try {
    const { input } = req.body || {};

    if (!input || typeof input !== 'string') {
      return res.status(400).json({
        error: 'Invalid input. Expected JSON body with a non-empty string field: input'
      });
    }

    const result = buildMockAiResponse(input);
    return res.json({ ok: true, result });
  } catch (error) {
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
