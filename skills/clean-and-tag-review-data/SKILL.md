---
name: clean-and-tag-review-data
description: Clean spreadsheet-based customer review data, perform exhaustive semantic issue tagging, consolidate synonymous labels, expand the controlled taxonomy when genuinely new meanings appear, and deliver an audited tagged workbook for user review. Use for CSV/XLSX review exports, low-star or complaint datasets, review-labeling QA, reason-tag normalization, and workflows that must preserve before-and-after semantic audit details before dashboard or report generation.
---

# Clean and Tag Review Data

Create a trustworthy, reviewable dataset before doing rankings, dashboards, or management reporting. Preserve source evidence, use a controlled taxonomy, and verify every retained review against its final reason labels.

## Required companion guidance

- For XLSX/CSV input or output, follow the available spreadsheet skill and load the bundled spreadsheet runtime.
- Read [references/tag-taxonomy.md](references/tag-taxonomy.md) before defining or revising labels.
- Read [references/output-contract.md](references/output-contract.md) before building the review workbook or validating completion.

## Workflow

### 1. Inspect and reconcile the source

1. Discover every relevant file and worksheet; do not trust an incorrect used-range marker.
2. Identify the review grain, stable identifiers, date/country/product fields, star rating, and original comment field.
3. Record source row counts and filtering counts before transformation.
4. Preserve source files unchanged and write outputs to new files.
5. State assumptions when the row grain or trusted join key is uncertain.

### 2. Clean without destroying evidence

1. Standardize headers, Unicode punctuation, whitespace, dates, identifiers, and numeric fields.
2. Preserve both the original comment and a normalized working-text field.
3. Assign a stable `Review ID` and retain the source filename, worksheet, and source row number.
4. Remove only rows that are identical across all source fields. Do not deduplicate solely because Order ID, Product ID, or comment text repeats.
5. Retain blank-text and emoji-only reviews when they belong in the metric population; tag them as information insufficient.
6. Reconcile raw rows, excluded rows, exact duplicates, retained rows, and unmatched records.

### 3. Build the controlled label dictionary

1. Start from the canonical taxonomy in the reference file, then adapt its boundaries to the product domain.
2. Use multi-label fields for all supported issue types and reasons, plus exactly one primary issue type and one primary reason.
3. Tag usage scenarios and applicable groups only when supported by the review or reliable structured fields. Use `未提及/无法判断` instead of demographic inference.
4. Keep one canonical label for one semantic meaning. Merge spelling, wording, tense, and intensity variants.
5. Do not create both a generic and a specific reason for the same meaning in one project. For example, merge `气味与预期不符` and `气味整体不达预期` into `气味不符合预期`.
6. Separate product problems from packaging, fulfillment, wrong/missing item, logistics, and customer-service problems.
7. Check whether an approved `references/taxonomy-<domain>.md` exists for the current product domain.
8. When processing a product domain for the first time, do not copy another domain's reason dictionary unchanged. Build a candidate dictionary from the actual review semantics, complete synonym consolidation, full tagging, and the second-pass semantic audit, then deliver the candidate dictionary and tagged details for user review.
9. Treat the first-domain dictionary as `候选` until the user explicitly accepts it. Do not save an unapproved candidate as a reusable domain reference.
10. After acceptance, save it as `references/taxonomy-<domain>.md` and record the applicable domain, dictionary version, approval status, and approval date.
11. When an approved domain dictionary later encounters new semantics, prepare a candidate change set first. After user acceptance, increment the version and record added, merged, renamed, and deprecated labels; never silently change the reusable dictionary.

### 4. Tag every retained review semantically

1. Combine fixed dictionary rules with contextual semantic judgment; never classify from a single substring alone.
2. Use product context to resolve ambiguous language, but do not let the product name override explicit review evidence.
3. Record the original text, Chinese reason summary, evidence phrase, all labels, primary labels, responsibility stage, severity, classification method, and confidence.
4. When multiple labels apply, select the primary cause by business impact and explicitness: safety, damage, fulfillment, packaging, service, core function, usage, scent/preference, then value/expectation.
5. Treat safety and damage as high risk only when the text explicitly supports harm, irritation, contamination, or damage.

### 5. Close coverage gaps and merge synonyms

1. List every blank, `其他`, `未覆盖`, low-confidence, fallback, and multi-label-conflict row.
2. For each row, first map it to an existing canonical reason when the semantic direction already exists.
3. Add a new reason only when the meaning and required action are materially different from every existing reason.
4. When adding a reason, define its inclusion boundary, exclusion boundary, examples, responsibility stage, and severity; then rerun the entire dataset.
5. Repeat until no actionable review remains unresolved. Keep genuinely vague, empty, positive-only, not-yet-used, or context-free reviews under `信息不足 / 缺少可用原因信息`.

### 6. Perform a full second-pass semantic audit

Audit every retained row, not only a sample:

1. Compare the original comment with the current primary and secondary reason labels.
2. Preserve the pre-audit issue type, primary reason, and secondary reasons.
3. Record `已核对-匹配` or `已核对-已修正` for every row.
4. Require a correction note whenever any label changes.
5. Recheck all safety, damage, low-confidence, semantic-fallback, and multi-label-conflict rows after dictionary changes.
6. Keep a full audit trail; a stratified sample may supplement but never replace the full audit.

### 7. Deliver the tagged workbook first

Produce the workbook defined in the output contract and stop for user review. For a first-time product domain, clearly mark the dictionary as `候选` and request approval of both the dictionary and tagged details. Do not continue to dashboards, risk rankings, reports, or dictionary solidification until the user accepts the cleaned and tagged data.

### 8. Validate completion

1. Run `scripts/validate_tagged_workbook.py` against the output workbook.
2. Reconcile retained review counts and unique Review IDs.
3. Confirm all rows have primary labels and audit conclusions.
4. Confirm all final reasons exist in the label dictionary and no unresolved placeholder remains.
5. Confirm corrected rows have correction notes and all high-risk rows are traceable to original evidence.
6. Open the workbook and visually inspect headers, filters, frozen panes, wrapping, widths, and representative long comments.

## Output principles

- Lead with the tagged workbook and a concise reconciliation summary.
- Report how many rows matched, changed, lacked usable text, and remained unmatched to auxiliary data.
- Be explicit that `信息不足` is an evidence-quality result, not a taxonomy-coverage failure.
- Preserve reproducibility by saving the project-specific processing script beside the output or adapting a deterministic script for repeated runs.
