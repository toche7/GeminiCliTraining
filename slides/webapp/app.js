// ─── DOM refs ──────────────────────────────────────────────────────────────
const slides = Array.from(document.querySelectorAll('.slide'));

const prevModuleBtn = document.getElementById('prevModuleBtn');
const nextModuleBtn = document.getElementById('nextModuleBtn');
const prevSlideBtn  = document.getElementById('prevSlideBtn');
const nextSlideBtn  = document.getElementById('nextSlideBtn');

const progressNav  = document.getElementById('progressNav');
const progressBtns = progressNav ? Array.from(progressNav.querySelectorAll('button')) : [];
const slideCounter = document.getElementById('slideCounter');

const labPanel         = document.getElementById('labPanel');
const labPanelToggle   = document.getElementById('labPanelToggle');
const labPanelClose    = document.getElementById('labPanelClose');
const labPanelObjective= document.getElementById('labPanelObjective');
const labCommandsList  = document.getElementById('labCommandsList');
const labChecklist     = document.getElementById('labChecklist');
const labPromptBase    = document.getElementById('labPromptBaseline');
const labPromptImpro   = document.getElementById('labPromptImproved');
const copyBaselineBtn  = document.getElementById('copyBaselineBtn');
const copyImprovedBtn  = document.getElementById('copyImprovedBtn');
const tabBtns          = Array.from(document.querySelectorAll('.tab-btn'));

// ─── Lab Data ──────────────────────────────────────────────────────────────

