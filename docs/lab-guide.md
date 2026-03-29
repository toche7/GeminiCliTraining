# Lab Guide: Gemini CLI Practical Workshop

Use this guide during delivery. Every lab includes command-level instructions, checkpoints, and recovery steps.

## Lab Rules
- Create a team folder under `deliverables/TEAM_NAME`.
- Save final artifacts as markdown or json files.
- If output is weak, run one improvement re-prompt before final submission.

## Quick Setup (Run Once, 5 min)
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
mkdir -p deliverables/TEAM_ALPHA
gemini -p "Say hello and explain 3 things you can do in Gemini CLI"
```

Expected result:
- Gemini returns a readable response.
- Team folder exists for storing outputs.

---

## Lab A: Agent Workflow Basics (10 min)

### Objective
Create one reusable AI workflow for a real personal or team task.

### Prerequisites
- Gemini CLI is installed and authenticated.
- Team folder is ready.

### Baseline Prompt
```text
Design a 5-step workflow for weekly report writing.
```

### Improved Prompt
```text
You are a workflow coach.
Design a 5-step AI-assisted workflow for weekly report writing.
For each step include: step goal, input, output, quality check, risk, fallback action.
Output as markdown table.
```

### Steps and Commands
1. Generate first draft workflow.
```bash
gemini -p "You are a workflow coach. Design a 5-step AI-assisted workflow for weekly report writing. For each step include goal, input, output, quality check, risk, fallback. Output as markdown table." > deliverables/TEAM_ALPHA/workflow-basics.md
```
2. Improve clarity and reduce ambiguity.
```bash
gemini -p "Revise @deliverables/TEAM_ALPHA/workflow-basics.md for beginners. Make each step executable in under 10 minutes." > deliverables/TEAM_ALPHA/workflow-basics-v2.md
```

### Time Gates
- Minute 4: all teams have first draft file.
- Minute 8: all teams have revised file.
- Minute 10: submit v2 file.

### Expected Output Sample (Short)
```markdown
| Step | Goal | Input | Output | Quality Check | Risk | Fallback |
|---|---|---|---|---|---|---|
| 1 | Collect data | Weekly metrics | Raw notes | All sources included | Missing data | Use previous week baseline |
```

### Common Failures and Recovery
- Failure: output is generic.
	- Recovery: add role + constraints + format requirements.
- Failure: too long to execute.
	- Recovery: cap each step with time limit in prompt.

### Facilitator Intervention
- If 30% blocked, pause and provide a shared improved prompt template on screen.

### Success Criteria
- At least 5 actionable steps.
- Each step contains quality check and fallback.
- Workflow is beginner executable.

---

## Lab B: CLI Project Audit (20 min)

### Objective
Use Gemini CLI to inspect project files and produce a prioritized action plan.

### Prerequisites
- A readable project context file exists.

### Steps and Commands
1. Generate architecture summary and risks.
```bash
gemini -p "Analyze @docs/course-outline.md and @docs/lab-guide.md. Return architecture/structure summary and top risks for workshop delivery." > deliverables/TEAM_ALPHA/audit-summary.md
```
2. Convert summary into ranked action list.
```bash
gemini -p "Using @deliverables/TEAM_ALPHA/audit-summary.md, provide top 5 improvements ranked by impact and effort in markdown table." > deliverables/TEAM_ALPHA/action-plan.md
```
3. Extract day-1 quick wins.
```bash
gemini -p "From @deliverables/TEAM_ALPHA/action-plan.md, list 3 quick wins that can be done today with exact owner and expected result." > deliverables/TEAM_ALPHA/quick-wins.md
```

### Time Gates
- Minute 7: summary generated.
- Minute 14: action plan generated.
- Minute 20: quick wins finalized.

### Expected Output Sample (Short)
```markdown
| Priority | Action | Impact | Effort | Why |
|---|---|---|---|---|
| 1 | Add command-level lab steps | High | Low | Removes learner ambiguity |
```

### Common Failures and Recovery
- Failure: recommendations are vague.
	- Recovery: require owner, effort estimate, and measurable outcome.
- Failure: no ranking.
	- Recovery: force table columns with Priority 1-5.

### Facilitator Intervention
- If teams stall, provide one starter command and ask them to only edit output format.

### Success Criteria
- Ranked top 5 improvements with rationale.
- Includes quick wins and ownership.
- Actions are specific and implementable.

---

## Lab C: Automated Content Pack (20 min)

### Objective
Generate multi-channel content from one product brief with consistent messaging.

### Input Brief (Fill Before Running)
- Product: AI workshop for junior teams
- Audience: team leads and new analysts
- Key value proposition: faster reporting with reliable AI workflows
- Tone: practical, confident, clear
- Call to action: register this week

### Baseline Prompt
```text
Write social post and email for my workshop.
```

### Improved Prompt
```text
You are a senior content strategist.
From this brief, create Thai+English outputs:
1) social caption (<=80 words)
2) email draft (120-180 words)
3) landing hero copy (headline + subheadline + CTA)
Keep message consistent and avoid unsupported claims.
```

### Steps and Commands
1. Generate first content pack.
```bash
gemini -p "You are a senior content strategist. From this brief create Thai+English outputs: social caption <=80 words, email draft 120-180 words, landing hero copy with headline subheadline CTA. Brief: Product=AI workshop for junior teams; Audience=team leads and new analysts; Value=faster reporting with reliable AI workflows; Tone=practical and confident; CTA=register this week." > deliverables/TEAM_ALPHA/content-pack.md
```
2. Improve conversion strength.
```bash
gemini -p "Revise @deliverables/TEAM_ALPHA/content-pack.md with stronger CTA and clearer differentiation from generic AI training." > deliverables/TEAM_ALPHA/content-pack-v2.md
```

### Time Gates
- Minute 8: first content pack complete.
- Minute 15: revised version complete.
- Minute 20: submit v2 file.

### Common Failures and Recovery
- Failure: channel outputs look identical.
	- Recovery: specify channel constraints and length limits.
- Failure: weak CTA.
	- Recovery: require action verb + deadline + outcome.

### Facilitator Intervention
- If many teams are stuck, provide one example of good CTA and ask teams to rewrite only CTA first.

### Success Criteria
- Consistent core message across channels.
- Tone matches audience.
- CTA is clear, measurable, and time-bound.

---

## Lab D: Web App AI Integration (20 min)

### Objective
Run a minimal web endpoint and validate structured JSON output.

### Steps and Commands
1. Start the web app starter.
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining/materials/webapp-starter
npm install
cp .env.example .env
npm start
```
2. In a new terminal, call API endpoint.
```bash
curl -s -X POST http://localhost:3000/api/generate -H "Content-Type: application/json" -d '{"input":"Summarize Q2 sales and support trends"}' > /Users/taweesaksamanchuen/Dev/GeminiCliTraining/deliverables/TEAM_ALPHA/api-response.json
```
3. Test error path.
```bash
curl -s -X POST http://localhost:3000/api/generate -H "Content-Type: application/json" -d '{"invalid":"payload"}'
```

