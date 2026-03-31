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
- Interactive flow: `gemini`
- One-shot prompt flow: `gemini -p "..."`
- Session management: `/chat list`, `/rewind`
- Context management: `/clear`, `/compress`
- Shell mode inside REPL: `!command`
- Optional repo bootstrap with `/init`

### Live Demo Commands
```bash
gemini
gemini -p "Summarize top 5 capabilities of Gemini CLI for beginners"
```
Inside REPL:
```text
!ls
/chat list
/clear
```

### Speaker Notes
- TH: Interactive เหมาะกับสำรวจ, one-shot เหมาะกับงานเป็นขั้นตอน
- EN: Teach learners when to use each mode to control time and consistency.
- TH: ใน REPL ใช้ `!command` เพื่อรัน shell โดยไม่ต้องออกจาก session เช่น `!npm run start`
- EN: `!command` runs a shell command without leaving the session; useful for build-then-explain patterns.
- TH: `/chat list` ดู session ที่บันทึกไว้, `/rewind` ย้อนกลับไปข้อความก่อนหน้าได้
- EN: `/chat list` shows saved checkpoints; `/rewind` lets learners step back and re-prompt without restarting.
- TH: `/compress` ใช้เมื่อ context ยาวเกินไป, `/clear` ล้างหน้าจอและประวัติ
- EN: Use `/compress` to summarize long context; use `/clear` to reset screen and history.

### Keyboard Shortcuts to Mention
- Ctrl+P / Ctrl+N — cycle prompt history
- Ctrl+Enter — new line in input
- Ctrl+L — clear screen
- Ctrl+C — quit application

### Transition
- "Before context injection, show a quick `/init` bootstrap pattern."

## Slide 9 - REPL Bootstrap with /init (3 min)
### On Slide
- `/init` helps bootstrap repo guidance for first-time setup
- Run once per repo, then review and edit generated guidance
- If unavailable, continue with explicit `@gemini.md`

### Live Demo Command
```bash
gemini
/init
/quit
cat gemini.md
```

### Speaker Notes
- TH: `/init` เป็นตัวช่วยตั้งต้น ไม่ใช่การตั้งค่าที่สมบูรณ์ ต้องตรวจไฟล์ที่ได้เสมอ
- EN: Treat `/init` as scaffolding; refine the generated guidance before relying on it.
- TH: ถ้าบางเครื่องไม่มีคำสั่งนี้ ให้ข้ามและใช้ `@gemini.md` แบบ explicit ต่อได้ทันที
- EN: If `/init` is unavailable, skip bootstrap and continue with explicit `@gemini.md` workflow.
- TH: หลัง `/init` ใช้ `/chat save <tag>` เพื่อบันทึก session ก่อน `/quit`
- EN: After `/init`, optionally run `/chat save <tag>` to checkpoint the session before quitting.

### Transition
- "Now use file context and compare guided vs baseline output."

## Slide 10 - Context Injection (5 min)
### On Slide
- Use local files and folders
- Test repo guidance with `gemini.md`
- Ask summary first
- Then request prioritized actions

### Live Demo Command
```bash
gemini -p "Analyze @docs/course-outline.md and return 3 strengths, 3 risks, and next actions"
gemini -p "Analyze @docs/course-outline.md and follow @gemini.md. Return 3 strengths, 3 risks, next actions, and note what changed because of gemini.md"
```

### Speaker Notes
- TH: ให้ AI อ่านไฟล์จริงก่อน จะลดการเดา
- EN: Context first, recommendations second.
- TH: ถ้า environment ไม่อ่าน `gemini.md` อัตโนมัติ ให้ใส่ `@gemini.md` ใน prompt ตรง ๆ
- EN: If auto-loading is unavailable, explicit file inclusion still lets learners test the pattern.

### Transition
- "Before the lab, define what gemini.md is and how to test it."

## Slide 11 - What Is gemini.md? (4 min)
### On Slide
- Repo-level guidance file for Gemini CLI
- Stores repeatable rules for this project
- Best for format, priority, and safety constraints
- Test by comparing with and without `@gemini.md`

### Live Demo Command
```bash
cat gemini.md
gemini -p "Analyze @docs/course-outline.md and return 3 strengths, 3 risks, and next actions"
gemini -p "Analyze @docs/course-outline.md and follow @gemini.md. Return 3 strengths, 3 risks, next actions, and explain what changed because of gemini.md"
```

### Speaker Notes
- TH: อธิบายว่า `gemini.md` ไม่ใช่ magic file แต่เป็น repo guidance ที่ช่วยให้ output สม่ำเสมอขึ้น
- EN: Treat it as a project contract for the model: preferred format, ranking logic, and guardrails.
- TH: สิ่งที่ควรใส่คือรูปแบบผลลัพธ์, วิธีจัดลำดับความสำคัญ, และข้อห้ามสำคัญของ repo นี้
- EN: The proof is comparative: if the file is useful, the guided output should become more specific and more reusable.

### Transition
- "Now use that pattern in the hands-on block."

