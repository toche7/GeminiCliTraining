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
gemini -p "Analyze @docs/course-outline.md and return 3 strengths, 3 risks, and top 3 improvements."
```

## Lab B Artifact Commands
```bash
gemini -p "Analyze @docs/course-outline.md and @docs/lab-guide.md. Return architecture summary and risks." > deliverables/TEAM_ALPHA/audit-summary.md
gemini -p "Using @deliverables/TEAM_ALPHA/audit-summary.md, provide top 5 improvements ranked by impact and effort." > deliverables/TEAM_ALPHA/action-plan.md
```

## Module C Demo
```bash
gemini -p "Create Thai+English social caption, email draft, and landing hero copy from this brief: Product=AI workshop; Audience=team leads; Value=faster reporting; Tone=practical; CTA=register this week."
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
