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
- Key message: context-first prompting and ranking outputs by impact.
- If behind by >5 min:
  - Skip extended Q&A and move to guided prompt template.

### Block 3 (1:45-2:40)
- Module C + Lab C.
- Key message: one brief can become multi-channel content with constraints.
- Watch for common issue:
  - outputs too generic -> ask teams to add length limits and audience details.

### Block 4 (2:40-3:35)
- Module D+E and Labs D+E.
- Key message: structured responses are easier to integrate and evaluate.
- Fallback if server issues:
  - do live demo once and let teams submit curl output only.

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
3. Send next-step path: standard prompt library and workflow templates.