const labData = {
	'Module A|Lab A: Workflow Design': {
		title: 'Lab A: AI Workflow Design',
		objective: 'Design one reusable AI-assisted workflow for a real recurring task. Generate a draft, then revise it with quality checks and fallback actions per step.',
		commands: [
			{ label: 'Setup (macOS/Linux) — Create your team folder', code: 'mkdir -p deliverables/TEAM_ALPHA' },
			{ label: 'Setup (Windows PowerShell) — Create your team folder', code: 'New-Item -ItemType Directory -Path deliverables/TEAM_ALPHA -Force' },
			{ label: 'Step 2 — Generate first workflow draft (pick your own task or use the example)', code: 'gemini -p "You are a workflow coach. Design a 5-step AI-assisted workflow for weekly report writing. For each step include goal, input, output, quality check, risk, fallback. Output as markdown table." > deliverables/TEAM_ALPHA/workflow-basics.md' },
			{ label: 'Step 3 — Revise for beginners', code: 'gemini -p "Read @deliverables/TEAM_ALPHA/workflow-basics.md for beginners. Make each step executable in under 10 minutes." > deliverables/TEAM_ALPHA/workflow-basics-v2.md' },
			{ label: 'Step 4 — Verify output was saved', code: 'cat deliverables/TEAM_ALPHA/workflow-basics-v2.md' },
		],
		checklist: [
			'Picked a real recurring task (not a made-up example)',
			'workflow-basics.md generated with ≥5 steps',
			'workflow-basics-v2.md includes quality check + fallback per step',
			'Each step can be done by a beginner in under 10 minutes',
			'File saved in your team deliverables folder',
		],
		prompts: {
			baseline: 'Design a 5-step workflow for weekly report writing.',
			improved:  'You are a workflow coach.\nDesign a 5-step AI-assisted workflow for weekly report writing.\nFor each step include: step goal, input, output, quality check, risk, fallback action.\nOutput as markdown table.',
		},
	},

	'Module B|Lab B0: Interactive Mode': {
		title: 'Lab B0: Interactive Mode & Slash Commands',
		objective: 'Get comfortable with the Gemini CLI REPL. Explore slash commands, run optional /init bootstrap, manage session context, and practice resetting and switching models before any file-based labs.',
		commands: [
			{ label: 'Step 1 — Enter interactive mode', code: 'gemini' },
			{ label: 'Step 1 — Check version', code: '/about' },
			{ label: 'Step 1 — Explore all commands', code: '/help' },
			{ label: 'Step 2 — Optional bootstrap', code: '/init' },
			{ label: 'Step 2 — Inspect generated repo guidance', code: 'cat gemini.md' },
			{ label: 'Step 2 — After 2 prompts: review session', code: '/rewind' },
			{ label: 'Step 2 — Check token usage', code: '/stats' },
			{ label: 'Step 3 — Compress history', code: '/compress' },
			{ label: 'Step 3 — Compare token count after compress', code: '/stats' },
			{ label: 'Step 4 — Reset conversation', code: '/reset' },
			{ label: 'Step 4 — Switch to faster model', code: '/model gemini-2.0-flash' },
			{ label: 'Step 5 — Confirm model responds, then exit', code: '/quit' },
		],
		checklist: [
			'Noted your Gemini CLI version from /about',
			'Found 3 commands from /help you didn\'t know before',
			'If available, /init was run and gemini.md was reviewed',
			'/stats token count checked before compress',
			'/compress run and token count dropped after',
			'/reset cleared the conversation successfully',
			'Switched to gemini-2.0-flash and received a response',
		],
		prompts: {
			baseline: 'What can you do?',
			improved:  'You are a Gemini CLI expert.\nList the 5 most useful slash commands for a beginner.\nFor each: name, one-line description, when to use it.\nOutput as a markdown table.',
		},
	},

	'Module B|Hands-on A+B': {
		title: 'Lab A + B: Workflow Design & Project Audit',
		objective: 'Lab A: Design a reusable 5-step AI workflow. Lab B: Audit a real project, compare baseline vs guided output with gemini.md, and produce a ranked action plan with day-1 quick wins. Run entirely in REPL — one session, conversational follow-ups.',
		commands: [
			{ label: 'Step 1 — Enter REPL', code: 'gemini' },
			{ label: 'Lab A — Prompt 1: Generate workflow draft', code: 'You are a workflow coach. Design a 5-step AI-assisted workflow for weekly report writing. For each step include: goal, input, output, quality check, risk, fallback. Output as a markdown table.' },
			{ label: 'Lab A — Prompt 2: Improve for beginners (follow-up)', code: 'Revise the workflow above for beginners. Make each step executable in under 10 minutes.' },
			{ label: 'Lab B — Prompt 3: Audit project files (baseline)', code: 'Analyze @docs/course-outline.md and @docs/lab-guide.md. Return: architecture/structure summary and the top risks for workshop delivery.' },
			{ label: 'Lab B — Prompt 4: Audit with repo guidance', code: 'Analyze @docs/course-outline.md and @docs/lab-guide.md. Follow @gemini.md. Return: architecture/structure summary, the top risks for workshop delivery, and an Instruction Effect note explaining what changed because of gemini.md.' },
			{ label: 'Lab B — Prompt 5: Ranked action plan (follow-up)', code: 'From the guided summary above, give me the top 5 improvements ranked by impact and effort as a markdown table.' },
			{ label: 'Lab B — Prompt 6: Day-1 quick wins (follow-up)', code: 'From that action plan, list 3 quick wins that can be done today. For each include the exact owner and expected result.' },
			{ label: 'Step 8 — Exit REPL', code: '/quit' },
		],
		checklist: [
			'workflow-basics.md created (≥5 steps with quality check + fallback)',
			'workflow-basics-v2.md revised for beginners',
			'Compared baseline and guided audit output',
			'audit-summary.md includes ≥3 risks and an Instruction Effect note',
			'action-plan.md has ranked top 5',
			'quick-wins.md lists owner + expected result',
		],
		prompts: {
			baseline: 'Design a 5-step workflow for weekly report writing.',
			improved:  'You are a workflow coach.\nDesign a 5-step AI-assisted workflow for weekly report writing.\nFor each step include: step goal, input, output, quality check, risk, fallback action.\nOutput as markdown table.',
		},
	},

	'Module C|Lab C: Content Pack':  
	{
	title: 'Lab C: Automated Content Pack',
	objective: 'Generate multi-channel content (social, email, landing page) from one brief in a single REPL session. Keep message consistent across channels and iterate with follow-up prompts for a stronger CTA.',
	commands: [
		{ label: 'Step 1 — Enter REPL', code: 'gemini' },
		{ label: 'Prompt 1 — Optional baseline prompt', code: 'Write social post and email for my workshop.' },
		{ label: 'Prompt 2 — Generate content-pack.md draft', code: 'You are a senior content strategist.\nFrom this brief, create Thai+English outputs:\n1) social caption (<=80 words)\n2) email draft (120-180 words)\n3) landing hero copy (headline + subheadline + CTA)\nUse clear section headings for Social, Email, and Hero in both languages.\nBrief:\n- Product: AI workshop for junior teams\n- Audience: team leads and new analysts\n- Value: faster reporting with reliable AI workflows\n- Tone: practical and confident\n- CTA: register this week\nKeep message consistent and avoid unsupported claims.' },
		{ label: 'Prompt 3 — Save to content-pack.md', code: 'Save the previous content as content-pack.md.' },
		{ label: 'Prompt 4 — Revise into content-pack-v2.md', code: 'Read the previous content pack.\nMake the CTA stronger and more specific.\nDifferentiate this workshop from generic AI training.\nKeep the same 3 channels and keep Thai + English output.' },
		{ label: 'Prompt 5 — Final self-check before saving', code: 'Review the latest content pack against this checklist:\n- message consistency across all 3 channels\n- audience fit for team leads and new analysts\n- CTA includes action verb, deadline, and outcome\n- no unsupported claims\nReturn pass/fail with one fix per item.' },
		{ label: 'Prompt 6 — Save to content-pack-v2.md', code: 'Save the previous content as content-pack-v2.md.' },
		{ label: 'Step 7 — Exit REPL after both files are saved', code: '/quit' },
	],
	checklist: [
		'content-pack.md saved from the first strong REPL draft',
		'content-pack-v2.md saved from the revised REPL draft',
		'All 3 channels are present (social, email, landing)',
		'Thai and English versions present',
		'CTA contains action verb + deadline + outcome',
		'v2 has stronger differentiation from generic AI training',
	],
	prompts: {
		baseline: 'Write social post and email for my workshop.',
		improved:  'You are a senior content strategist.\nFrom this brief, create Thai+English outputs:\n1) social caption (<=80 words)\n2) email draft (120-180 words)\n3) landing hero copy (headline + subheadline + CTA)\nUse clear section headings for Social, Email, and Hero in both languages.\nKeep message consistent and avoid unsupported claims.',
	},
	},

	'Module D|Lab D: Web App Integration': {
		title: 'Lab D: Gemini CLI Website Build',
		objective: 'Generate website HTML from Lab C hero using Gemini CLI in REPL, run it locally, and optionally create one improved v2 revision.',
		commands: [
			{ label: 'Step 0 — Confirm Lab C file exists', code: 'ls deliverables/TEAM_ALPHA/content-pack.md deliverables/TEAM_ALPHA/content-pack-v2.md' },
			{ label: 'Step 1 — Enter REPL', code: 'gemini' },
			{ label: 'Step 1 — In REPL, paste this prompt', code: 'Using @content-pack-v2.md, generate a single-file landing page HTML with embedded CSS.\n Include: hero headline, subheadline, CTA button, one trust section, and one footer.\nKeep it responsive and preserve the bilingual tone. \nReturn HTML only.' },
			{ label: 'Step 1 — Save output', code: 'Save html content to landing-page-v1.html' },
			{ label: 'Step 2 — Publish page in starter app', code: 'create simple webapp starter package for html and simple form submission to webapp-starter folder' },
			{ label: 'Step 2 — Exit REPL', code: '/quit' },
			{ label: 'Step 3 — Publish page in starter app', code: 'cp landing-page-v1.html webapp-starter/public/landing-page.html' },
			{ label: 'Step 3 — Run server and preview', code: 'cd webapp-starter && npm start' },
			{ label: 'Step 4 (optional) — Start new REPL for v2', code: 'gemini' },
			{ label: 'Step 4 (optional) — Paste refinement prompt', code: 'Revise @landing-page-v1.html for better readability and stronger CTA hierarchy.\nKeep output as single-file HTML and preserve bilingual tone.' },
			{ label: 'Step 4 (optional) — Save v2', code: 'Save html content to landing-page-v2.html\n/quit' },
			{ label: 'Step 4 — Run server and preview', code: 'cd webapp-starter && npm start' },
			{ label: 'Step 5 (optional) — Start new REPL for v2', code: 'gemini' },
			{ label: 'Step 5 (optional) — Paste refinement prompt', code: 'revise @landing-page-v2.html to have form that team can be apply and update to database where database is csv file' },
			{ label: 'Step 5 (optional) — Save v3', code: 'Save html content to landing-page-v3.html\n/quit' },
			{ label: 'Step 5 — Run server and preview', code: 'cd webapp-starter && npm start' },

		],
		checklist: [
			'Entered REPL mode (not one-shot prompt)',
			'landing-page-v1.html generated by Gemini CLI in REPL',
			'Page includes hero + trust section + footer',
			'Page is viewable at /landing.html',
			'v2 includes at least one clear UX or CTA improvement',
			'Can explain how Lab C output is reused in Lab D',
		],
		prompts: {
			baseline: 'Create a simple landing page HTML.',
			improved:  'You are a frontend engineer.\nUsing @deliverables/TEAM_ALPHA/content-pack-v2.md, generate a responsive single-file HTML landing page.\nInclude hero headline, subheadline, CTA, one trust section, and footer.\nUse clean semantic HTML and embedded CSS. Return HTML only.',
		},
	},

	'Module E|Lab E: Data Insight': {
		title: 'Lab E: Data Insight Summarization',
		objective: 'Analyze the Lab D website output and propose prioritized improvements for copy quality and conversion outcomes.',
		commands: [
			{ label: 'Step 1 - Start new REPL for insights', code: 'gemini' },
			{ label: 'Step 1 — Analyze data', code: 'Read @demodata.csv and analyze for report to CEO' },
			{ label: 'Step 2 — Create visualization', code: 'Create a visualization dashboard' },
			{ label: 'Step 2 - Quit REPL and run server to preview', code: '/quit && cd webapp-starter && npm start' },
			{ label: 'Step 3 - Start new REPL for insights', code: 'gemini' },
			{ label: 'Step 3 — Add Histogram', code: 'Add Team Size Distribution Histogram to dashboard' },
		],
		checklist: [
			'insight-report.md references exact landing-page elements or hero lines',
			'Risks linked to likely conversion impact',
			'≥3 recommendations with impact + confidence level',
			'insight-report-v2.md has 5-bullet summary + risk table + next-30-day actions',
			'Each recommendation has owner + timeline + KPI',
		],
		prompts: {
			baseline: 'Summarize my sales CSV.',
			improved:  'You are a data analyst.\nAnalyze the attached CSV files.\nReturn:\n1) Top 3 trends with numeric evidence\n2) Anomalies with likely cause and business impact\n3) Ranked recommendations with expected outcome and confidence level\nKeep each recommendation under 3 sentences.',
		},
	},

	'Capstone|Capstone Brief': {
		title: 'Capstone: End-to-End Workflow',
		objective: 'Demonstrate one complete workflow: Input → Prompt → AI process → Output artifact → Validation. Score yourself on the rubric before presenting.',
		commands: [
			{ label: 'Run your capstone prompt', code: 'gemini -p "YOUR_CAPSTONE_PROMPT_HERE" > deliverables/TEAM_ALPHA/capstone-output.md' },
			{ label: 'Self-validate with rubric', code: 'gemini -p "Review @deliverables/TEAM_ALPHA/capstone-output.md against this rubric: problem framing clarity, prompt quality, output usefulness, safety awareness, delivery clarity. Score each 1-5 and explain." > deliverables/TEAM_ALPHA/capstone-review.md' },
		],
		checklist: [
			'Problem statement written (1 sentence)',
			'Prompt copy documented',
			'Output artifact file saved',
			'Quality check and risk note included',
			'Self-review score ≥12 / 25',
		],
		prompts: {
			baseline: 'Help me with my project.',
			improved:  'You are a [ROLE].\n[CONTEXT — 1-2 sentences of background]\nTask: [SPECIFIC TASK]\nConstraints: [LIST CONSTRAINTS]\nOutput format: [EXACT FORMAT]\nQuality check: [HOW TO VERIFY THE OUTPUT IS GOOD]',
		},
	},
};

