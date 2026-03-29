# Prompt Templates (Thai + English)

## How to Use This File
1. Start with a baseline prompt.
2. Compare output quality.
3. Run the improved prompt.
4. Save both outputs for learning review.

Lab mapping:
- Lab A: Section 1
- Lab B: Section 2
- Lab C: Section 3
- Lab D: Section 4
- Lab E: Section 5

## 1) AI Agent Workflow Design

### Baseline
"Design a workflow for weekly reporting."

### Template
"You are an AI workflow architect.
Goal: [goal]
Audience: [audience]
Constraints: [time/tools/rules]
Input available: [data/files/context]
Output format: [table/checklist/json]
Please provide:
1) 5-step workflow
2) risk per step
3) quality check per step
4) fallback action if step fails"

### Thai Variant
"คุณเป็นผู้เชี่ยวชาญออกแบบ workflow ด้วย AI
เป้าหมาย: [goal]
ผู้ใช้งาน: [audience]
ข้อจำกัด: [time/tools/rules]
ข้อมูลที่มี: [data/files/context]
รูปแบบผลลัพธ์: [table/checklist/json]
กรุณาส่งออก:
1) workflow 5 ขั้นตอน
2) ความเสี่ยงแต่ละขั้น
3) วิธีตรวจคุณภาพแต่ละขั้น
4) แผนสำรองเมื่อขั้นนั้นล้มเหลว"

## 2) Gemini CLI Project Audit

### Baseline
"Review this project and suggest improvements."

### Template
"Analyze this project context and provide:
1) architecture summary (max 8 bullets)
2) top 5 issues by impact
3) quick wins in next 1 day
4) suggested implementation order
Format: markdown table with Impact, Effort, Priority, Why"

## 3) Automated Content Generation

### Baseline
"Write social and email content for this product."

### Template
"You are a senior content strategist.
Product brief:
- Product: [name]
- Audience: [segment]
- Key value: [value]
- Tone: [tone]
- CTA: [cta]
Create:
1) social post (short)
2) email body (medium)
3) landing hero copy (very short)
Requirements:
- Thai + English versions
- consistent message
- avoid unsupported claims"

## 4) Web App AI Response Formatting

### Baseline
"Summarize this text for app output."

### Template
"Generate a structured response for web app use.
Input text: [user input]
Return JSON with keys:
- summary
- key_points (array)
- recommendations (array)
- caution_notes (array)
Keep each list under 5 items and use concise language."

## 5) Data Insight Summarization

### Baseline
"Analyze this CSV and give insights."

### Template
"Analyze the provided CSV data.
Return in this order:
1) Top trends with numbers
2) anomalies and likely causes
3) 3 recommendations with expected impact
4) confidence score (high/medium/low)
Use business-friendly language and cite specific rows/fields where relevant."

## 6) Output Quality Booster

### Re-prompt Pattern
"Revise the previous output with these improvements:
- more specific metrics
- clearer action ownership
- shorter wording
- executive-ready formatting
Keep the same structure but improve precision."

## 7) Safety and Validation Prompt

### Template
"Before final output, run a self-check:
1) Identify assumptions
2) Identify possible errors/hallucinations
3) Mark confidence for each key claim
4) Suggest what data to verify first"
