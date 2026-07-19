---
name: build-analytical-html-dashboard
description: Build or revise professional source-backed analytical HTML dashboards and reports from spreadsheets, CSV/JSON extracts, analysis workbooks, or existing frontend projects. Use when Codex needs to turn analysis into a portable interactive single-file HTML artifact, add KPI cards, filters, cross-filtering, drilldowns, fixed-period insights or strategy recommendations, apply analytical frontend and mobile design standards, or validate a dashboard for desktop and phone delivery.
---

# Build Analytical HTML Dashboard

Create decision-ready analytical HTML, not a decorative webpage. Preserve the analytical source of truth, make conclusions traceable, and deliver a self-contained artifact that works from `file://` when portable delivery is required.

## Select the working path

- Revise an existing app surgically when a React/Vue/HTML project already exists. Preserve its stack, data contract, naming, and unrelated user changes.
- For a new complex interactive dashboard, prefer React + TypeScript + Vite and the project's approved styling system.
- For a small static report with little interaction, use the simplest semantic HTML/CSS/JavaScript implementation that satisfies the brief.
- Read project instructions and any user-provided technical design document first. If the user's shared `TECH_DESIGN.md` is available, treat it as a preferred implementation reference after project-specific instructions.
- Use the Data Analytics dashboard/report skills for analytical framing and `frontend-design` for visual hierarchy when they are available and applicable. Announce those skills before acting.

## Execute the workflow

### 1. Establish the decision brief

Determine the audience, decision, analysis period, population, primary grain, metrics, trusted keys, required filters, refresh model, and delivery path. Ask only when a missing choice would materially change the result; otherwise state a safe assumption and continue.

Inspect all relevant inputs before coding. Identify:

- authoritative source files and reviewed outputs;
- metric numerators, denominators, exclusions, and zero-denominator behavior;
- entity names and IDs used for joins and display;
- unmatched, duplicated, low-sample, or unclassified records;
- existing analysis plans, validation receipts, and visual conventions.

Do not build a source-backed dashboard from sample or unreviewed fallback data without labeling it as a prototype.

### 2. Create a compact data contract

Separate reusable data from presentation code:

- retain row-level facts only when filters or evidence drilldowns require them;
- pre-aggregate durable KPI, ranking, trend, category, and quality datasets;
- preserve stable IDs, human-readable names, time fields, numerators, denominators, and provenance;
- keep data-quality exceptions visible rather than coercing them to zero;
- generate a compact JSON or TypeScript data module from reviewed sources instead of recomputing business logic in the browser.

Reconcile totals and matched/unmatched populations before rendering.

### 3. Design the analytical narrative

Default to this decision sequence when the brief does not require another order:

1. Overview and headline risk/status
2. Entity performance or risk ranking
3. Driver/root-cause drilldown
4. Time movement and composition change
5. Optimization strategy or recommended action
6. Trust, definitions, and caveats

Use large titles only for main modules. Keep chart titles compact and place process notes, tagging rules, and data-engineering details in trust or appendix areas.

For recommendations, connect evidence to execution:

`entity -> issue -> specific reason -> evidence -> suggested owner -> immediate action -> product/process optimization`

Do not assign an engineering root cause solely from review semantics. Label responsibility as suggested ownership until batch, order, test, or service evidence confirms it.

### 4. Define interaction behavior before implementation

- Use global filters only when they materially update the analytical view.
- Make chart and table selections update the same filter state when cross-filtering is promised.
- Make selected states visible and allow a clear reset path.
- Decide whether insight text represents the fixed analysis period or the current filter. Default to fixed-period management insights when users need stable conclusions; label the period explicitly and keep filter changes from rewriting those insights.
- When more than five entities require detailed repeated content, use horizontal entity tabs and render one selected entity instead of stacking every entity module.
- Show the selected entity's essential strategy content without extra folding when management readers need immediate access. Use accordions only when the user prioritizes compactness over scan speed.

Read [references/dashboard-patterns.md](references/dashboard-patterns.md) before designing filters, drilldowns, strategy output, or mobile behavior.

### 5. Build the interface

Build summary-first and chart-led. Use the fewest components that keep the data model and interaction state consistent.

- Provide a sticky module navigation and filter region only when the page is long enough to benefit.
- Use tooltips for points or segments whose identity cannot be labeled directly.
- Prefer bars for ranking, lines for time, scatter plots for two-metric prioritization, and pies/donuts only for bounded composition questions.
- Show threshold/reference-line values directly on charts.
- Preserve accessible focus states, keyboard activation, semantic headings, reduced-motion support, and readable empty states.
- Keep visual decisions specific to the business subject. Do not add generic gradients, oversized KPI decoration, or repeated cards without analytical purpose.

For mobile:

- let the document remain viewport-width with no page-level horizontal overflow;
- allow navigation, filters, tabs, and genuinely wide tables to scroll inside their own containers;
- stack chart legends, strategy columns, KPI cards, and detail panels below desktop breakpoints;
- keep charts responsive through `viewBox` or container-aware sizing;
- do not hide essential evidence or strategy solely to make the page shorter.

### 6. Package a self-contained file

For Vite output, run:

```powershell
python scripts/inline_vite_build.py --dist <app>/dist --output <final-report>.html
```

The final portable HTML must not depend on a CDN, external script, external stylesheet, local server, or sibling data file. Escape embedded `</script>` sequences and preserve UTF-8.

Keep the editable source app beside the generated artifact. Treat the final HTML as generated output.

### 7. Validate proportionally to risk

Read [references/qa-checklist.md](references/qa-checklist.md) before final delivery.

At minimum:

1. Reconcile dashboard totals and denominators with the reviewed source.
2. Run type checking and the production build.
3. Run `scripts/validate_portable_html.py` on the final artifact.
4. Test representative filters, chart selections, reset behavior, and entity switching.
5. Test a desktop viewport and real 360px and 390px device viewports.
6. Confirm root/body `scrollWidth` equals `clientWidth`; internal scroll containers are allowed.
7. Check browser console/page errors and verify the final file from `file://` when that is the delivery mode.

Do not claim mobile readiness from CSS inspection alone.

### 8. Hand off clearly

Lead with the completed artifact. Provide clickable absolute paths to the final HTML, editable source project, and validation note or receipt when one exists.

Mention only failed, unavailable, or decision-relevant caveats. Do not fill the final response with routine build logs.
