# HTML dashboard QA checklist

Use this checklist immediately before delivery.

## Data and analytical integrity

- Confirm the time window, geography/population, grain, and source freshness.
- Reconcile source totals, filtered totals, entity totals, and period totals.
- Confirm numerator/denominator definitions and zero-denominator behavior.
- Confirm duplicates, unmatched rows, missing text, and low samples are handled as declared.
- Confirm displayed names use the authoritative source and stable IDs drive joins.
- Trace each management conclusion to data and each strategy to a driver/evidence row.

## Interaction

- Exercise every top-level filter and reset.
- Click representative chart marks, table rows, primary drivers, and secondary reasons.
- Confirm selected states appear everywhere promised.
- Switch entity tabs, including an entity selected from another chart or filter.
- Confirm fixed-period insights do not change with filters when that is the contract.
- Confirm empty states and zero results do not crash charts.

## Desktop and mobile rendering

Test at least desktop 1366px or 1440px, phone 360×800, and phone 390×844.

For each phone viewport, record `window.innerWidth`, root `clientWidth` and `scrollWidth`, body `scrollWidth`, main-section bounds, sticky position, internal scroll widths for navigation/filters/tabs/tables, and browser errors.

Pass when root/body scroll widths equal the viewport and no uncontained element leaks outside it. Internal horizontal scrolling is acceptable only in intentional containers.

## Packaging

- Run the production type/build command.
- Inline local CSS and JavaScript for portable delivery.
- Confirm no external `script src` or stylesheet dependency remains.
- Confirm the viewport meta tag and UTF-8.
- Confirm the file opens directly with `file://` when promised.
- Confirm the editable source project remains available.
- Run `validate_portable_html.py` and keep its compact receipt when useful.

## Handoff

- Link the final HTML with an absolute path.
- Link the source app and validation note when relevant.
- Disclose only meaningful limitations, such as snapshot data, unavailable browser QA, or manual refresh requirements.