// ─── Module / Slide Navigation State ───────────────────────────────────────
const modules = [];
const moduleSlides = new Map();

slides.forEach((slide, idx) => {
	const moduleName = slide.dataset.module || 'General';
	if (!moduleSlides.has(moduleName)) {
		moduleSlides.set(moduleName, []);
		modules.push(moduleName);
	}
	moduleSlides.get(moduleName).push(idx);
});

let moduleIndex = 0;
let slideInModuleIndex = 0;

function currentModuleName() {
	return modules[moduleIndex];
}

function currentModuleSlideIndexes() {
	return moduleSlides.get(currentModuleName()) || [];
}

function absoluteSlideIndex() {
	const indexes = currentModuleSlideIndexes();
	return indexes[slideInModuleIndex] ?? 0;
}

// ─── Lab Panel Logic ────────────────────────────────────────────────────────
let panelOpen = false;

function getLabKey(slide) {
	if (!slide) return '';
	return `${slide.dataset.module}|${slide.dataset.title}`;
}

function escapeHtml(str) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function openPanel() {
	panelOpen = true;
	labPanel?.classList.add('open');
	labPanel?.removeAttribute('aria-hidden');
	updateLabPanel(slides[absoluteSlideIndex()]);
}

function closePanel() {
	panelOpen = false;
	labPanel?.classList.remove('open');
	labPanel?.setAttribute('aria-hidden', 'true');
}

