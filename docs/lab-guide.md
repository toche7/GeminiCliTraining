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
Use Gemini CLI to inspect project files, test repo guidance with `gemini.md`, and produce a prioritized action plan.

### Prerequisites
- A readable project context file exists.
- The repository root contains `gemini.md` (or create it via optional `/init` step below).

### Steps and Commands
1. Optional bootstrap for first-time repo setup in REPL.
```bash
gemini
/init
/quit
```
2. Inspect the repo instruction file.
```bash
cat /Users/taweesaksamanchuen/Dev/GeminiCliTraining/gemini.md
```
3. Generate a baseline architecture summary and risks.
```bash
gemini -p "Analyze @docs/course-outline.md and @docs/lab-guide.md. Return architecture/structure summary and top risks for workshop delivery." > deliverables/TEAM_ALPHA/audit-summary-baseline.md
```
4. Generate the guided version using `gemini.md` explicitly.
```bash
gemini -p "Analyze @docs/course-outline.md and @docs/lab-guide.md. Follow @gemini.md. Return architecture/structure summary and top risks for workshop delivery. End with a section named Instruction Effect explaining what changed because of gemini.md." > deliverables/TEAM_ALPHA/audit-summary.md
```
5. Convert summary into ranked action list.
```bash
gemini -p "Using @deliverables/TEAM_ALPHA/audit-summary.md, provide top 5 improvements ranked by impact and effort in markdown table." > deliverables/TEAM_ALPHA/action-plan.md
```
6. Extract day-1 quick wins.
```bash
gemini -p "From @deliverables/TEAM_ALPHA/action-plan.md, list 3 quick wins that can be done today with exact owner and expected result." > deliverables/TEAM_ALPHA/quick-wins.md
```

### Time Gates
- Minute 3: optional `/init` completed (or skipped if already set).
- Minute 5: `gemini.md` reviewed.
- Minute 9: baseline summary generated.
- Minute 14: guided summary generated.
- Minute 18: action plan generated.
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
- Failure: learner cannot tell whether `gemini.md` had any effect.
	- Recovery: compare baseline and guided outputs side by side, then ask Gemini to summarize the differences explicitly.
- Failure: local Gemini setup does not auto-load `gemini.md`.
	- Recovery: keep using explicit `@gemini.md` in the prompt for the test.
- Failure: `/init` command is unavailable in learner CLI version.
	- Recovery: skip `/init` and continue with explicit `@gemini.md` workflow using the repository file provided by instructor.

### Facilitator Intervention
- If teams stall, provide one starter command and ask them to only edit output format.

### Success Criteria
- Ranked top 5 improvements with rationale.
- Includes quick wins and ownership.
- Actions are specific and implementable.
- Team can explain how `gemini.md` influenced or did not influence the result.

---

## Lab C: Automated Content Pack (20 min)

