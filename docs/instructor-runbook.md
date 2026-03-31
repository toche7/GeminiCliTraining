# Instructor Runbook: Gemini CLI Workshop

## Purpose
Operational guide for running the full 3-hour session with minimal ambiguity.

## Session Snapshot
- Audience: beginner
- Language: Thai + English mixed
- Format: 60% hands-on, 40% lecture
- Output target: every team submits 5 lab artifacts + 1 capstone

## Pre-Class Checklist (T-30 min)
1. Verify internet and authentication flow.
2. Verify starter app boots on trainer machine.
3. Open timer and keep it visible.
4. Prepare fallback screenshots for auth/network problems.
5. Confirm sample datasets are accessible.
6. Verify the `gemini.md` demo path works on trainer machine.

## Delivery Script by Block

### Block 1 (0:00-0:45)
- Slides 1-9 then Lab A start.
- Key message: prompt contract quality controls output quality.
- Facilitation pattern:
  - Explain 2-3 min
  - Demo 3-5 min
  - Learners run 8-12 min

### Block 2 (0:45-1:45)
- Module B + Lab B.
- Key message: REPL basics, optional `/init` bootstrap, context-first prompting, repo guidance via `gemini.md`, and ranking outputs by impact.
- If behind by >5 min:
  - Skip extended Q&A and move to guided prompt template.
- Fallback for instruction-file demo:
  - If Gemini CLI does not auto-read `gemini.md` in the learner environment, require explicit `@gemini.md` in the prompt so the experiment still works.
  - If `/init` is unavailable in learner environments, skip bootstrap and continue with the instructor-provided `gemini.md`.

### Block 3 (1:45-2:40)
- Module C + Lab C.
- Key message: keep one REPL session open, generate from one brief, then improve the draft with targeted follow-up prompts.
- Watch for common issue:
  - outputs too generic -> ask teams to add length limits and audience details.
  - session drift -> have teams restate the brief in one compact prompt or use `/reset` before retrying.

### Block 4 (2:40-3:35)
- Module D+E and Labs D+E.
- Key message: Module D implements Lab C content in a simple website, and Module E optimizes that website output with actionable recommendations.
- Fallback if server issues:
  - do live demo once and let teams submit generated `landing-page-v1.html` only.
- Fallback if Lab C artifact missing:
  - allow manual `input` mode in Lab D so learners can continue, then map back to artifact mode in recap.
- Fallback if content path is invalid:
  - provide one canonical path: `deliverables/TEAM_ALPHA/content-pack-v2.md` and rerun.

### Block 5 (3:35-4:00)
- Capstone + rubric + closing.
- Keep each team to 3 minutes hard limit.

## Intervention Rules
- If 30% of class is blocked for >3 minutes:
  1. Pause all teams.
  2. Diagnose once on projector.
  3. Provide one canonical command.
  4. Resume with 2-minute extension.

## Time Recovery Rules
1. Reduce optional examples before cutting labs.
2. Keep Lab E mandatory.
3. Cap capstone demos to top 5 teams if needed.

## Quality Control Rubric Anchor
- Score 1: unclear prompt, generic output, weak validation.
- Score 3: useful output, minor gaps in specificity.
- Score 5: reusable workflow with clear checks and measurable impact.

## Post-Class Follow-Up
1. Collect artifacts from deliverables folders.
2. Share best examples and common mistakes.
3. Send next-step path: standard prompt library, `gemini.md` template, and workflow templates.
