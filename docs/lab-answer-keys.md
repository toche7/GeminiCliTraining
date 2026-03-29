# Lab Answer Keys (Reference)

Use these as quality references, not strict single answers.

## Lab A - Good Output Characteristics
- 5 steps with explicit inputs and outputs
- Each step has a quality check and fallback action
- Time-bounded and beginner friendly

Sample excerpt:
| Step | Goal | Input | Output | Quality Check | Risk | Fallback |
|---|---|---|---|---|---|---|
| 1 | Collect KPI data | CRM export | Raw KPI sheet | All required KPIs present | Missing region data | Use last complete period and flag gap |

## Lab B - Good Output Characteristics
- Ranked priorities 1-5
- Includes impact and effort
- Clear first-day quick wins

Sample priority item:
| Priority | Action | Impact | Effort | Why |
|---|---|---|---|---|
| 1 | Add command-level instructions for each lab | High | Low | Removes execution ambiguity for beginners |

## Lab C - Good Output Characteristics
- Thai and English versions both present
- Message consistency across social, email, hero copy
- Strong CTA with deadline and action verb

Sample CTA line:
- EN: Register this week to cut report preparation time by 30%.
- TH: สมัครภายในสัปดาห์นี้ เพื่อย่นเวลาทำรายงานลง 30%.

## Lab D - Good Output Characteristics
- API success response contains structured keys
- Error response is readable and actionable

Expected success shape:
```json
{
  "ok": true,
  "result": {
    "summary": "...",
    "key_points": [],
    "recommendations": [],
    "caution_notes": []
  }
}
```

Expected error shape:
```json
{
  "error": "Invalid input. Expected JSON body with a non-empty string field: input"
}
```

## Lab E - Good Output Characteristics
- Includes trend numbers from datasets
- Flags anomalies with plausible causes
- Proposes 3 actions with owner and KPI

Sample insight excerpt:
- North Online revenue rises from 125000 (Jan) to 164000 (Jun), indicating sustained growth.
- Critical billing tickets coincide with low satisfaction scores, signaling service-risk concentration.

## Capstone - Score 5 Example Pattern
- Problem statement is specific.
- Prompt includes role, constraints, format, and validation.
- Output is immediately usable by manager or team.
- Safety assumptions and data limitations are explicitly stated.