function togglePanel() {
	if (panelOpen) closePanel(); else openPanel();
}

function updateLabPanel(slide) {
	const data = labData[getLabKey(slide)];
	if (!data) return;

	if (labPanelObjective) labPanelObjective.textContent = data.objective;

	if (labCommandsList) {
		labCommandsList.innerHTML = data.commands.map((cmd) => `
			<div class="lab-cmd-block">
				<div class="lab-cmd-label">${escapeHtml(cmd.label)}</div>
				<div class="lab-cmd-row">
					<pre class="lab-cmd-pre">${escapeHtml(cmd.code)}</pre>
					<button class="copy-btn" type="button" data-copy-text="${cmd.code.replace(/"/g, '&quot;')}">Copy</button>
				</div>
			</div>`).join('');
	}

	if (labChecklist) {
		labChecklist.innerHTML = data.checklist.map((item) =>
			`<li><label><input type="checkbox"> ${escapeHtml(item)}</label></li>`
		).join('');
	}

	if (labPromptBase)  labPromptBase.textContent  = data.prompts.baseline;
	if (labPromptImpro) labPromptImpro.textContent = data.prompts.improved;
	if (copyBaselineBtn) copyBaselineBtn.dataset.copyText = data.prompts.baseline;
	if (copyImprovedBtn) copyImprovedBtn.dataset.copyText = data.prompts.improved;
}

