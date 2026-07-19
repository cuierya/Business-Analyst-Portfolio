# Analytical dashboard patterns

Use this reference when choosing page structure, filters, drilldowns, strategy presentation, or mobile behavior.

## Separate four information layers

| Layer | Question | Recommended presentation |
|---|---|---|
| Status | What is happening? | Headline metric, benchmark, short fixed-period insight |
| Prioritization | Where should attention go? | Ranked bars, contribution chart, risk/volume scatter |
| Diagnosis | Why is it happening? | Category composition, entity drilldown, evidence |
| Execution | What should happen next? | Owner, immediate action, optimization, validation evidence |

Do not mix data-processing instructions into these reader-facing layers.

## Insight behavior

Choose one explicit mode:

- **Fixed-period insight:** Calculate from the complete analysis period. Label the period and do not change the text when filters change. Use this for management conclusions.
- **Filtered insight:** Recalculate with the active filter and label it as current selection. Use this for exploratory dashboards.

Do not silently mix the two. Entity-specific insights may change with the selected entity while still ignoring month or reason filters if that is the declared baseline.

## Cross-filtering model

Maintain one shared state for each global dimension, such as period, entity, primary driver, and secondary reason.

- A chart click updates the matching filter control.
- A child selection updates its parent dimension when required; selecting a secondary reason may set its primary driver.
- Clicking an already selected mark may clear that dimension when this behavior is discoverable.
- Reset clears all global dimensions.
- Show active selection visually in charts, tables, and tabs.

Keep chart hover state separate from filter state.

## Entity detail pattern

For one to five entities, repeated cards may be acceptable. For more than five:

1. Show a horizontally scrollable tab list.
2. Render one selected entity.
3. Keep summary evidence in the entity header.
4. Show two or three highest-signal reasons, unless the user requests all.
5. Let external filter selection add or activate an entity when the detail view supports it.

Do not stack nine or more nearly identical entity modules on the main page.

## Strategy output pattern

Each strategy row should contain the entity and priority, consolidated secondary reason, quantitative evidence, severity or concentration, suggested owner, immediate validation action, optimization recommendation, and a root-cause caveat.

Exclude vague or missing-information comments from product modification conclusions. Give them a data-collection or service follow-up action instead.

When the reader needs fast management scanning, display the selected entity's full strategy. When compactness is more important, use default-collapsed accordions—but never hide the reason, evidence, and owner in the collapsed summary.

## Mobile layout rules

- Root content: `width: 100%`, `min-width: 0`, no page-level horizontal scrolling.
- Sticky navigation: horizontal internal scrolling and visible focus states.
- Filter strip: fixed-width controls inside an `overflow-x: auto` container.
- Wide table: wrap in its own `overflow-x: auto` container; do not shrink text into illegibility.
- SVG chart: use a stable `viewBox`, full container width, and mobile-readable labels.
- Strategy: one column on phones; two columns for action versus optimization only when space permits.
- Product/entity tabs: horizontal internal scrolling, never page overflow.
- Touch targets: aim for at least 36–44px height where practical.

Verify with real device viewport emulation. Windows headless browser window sizing alone can differ from CSS device emulation.

## Empty and caveat states

- Keep fixed-period insight visible even when a current filter has no chart data.
- Display zero denominator as unavailable, not zero.
- Keep unmatched rows out of rate denominators but include them in a separate diagnostic analysis when relevant.
- Explain low sample sizes near the affected ranking or table.
- Keep missing-text reviews in rate numerators when the metric definition requires them, but exclude them from specific reason shares.

