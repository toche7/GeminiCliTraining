# Slide Deck Script: Gemini CLI Workshop

Use this file as presenter notes. Each slide includes timing, talking points, and audience checkpoints.

## Slide 1 - Title (2 min)
### On Slide
- Gemini CLI Practical Workshop
- Thai + English mixed
- Beginner friendly, hands-on first

### Speaker Notes
- TH: วันนี้เราจะเรียนแบบลงมือทำ เพื่อให้ทุกคนกลับไปใช้งานได้จริงทันที
- EN: Today is execution-focused. Every module ends with an artifact you can reuse at work.

### Audience Checkpoint
- Ask: "Who already used CLI more than 1 month?"

### Transition
- "Before tools, we align on why workflow matters."

## Slide 2 - Why This Course (2 min)
### On Slide
- Move from AI chat to AI workflow
- Build repeatable outputs for real work
- Learn by doing, not theory only

### Speaker Notes
- TH: แชตอย่างเดียวมักได้ผลลัพธ์ที่ไม่คงที่ แต่ workflow จะทำให้คุณภาพสม่ำเสมอ
- EN: Workflow means repeatability, quality control, and easier team handover.

### Transition
- "Now let us define what success looks like in 3 hours."

## Slide 3 - Outcomes (2 min)
### On Slide
- Design AI workflows
- Operate Gemini CLI confidently
- Generate content packs quickly
- Connect web app flow with AI output
- Produce insight summaries from raw data

### Speaker Notes
- TH: เป้าหมายคือทำได้ครบตั้งแต่รับโจทย์ถึงส่งมอบผลลัพธ์
- EN: We are optimizing for practical outputs, not just tool familiarity.

### Audience Checkpoint
- Ask learners to pick 1 outcome they need most.

### Transition
- "Here is the agenda that gets us there."

## Slide 4 - Agenda Overview (3 min)
### On Slide
- Module A: AI Agent fundamentals
- Module B: Gemini CLI operations
- Module C: Content automation
- Module D: Web app integration
- Module E: Data insights

### Speaker Notes
- TH: โครงสร้างนี้ไล่จากแนวคิด -> คำสั่ง -> การใช้งานจริง
- EN: Every module maps to one lab output file.

### Transition
- "Start with the agent loop so prompts become deliberate."

## Slide 5 - Agent Loop (4 min)
### On Slide
Intent -> Context -> Action -> Output -> Validate -> Iterate

### Speaker Notes
- TH: ถ้าไม่มี context และ validation ผลลัพธ์จะไม่เสถียร
- EN: The loop is your quality system, not just a diagram.

### Live Demo
```bash
gemini -p "Design a 5-step workflow for weekly sales report with quality checks"
```

### Transition
- "Loop quality depends heavily on prompt structure."

## Slide 6 - Prompt Design Rules (4 min)
### On Slide
- Role clarity
- Constraints
- Output contract
- Quality checks

### Speaker Notes
- TH: Prompt ที่ดีคือมีบทบาท ข้อจำกัด และรูปแบบผลลัพธ์ชัด
- EN: If format is vague, quality review becomes expensive.

### Demo Snippet
```text
Role: You are a workflow architect
Goal: ...
Constraints: ...
Output format: markdown table
```

### Audience Checkpoint
- Ask 1 volunteer to improve a weak prompt on screen.

### Transition
- "After prompting, safety controls decide what is safe to execute."

## Slide 7 - Safety Model (3 min)
### On Slide
- Approval gates
- Trust boundaries
- Risky command awareness

### Speaker Notes
- TH: อย่าปิด safety โดยไม่จำเป็น โดยเฉพาะคำสั่งที่แตะไฟล์ระบบ
- EN: Keep approvals visible for beginners to learn safe automation habits.

### Transition
- "Now we move into Gemini CLI core usage."

## Slide 8 - Gemini CLI Core Usage (5 min)
### On Slide
- Interactive flow
- One-shot prompt flow
- Session continuation

### Live Demo Commands
```bash
gemini
gemini -p "Summarize top 5 capabilities of Gemini CLI for beginners"
```

### Speaker Notes
- TH: Interactive เหมาะกับสำรวจ, one-shot เหมาะกับงานเป็นขั้นตอน
- EN: Teach learners when to use each mode to control time and consistency.

### Transition
- "Next: improve output quality by adding file context."

## Slide 9 - Context Injection (5 min)
### On Slide
- Use local files and folders
- Ask summary first
- Then request prioritized actions

### Live Demo Command
```bash
gemini -p "Analyze @docs/course-outline.md and return 3 strengths, 3 risks, and next actions"
```