function setTab(tabName) {
	tabBtns.forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tabName));
	document.getElementById('labTabCommands')?.classList.toggle('active', tabName === 'commands');
	document.getElementById('labTabPrompts')?.classList.toggle('active', tabName === 'prompts');
}

async function copyText(text, btn) {
	try {
		await navigator.clipboard.writeText(text);
		const orig = btn.textContent;
		btn.textContent = 'Copied!';
		btn.classList.add('copied');
		setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1800);
	} catch {
		// clipboard unavailable (e.g. file:// protocol) — silent
	}
}

// ─── updateUI ──────────────────────────────────────────────────────────────
function updateUI() {
	const absoluteIndex = absoluteSlideIndex();

	slides.forEach((slide, idx) => {
		slide.classList.toggle('active', idx === absoluteIndex);
	});

	const active = slides[absoluteIndex];
	const title = active?.dataset.title || `Slide ${absoluteIndex + 1}`;
	document.title = `${currentModuleName()} | ${title}`;

	// Progress pills
	progressBtns.forEach((btn, i) => btn.classList.toggle('active', i === moduleIndex));

	// Slide counter
	const total = currentModuleSlideIndexes().length;
	if (slideCounter) slideCounter.textContent = `${slideInModuleIndex + 1} / ${total}`;

	// Lab panel toggle visibility
	const hasLab = Boolean(labData[getLabKey(active)]);
	if (labPanelToggle) labPanelToggle.style.display = hasLab ? '' : 'none';

	// Refresh or close panel
	if (panelOpen) {
		if (hasLab) updateLabPanel(active);
		else closePanel();
	}
}