### Objective
Generate multi-channel content from one product brief inside one REPL session, then refine the draft with follow-up prompts.

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
1. Start Gemini CLI in REPL mode.
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini
```
2. Paste the baseline prompt and note what is missing.
```text
Write social post and email for my workshop.
```
3. In the same session, paste the improved prompt with the full brief and save the best response into `deliverables/TEAM_ALPHA/content-pack.md`.
```text
You are a senior content strategist.
From this brief, create Thai+English outputs:
1) social caption (<=80 words)
2) email draft (120-180 words)
3) landing hero copy (headline + subheadline + CTA)
Use clear section headings for Social, Email, and Hero in both languages.
Brief:
- Product: AI workshop for junior teams
- Audience: team leads and new analysts
- Value: faster reporting with reliable AI workflows
- Tone: practical and confident
- CTA: register this week
Keep message consistent and avoid unsupported claims.
```
4. Stay in the same REPL session and ask for a stronger second version, then save that output into `deliverables/TEAM_ALPHA/content-pack-v2.md`.
```text
Revise the previous content pack.
Make the CTA stronger and more specific.
Differentiate this workshop from generic AI training.
Keep the same 3 channels and keep Thai + English output.
```
5. Run one final self-check before you exit.
```text
Review the latest content pack against this checklist:
- message consistency across all 3 channels
- audience fit for team leads and new analysts
- CTA includes action verb, deadline, and outcome
- no unsupported claims
Return pass/fail with one fix per item.
```
6. Exit REPL when both files are saved.
```text
/quit
```

Note: this lab is REPL-first. Save deliverables by copying the approved REPL response into the markdown files listed above.

### Time Gates
- Minute 3: baseline prompt tested.
- Minute 10: first content pack saved.
- Minute 16: revised version saved.
- Minute 20: checklist review complete.

### Common Failures and Recovery
- Failure: channel outputs look identical.
	- Recovery: ask for explicit channel constraints and different job-to-be-done per channel.
- Failure: weak CTA.
	- Recovery: require action verb + deadline + outcome.
- Failure: the session drifts away from the brief.
	- Recovery: restate the brief in one short follow-up prompt or use `/reset` and rerun the improved prompt.

### Facilitator Intervention
- If many teams are stuck, ask them to keep the same REPL session open and rewrite only one part first, usually the CTA or hero line.
- If prompts are getting too long, suggest `/editor` so they can edit the next prompt more clearly.

### Success Criteria
- Consistent core message across channels.
- Tone matches audience.
- CTA is clear, measurable, and time-bound.
- `content-pack.md` and `content-pack-v2.md` are both saved from the REPL session.

---

## Lab D: Web App AI Integration (20 min)

### Objective
Use Gemini CLI to generate a simple website from your Lab C landing hero, then run and validate it locally.

### Steps and Commands
0. Confirm Lab C artifact exists (use v2 if available).
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
ls deliverables/TEAM_ALPHA/content-pack.md deliverables/TEAM_ALPHA/content-pack-v2.md
```
1. Enter REPL and generate landing page HTML from Lab C artifact.
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini
```
Then type this prompt in REPL:
```text
Using @deliverables/TEAM_ALPHA/content-pack-v2.md, generate a single-file landing page HTML with embedded CSS.
Include: hero headline, subheadline, CTA button, one trust section, and one footer.
Keep it responsive and preserve the bilingual tone.
Return HTML only.
```
After seeing the output, save it:
```text
/save deliverables/TEAM_ALPHA/landing-page-v1.html
```
2. Publish generated page to starter app and run local server.
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
cp deliverables/TEAM_ALPHA/landing-page-v1.html materials/webapp-starter/public/landing.html
cd materials/webapp-starter
npm install
cp .env.example .env
npm start
```
3. Optional revision—refine in the same REPL session or start a new one.
In REPL:
```text
Revise @deliverables/TEAM_ALPHA/landing-page-v1.html for better readability and stronger CTA hierarchy.
Keep output as single-file HTML and preserve bilingual tone.
```
Then save:
```text
/save deliverables/TEAM_ALPHA/landing-page-v2.html
```
When ready, exit REPL:
```text
/quit
```
4. Validate render and fallback behavior.
```bash
open http://localhost:3000/landing.html
```

### Time Gates
- Minute 3: REPL entered and first prompt given.
- Minute 8: HTML output reviewed and saved to file.
- Minute 14: local site running and preview visible.
- Minute 20: optional revision completed or quality review finalized.

### Expected Output Check
- `landing-page-v1.html` includes headline, subheadline, and CTA from Lab C.
- Local page loads at `/landing.html` without broken layout.
- Optional `landing-page-v2.html` shows clear improvement in hierarchy or CTA clarity.

### Common Failures and Recovery
- Failure: `npm start` run at repository root.
	- Recovery: run command inside `materials/webapp-starter`.
- Failure: port already in use.
	- Recovery: set `PORT=3001` in `.env` and restart.

### Facilitator Intervention
- If many cannot start server, do shared live run and let learners only test API calls.

### Success Criteria
- Learner generated website using Gemini CLI and Lab C artifact.
- Learner can run and preview the website locally.
- Learner can explain one concrete change between v1 and v2.

---

## Lab E: Data Insight Summarization (15 min)

### Objective
Turn Lab D website output into decision-ready optimization insights.

### Steps and Commands
1. Generate initial optimization report from Lab D page output.
```bash
cd /Users/taweesaksamanchuen/Dev/GeminiCliTraining
gemini -p "Analyze @deliverables/TEAM_ALPHA/landing-page-v1.html and @deliverables/TEAM_ALPHA/content-pack-v2.md. Return: 3 strengths of the landing page, 3 conversion risks, and 3 recommendations with expected impact and confidence." > deliverables/TEAM_ALPHA/insight-report.md
```
2. Force executive summary format with owner and KPI.
```bash
gemini -p "Revise @deliverables/TEAM_ALPHA/insight-report.md into executive format: 5 bullet summary, risk table, next-30-day actions with owner, KPI, and timeline." > deliverables/TEAM_ALPHA/insight-report-v2.md
```

### Time Gates
- Minute 6: first report complete.
- Minute 12: executive revision complete.
- Minute 15: final submit.

### Expected Output Sample (Short)
```markdown
- Hero headline is specific and differentiated, but CTA lacks proof detail and urgency in Thai copy.
- Risk: mixed claims ("up to 50%") without evidence may reduce trust for manager audience.
```

### Common Failures and Recovery
- Failure: recommendations are generic and not tied to hero content.
	- Recovery: require each recommendation to quote one exact line from `content-pack-v2.md`.
- Failure: actions are not executable.
	- Recovery: require owner + timeline + KPI for each action.

### Facilitator Intervention
- If outputs are inconsistent, project one sample insight and ask teams to match structure.

### Success Criteria
- Insight statements reference exact website elements or hero lines.
- Risks and recommendations are linked.
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