### Speaker Notes
- TH: ให้ AI อ่านไฟล์จริงก่อน จะลดการเดา
- EN: Context first, recommendations second.

### Transition
- "Hands-on block: Lab A and B."

## Slide 10 - Hands-on A+B (3 min)
### On Slide
- Lab A: Workflow design artifact
- Lab B: Project audit action plan
- Output files required

### Trainer Cue
- Start a visible countdown timer.
- Walk aisles at minute 5 and minute 10.

### Transition
- "After operations, we automate content at scale."

## Slide 11 - Content Automation (4 min)
### On Slide
One brief -> many channels
Consistency + tone control + CTA alignment

### Speaker Notes
- TH: ใช้ prompt template เดียว แล้วแตก output ตามช่องทาง
- EN: Reusability is the key productivity gain.

### Live Demo
```bash
gemini -p "Create Thai+English social post, email draft, and hero copy from this brief: ..."
```

### Transition
- "Quality checklist ensures content is usable, not just creative."

## Slide 12 - Content Quality Checklist (3 min)
### On Slide
- Message consistency
- Audience match
- Conversion clarity
- No unsupported claims

### Audience Checkpoint
- Ask teams to self-score content 1-5 on each criterion.

### Transition
- "Now we connect AI output into an app flow."

## Slide 13 - Web App Integration Pattern (4 min)
### On Slide
Frontend form -> backend endpoint -> AI -> structured JSON response

### Speaker Notes
- TH: จุดสำคัญคือ response ต้องเป็นโครงสร้างเพื่อให้ frontend ใช้งานง่าย
- EN: Structured JSON enables predictable UI rendering.

### Visual Direction
- Show a 4-box flow diagram with request/response arrows.

### Transition
- "Guardrails prevent security and reliability issues."

## Slide 14 - Integration Guardrails (4 min)
### On Slide
- Keep keys server-side
- Add timeout handling
- Return readable errors

### Live Demo
```bash
curl -X POST http://localhost:3000/api/generate -H "Content-Type: application/json" -d '{"input":"Summarize Q2 performance"}'
```

### Speaker Notes
- TH: อย่าเก็บ API key ใน frontend เด็ดขาด
- EN: Error messages must be understandable for non-engineers.

### Transition
- "Next we apply similar structure to data analysis."

## Slide 15 - Data Insight Pattern (4 min)
### On Slide
Raw CSV -> trend extraction -> anomaly detection -> recommendations

### Live Demo
```bash
gemini -p "Analyze @materials/sample-data/sales.csv and @materials/sample-data/support_tickets.csv. Return trends, anomalies, and 3 actions."
```

### Speaker Notes
- TH: ให้ยกตัวเลขจากข้อมูลมาด้วยทุก insight
- EN: Require evidence-backed statements.

### Transition
- "Insights must be manager-ready and actionable."

## Slide 16 - Manager-Ready Reporting (3 min)
### On Slide
- Concise summary
- Quant-backed findings
- Prioritized recommendations

### Speaker Notes
- TH: รูปแบบรายงานที่ดีอ่านจบใน 60 วินาที
- EN: Keep output short, ranked, and decision-oriented.

### Transition
- "Final activity is a short capstone showcase."

## Slide 17 - Capstone Brief (3 min)
### On Slide
Build one end-to-end workflow and present in 3 minutes

### Required Structure
1. Problem statement
2. Prompt strategy
3. Output artifact
4. Validation approach

### Transition
- "Scoring is transparent. Here is the rubric."

## Slide 18 - Evaluation Rubric (3 min)
### On Slide
- Framing
- Prompt quality
- Output utility
- Safety awareness
- Communication

### Scoring Anchor
- 1 = unclear and not reusable
- 3 = workable with minor fixes
- 5 = production-ready for team usage

### Transition
- "Before closing, avoid these common mistakes."

## Slide 19 - Common Pitfalls (3 min)
### On Slide
- Vague prompts
- Missing output format
- No verification step
- No fallback path

### Speaker Notes
- TH: ผู้เรียนส่วนใหญ่พลาดที่ไม่กำหนด output ให้ชัด
- EN: Most failures are prompt contract failures, not model failures.

### Transition
- "Last slide: what to do tomorrow after this workshop."

## Slide 20 - Next Steps (2 min)
### On Slide
- Build team prompt library
- Standardize AI workflow templates
- Expand to advanced integrations

### Speaker Notes
- TH: เริ่มจากงานที่ทำซ้ำบ่อยก่อน เพื่อให้เห็น ROI เร็ว
- EN: Start small, standardize, and scale.

### Closing Line
- "You now have a full path from prompt to production-ready output."
