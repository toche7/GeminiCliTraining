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
/chat save bootstrap
/quit

cat gemini.md
gemini -p "Analyze @docs/course-outline.md and return 3 strengths, 3 risks, and top 3 improvements."
gemini -p "Analyze @docs/course-outline.md and follow @gemini.md. Return 3 strengths, 3 risks, top 3 improvements, and a short note explaining how gemini.md changed the output."
```

Inside REPL — shell mode and session management:
```text
# Run a shell command without leaving the session
!ls
!npm run start

# Session management
/chat list
/rewind

# Context management
/compress
/clear
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
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini
```

Inside REPL, paste this prompt:
```text
Using @deliverables/TEAM_ALPHA/content-pack-v2.md, generate a single-file landing page HTML with embedded CSS.
Include: hero headline, subheadline, CTA button, one trust section, and one footer.
Keep it responsive and preserve the bilingual tone.
Return HTML only.
```

After Gemini responds, save it:
```text
/save deliverables/TEAM_ALPHA/landing-page-v1.html
/quit
```

Then publish and run:
```bash
cp deliverables/TEAM_ALPHA/landing-page-v1.html materials/webapp-starter/public/landing.html
cd materials/webapp-starter && npm install && cp .env.example .env && npm start
```

In new terminal:
```bash
open http://localhost:3000/landing.html
```

## Module E Demo
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini -p "Analyze @deliverables/TEAM_ALPHA/landing-page-v1.html and @deliverables/TEAM_ALPHA/content-pack-v2.md. Return 3 strengths, 3 conversion risks, and 3 prioritized recommendations with expected impact and confidence." > deliverables/TEAM_ALPHA/insight-report.md
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
