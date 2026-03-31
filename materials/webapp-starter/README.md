# Web App Starter (Lab D)

## Purpose
Minimal starter for the workshop section: Web Application + AI integration flow.

## What it includes
- Express backend endpoint: POST /api/generate
- Static frontend form in public/index.html
- Lab C artifact mode using `contentPath` (loads hero from content pack)
- Mock structured AI response fallback for predictable classroom behavior

## Quick Start
1. Install dependencies:
   npm install
2. Copy env file:
   cp .env.example .env
3. Start server:
   npm start
4. Open browser:
   http://localhost:3000

## Test with curl
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"input":"Summarize Q2 business performance"}'

## Use Lab C Landing Hero in Lab D
1. Complete Lab C and save `deliverables/TEAM_ALPHA/content-pack-v2.md`.
2. Call the endpoint with `contentPath`.

```bash
curl -X POST http://localhost:3000/api/generate \
   -H "Content-Type: application/json" \
   -d '{"contentPath":"deliverables/TEAM_ALPHA/content-pack-v2.md"}'
```

Expected result:
- `ok: true`
- `result.mode: "lab_c_artifact"`
- `result.hero.headline`, `result.hero.subheadline`, `result.hero.cta`

## Notes for Instructor
- This starter is intentionally mock-first to avoid API/network blockers.
- Lab D should default to artifact mode (`contentPath`) so learners reuse Lab C output.
- After learners understand integration, replace buildMockAiResponse with real Gemini API call.
- Keep secrets server-side and never expose real API keys in frontend code.