// ─── Slide Navigation ──────────────────────────────────────────────────────
function nextSlideInModule() {
	const total = currentModuleSlideIndexes().length;
	if (slideInModuleIndex < total - 1) { slideInModuleIndex += 1; updateUI(); }
}

function prevSlideInModule() {
	if (slideInModuleIndex > 0) { slideInModuleIndex -= 1; updateUI(); }
}

function nextModule() {
	if (moduleIndex < modules.length - 1) { moduleIndex += 1; slideInModuleIndex = 0; updateUI(); }
}

function prevModule() {
	if (moduleIndex > 0) { moduleIndex -= 1; slideInModuleIndex = 0; updateUI(); }
}

// ─── Keyboard ──────────────────────────────────────────────────────────────
document.addEventListener('keydown', (event) => {
	if (event.target.closest('input, textarea, select')) return;

	const { key } = event;

	if (key === 'ArrowRight') { event.preventDefault(); nextModule(); return; }
	if (key === 'ArrowLeft')  { event.preventDefault(); prevModule(); return; }
	if (key === 'ArrowDown' || key === 'PageDown' || key === ' ') { event.preventDefault(); nextSlideInModule(); return; }
	if (key === 'ArrowUp'   || key === 'PageUp')                  { event.preventDefault(); prevSlideInModule(); return; }

	if (key === 'l' || key === 'L') {
		event.preventDefault();
		const active = slides[absoluteSlideIndex()];
		if (labData[getLabKey(active)]) togglePanel();
	}
});

// ─── Button Listeners ──────────────────────────────────────────────────────
prevModuleBtn?.addEventListener('click', prevModule);
nextModuleBtn?.addEventListener('click', nextModule);
prevSlideBtn?.addEventListener('click', prevSlideInModule);
nextSlideBtn?.addEventListener('click', nextSlideInModule);

progressNav?.addEventListener('click', (e) => {
	const btn = e.target.closest('button');
	if (!btn) return;
	const idx = progressBtns.indexOf(btn);
	if (idx >= 0) { moduleIndex = idx; slideInModuleIndex = 0; updateUI(); }
});

labPanelToggle?.addEventListener('click', togglePanel);
labPanelClose?.addEventListener('click', closePanel);

tabBtns.forEach((btn) => btn.addEventListener('click', () => setTab(btn.dataset.tab)));

labPanel?.addEventListener('click', (e) => {
	const btn = e.target.closest('.copy-btn');
	if (!btn) return;
	const text = btn.dataset.copyText;
	if (text) copyText(text, btn);
});

updateUI();