## Slide 12 - Hands-on A+B (3 min)
### On Slide
- Lab A: Workflow design artifact
- Lab B: Project audit + `gemini.md` test
- Output files required

### Trainer Cue
- Start a visible countdown timer.
- Walk aisles at minute 5 and minute 10.

### Transition
- "After operations, we automate content at scale."

## Slide 13 - Content Automation (4 min)
### On Slide
One brief -> 3 outputs
One REPL session -> draft -> revise -> self-check
Thai + English with consistent CTA

### Speaker Notes
- TH: ใน lab นี้ learner ต้องทำ 3 channel จาก brief เดียว: social caption, email draft, และ landing hero copy ทั้งภาษาไทยและอังกฤษ
- EN: The lab goal is specific: one brief, three channel outputs, same REPL session, then a stronger second version plus one final self-check.
- TH: baseline prompt ใช้เพื่อเปรียบเทียบคุณภาพ prompt ถ้าเวลาน้อยสามารถข้ามได้ แต่ improved prompt และ revision prompt ต้องทำ

### Live Demo
```bash
gemini
```

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

```text
Revise the previous content pack.
Make the CTA stronger and more specific.
Differentiate this workshop from generic AI training.
Keep the same 3 channels and keep Thai + English output.
```

### Transition
- "Keep the same REPL session open, then use the quality checklist to tighten the draft."

## Slide 14 - Content Quality Checklist (3 min)
### On Slide
- Message consistency
- Audience fit: team leads + new analysts
- CTA = action verb + deadline + outcome
- No unsupported claims

### Audience Checkpoint
- Ask teams to self-score the latest REPL draft 1-5 on each criterion.

### Transition
- "Now we connect AI output into an app flow."

## Slide 15 - Web App Integration Pattern (4 min)
### On Slide
Lab C hero artifact -> Gemini CLI -> landing-page-v1.html -> local preview

### Speaker Notes
- TH: ให้ย้ำว่า Lab D ใช้ output จาก Lab C มาสร้างหน้าเว็บจริงด้วย Gemini CLI
- EN: This is implementation continuity: content creation in C, website build in D.

### Visual Direction
- Show 4-box flow with artifact source label: `content-pack-v2.md` -> generate HTML -> preview.

### Transition
- "Guardrails prevent security and reliability issues."

## Slide 16 - Integration Guardrails (4 min)
### On Slide
- Generate in project folder only
- Keep secrets server-side
- Validate output before publish

### Live Demo
Enter REPL and paste prompt:
```bash
gemini
```
```text
Using @deliverables/TEAM_ALPHA/content-pack-v2.md, generate a responsive single-file landing page HTML with embedded CSS.
Include: hero headline, subheadline, CTA, one trust section, and footer. Keep bilingual tone. Return HTML only.
```
Then save:
```text
/save deliverables/TEAM_ALPHA/landing-page-v1.html
/quit
```

### Speaker Notes
- TH: ห้ามสั่งให้ tool สร้างไฟล์ออกนอก repo และต้องตรวจหน้าเว็บก่อนใช้งานจริง
- EN: Use REPL for interactive feedback, then validate visual and copy quality before publishing.

### Transition
- "Next we apply similar structure to data analysis."

## Slide 17 - Data Insight Pattern (4 min)
### On Slide
landing-page-v1.html -> conversion risk review -> prioritized recommendations

### Live Demo
```bash
gemini -p "Analyze @deliverables/TEAM_ALPHA/landing-page-v1.html and @deliverables/TEAM_ALPHA/content-pack-v2.md. Return 3 strengths, 3 conversion risks, and 3 prioritized recommendations."
```

### Speaker Notes
- TH: ทุกข้อเสนอแนะต้องอ้างอิงข้อความจริงจากหน้าเว็บหรือ hero line
- EN: Recommendations must map to concrete page elements and expected KPI impact.

### Transition
- "Insights must be manager-ready and actionable."

## Slide 18 - Manager-Ready Reporting (3 min)
### On Slide
- Concise summary
- Quant-backed findings
- Prioritized recommendations

### Speaker Notes
- TH: รูปแบบรายงานที่ดีอ่านจบใน 60 วินาที
- EN: Keep output short, ranked, and decision-oriented.

### Transition
- "Final activity is a short capstone showcase."

## Slide 19 - Capstone Brief (3 min)
### On Slide
Build one end-to-end workflow and present in 3 minutes

### Required Structure
1. Problem statement
2. Prompt strategy
3. Output artifact
4. Validation approach

### Transition
- "Scoring is transparent. Here is the rubric."

## Slide 20 - Evaluation Rubric (3 min)
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

## Slide 21 - Common Pitfalls (3 min)
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

## Slide 22 - Next Steps (2 min)
### On Slide
- Build team prompt library
- Standardize AI workflow templates
- Expand to advanced integrations

### Speaker Notes
- TH: เริ่มจากงานที่ทำซ้ำบ่อยก่อน เพื่อให้เห็น ROI เร็ว
- EN: Start small, standardize, and scale.

### Closing Line
- "You now have a full path from prompt to production-ready output."
