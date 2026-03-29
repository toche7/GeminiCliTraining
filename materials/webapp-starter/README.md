# Web App Starter (Lab D)

## Purpose
Minimal starter for the workshop section: Web Application + AI integration flow.

## What it includes
- Express backend endpoint: POST /api/generate
- Static frontend form in public/index.html
- Mock structured AI response for predictable classroom behavior

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

## Notes for Instructor
- This starter is intentionally mock-first to avoid API/network blockers.
- After learners understand integration, replace buildMockAiResponse with real Gemini API call.
- Keep secrets server-side and never expose real API keys in frontend code.