### Time Gates
- Minute 6: server running.
- Minute 12: success response saved.
- Minute 20: error-path behavior explained.

### Expected Output Check
- `api-response.json` contains `ok: true` and `result` object.
- Error path returns readable message.

### Common Failures and Recovery
- Failure: `npm start` run at repository root.
	- Recovery: run command inside `materials/webapp-starter`.
- Failure: port already in use.
	- Recovery: set `PORT=3001` in `.env` and restart.

### Facilitator Intervention
- If many cannot start server, do shared live run and let learners only test API calls.

### Success Criteria
- Endpoint responds with valid JSON.
- Learner demonstrates both success and error calls.

---

## Lab E: Data Insight Summarization (15 min)

### Objective
Turn CSV data into decision-ready insights.

### Steps and Commands
1. Generate initial insight report.
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini -p "Analyze @materials/sample-data/sales.csv and @materials/sample-data/support_tickets.csv. Return: top trends with numbers, anomalies with likely causes, and 3 recommendations with expected impact and confidence." > deliverables/TEAM_ALPHA/insight-report.md
```
2. Force executive summary format.
```bash
gemini -p "Revise @deliverables/TEAM_ALPHA/insight-report.md into executive format: 5 bullet summary, risk table, next-30-day actions." > deliverables/TEAM_ALPHA/insight-report-v2.md
```

### Time Gates
- Minute 6: first report complete.
- Minute 12: executive revision complete.
- Minute 15: final submit.

### Expected Output Sample (Short)
```markdown
- Revenue grows in North Online from 125000 (Jan) to 164000 (Jun), about +31%.
- Critical billing tickets rise with lower satisfaction (2.8 then 2.6), indicating service risk.
```

### Common Failures and Recovery
- Failure: claims without numbers.
	- Recovery: require numeric references from CSV rows/fields.
- Failure: recommendations are too generic.
	- Recovery: require owner + timeline + KPI for each action.

### Facilitator Intervention
- If outputs are inconsistent, project one sample insight and ask teams to match structure.

### Success Criteria
- Insight statements reference data.
- Anomalies and recommendations are linked.
- Report is manager-ready.

---

## Capstone (15 min)

### Challenge
Show one end-to-end workflow:
- Input -> Prompt -> AI process -> output artifact -> validation

### Submission Format
1. Problem statement (1 sentence)
2. Prompt used (copy text)
3. Output artifact file name
4. Quality check and risk note

### Rubric (1-5 each)
1. Problem framing clarity
2. Prompt quality
3. Output usefulness
4. Safety and validation awareness
5. Delivery clarity

### Score Anchors
- 1: unclear, generic, not reusable
- 3: useful with minor fixes
- 5: immediately reusable by team

## Troubleshooting Quick Tips
- Auth fails: redo sign-in and test with one short prompt.
- Generic output: tighten role, constraints, and format.
- Weak insights: require numeric evidence and ranked recommendations.
