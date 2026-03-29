# Demo Commands (Copy-Paste)

## Global Setup
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
mkdir -p deliverables/TEAM_ALPHA
```

## Module A Demo
```bash
gemini -p "Design a 5-step workflow for weekly reporting with risks, quality checks, and fallback actions. Return markdown table."
```

## Module B Demo
```bash
# Optional first-time bootstrap inside REPL
gemini
/init
/quit

cat gemini.md
gemini -p "Analyze @docs/course-outline.md and return 3 strengths, 3 risks, and top 3 improvements."
gemini -p "Analyze @docs/course-outline.md and follow @gemini.md. Return 3 strengths, 3 risks, top 3 improvements, and a short note explaining how gemini.md changed the output."
```

## Lab B Artifact Commands
```bash
gemini -p "Analyze @docs/course-outline.md and @docs/lab-guide.md. Return architecture summary and risks." > deliverables/TEAM_ALPHA/audit-summary-baseline.md
gemini -p "Analyze @docs/course-outline.md and @docs/lab-guide.md. Follow @gemini.md. Return architecture summary and risks. End with an Instruction Effect section." > deliverables/TEAM_ALPHA/audit-summary.md
gemini -p "Using @deliverables/TEAM_ALPHA/audit-summary.md, provide top 5 improvements ranked by impact and effort." > deliverables/TEAM_ALPHA/action-plan.md
```

## Module C Demo
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini
```

```text
You are a senior content strategist.
From this brief, create Thai+English outputs:
1) social caption (<=80 words)
2) email draft (120-180 words)
3) landing hero copy (headline + subheadline + CTA)
Brief:
- Product: AI workshop
- Audience: team leads
- Value: faster reporting
- Tone: practical
- CTA: register this week
Keep message consistent and avoid unsupported claims.
```

```text
Revise the previous content pack with a stronger CTA and clearer differentiation from generic AI training.
```

## Module D Demo
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining/materials/webapp-starter
npm install
cp .env.example .env
npm start
```

In new terminal:
```bash
curl -s -X POST http://localhost:3000/api/generate -H "Content-Type: application/json" -d '{"input":"Summarize Q2 sales and support trends"}'
curl -s -X POST http://localhost:3000/api/generate -H "Content-Type: application/json" -d '{"invalid":"payload"}'
```

## Module E Demo
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini -p "Analyze @materials/sample-data/sales.csv and @materials/sample-data/support_tickets.csv. Return trends with numbers, anomalies, and 3 recommendations with confidence."
```

## Capstone Prompt
```bash
gemini -p "Given this problem statement: [insert], propose an end-to-end workflow with prompt, output format, and validation checklist."
```

## Quick Troubleshooting
```bash
# Check current directory
pwd

# Verify CLI exists
which gemini

# Verify web starter scripts
npm --prefix /Users/taweesaksamanchuen/Dev/GeminiCliTraining/materials/webapp-starter run
```
