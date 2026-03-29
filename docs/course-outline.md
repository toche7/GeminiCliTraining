# Gemini CLI Workshop (3 Hours)

## Course Identity
- Title: Gemini CLI Practical Workshop: From Agent Thinking to Working AI Outputs
- Duration: 3 hours (180 minutes)
- Audience: Beginners (Thai + English mixed)
- Format: 60% hands-on, 40% lecture
- Primary outcomes:
  - Understand AI Agents and workflow design
  - Use Gemini CLI productively from command line
  - Generate content automatically with reusable prompts
  - Connect a web application flow with AI output
  - Analyze data and summarize business insights

## Learning Outcomes (By End of Class)
Participants can:
1. Run Gemini CLI in interactive and headless modes.
2. Provide file context and produce useful AI outputs safely.
3. Use prompt templates for repeatable content generation.
4. Explain and implement a simple web app integration pattern.
5. Summarize CSV data into actionable recommendations.

## Agenda (Minute-by-Minute)

### 0:00-0:10 | Kickoff + Environment Check (10 min)
- Thai: แนะนำเป้าหมายคอร์สและเช็คเครื่องมือก่อนเริ่ม
- English: Course goal and setup verification
- Trainer actions:
  - Verify Node.js and Gemini CLI install
  - Verify sign-in/auth flow works
  - Confirm each learner has workshop folder
- Success check:
  - Learners can run one simple prompt and receive output

### 0:10-0:35 | Module A: พื้นฐาน AI Agents & Workflow Design (25 min)
- Concepts:
  - What is an AI agent loop: intent -> context -> action -> output -> refine
  - Prompt quality and constraints for reliable output
  - Safety model: approval prompts, trust boundaries, risky actions
- Demo:
  - Ask for a structured plan with role, goal, constraints, output format
- Teaching script (short):
  - Thai: Agent ที่ดีไม่ใช่แค่ถามเก่ง แต่ต้องให้ context และกรอบ output ชัดเจน
  - English: Good agent usage is context design plus clear output contract

### 0:35-0:45 | Lab A (10 min)
- Task:
  - Run a prompt that generates a mini workflow for personal use case
- Prompt starter:
  - "Design a 5-step workflow for [task], include risks, checks, and expected output format"
- Deliverable:
  - 1 markdown workflow artifact from each learner

### 0:45-1:25 | Module B: Agent CLI - Gemini CLI in Practice (40 min)
- Topics:
  - Core usage:
    - Interactive mode
    - One-shot headless mode
    - Resume sessions
  - Context input:
    - Include file/folder context
    - Ask for summaries and action lists
  - Shell workflow:
    - Build command + AI explanation pattern
- Demo flow:
  - Analyze a project folder
  - Ask for improvement plan by priority
  - Generate a short status report

### 1:25-1:45 | Lab B (20 min)
- Task:
  - Use Gemini CLI to audit a small local project and create prioritized action items
- Deliverable:
  - action-plan.md with 5 priorities and rationale
- Assessment:
  - priorities are clear, specific, and feasible

### 1:45-2:20 | Module C: ✍️ สร้าง Content อัตโนมัติด้วย AI (35 min)
- Topics:
  - Prompt templates for repeatability
  - Tone, audience, and channel adaptation
  - Batch generation strategy
  - Structured outputs for copy/review workflows
- Demo:
  - Product brief -> social post + email + landing intro (Thai + English)
- Quality checklist:
  - Tone fit
  - CTA clarity
  - factual consistency

### 2:20-2:40 | Lab C (20 min)
- Task:
  - Create a 3-channel content pack from one brief
- Deliverable:
  - content-pack.md with:
    - social caption
    - email draft
    - landing page hero copy

### 2:40-3:20 | Module D + E (40 min)

#### D: 🌐 สร้าง Web Application เชื่อมต่อ AI (20 min)
- Integration pattern:
  - Frontend input form
  - Backend endpoint
  - AI call
  - Structured response
- Explain:
  - API key handling and server-side safety
  - error handling and timeout fallback

#### E: 📊 วิเคราะห์ข้อมูลและสรุป Insight ด้วย AI (20 min)
- Data workflow:
  - load CSV
  - summarize trend
  - identify anomaly
  - propose actions
- Demo:
  - sales + support tickets -> executive summary

### 3:20-3:35 | Labs D + E (15 min)
- Lab D mini-task:
  - hit local endpoint and get generated response
- Lab E mini-task:
  - generate insight report from provided CSVs
- Deliverables:
  - api-response.json
  - insight-report.md

### 3:35-3:50 | Capstone Showcase (15 min)
- Each learner/team shows one end-to-end flow:
  - Input -> Prompt -> AI output -> usable artifact
- Rubric:
  - correctness, structure, usefulness, safety awareness

### 3:50-4:00 | Q&A + Next Steps (10 min)
- Recap:
  - workflow patterns learners can reuse tomorrow
- Next path:
  - advanced integrations, team prompt standards, reusable templates

## Instructor Checklist
- Before class:
  - Pre-run all demos and labs
  - Prepare fallback screenshots for auth/network failure
  - Ensure sample data files are available
- During class:
  - Keep demos under 7 minutes each
  - Move quickly from concept to execution
  - Timebox discussions
- After class:
  - share templates and starter project
  - collect learner outputs for review

## Time Recovery Plan (If Behind)
1. Shorten Module D explanation to 10 min.
2. Keep Lab E mandatory; reduce capstone demo count.
3. Move advanced troubleshooting to appendix/Q&A.

## Materials Map
- docs/lab-guide.md
- docs/prompt-templates.md
- docs/demo-commands.md
- docs/instructor-runbook.md
- docs/lab-answer-keys.md
- materials/sample-data/sales.csv
- materials/sample-data/support_tickets.csv
- materials/webapp-starter
- slides/workshop-deck.md
