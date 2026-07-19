# Tagged-workbook output contract

## Required worksheets

1. `数据说明`: scope, product domain, filters, assumptions, cleaning rules, taxonomy status/version, and limitations.
2. `清洗对账`: raw rows, excluded rows, exact duplicates, retained rows, blank-text rows, matched and unmatched auxiliary records.
3. `打标明细`: every retained review with source evidence, final labels, and audit trail.
4. `核对明细`: all rows or a complete change-focused view containing every corrected row; this does not replace the audit columns in `打标明细`.
5. `标签字典`: canonical issue type/reason pairs, boundaries, examples, responsibility, severity, action guidance, applicable domain, dictionary status, and version.

An additional stratified sample sheet may be included, but it must not substitute for full-row semantic verification.

## Required detail fields

Preserve available structured identifiers and include at least:

`Review ID｜源文件｜工作表｜源文件行号｜原评论｜清洗后评论｜日期｜月份｜国家｜星级｜Order ID｜Product ID｜SKU｜产品名｜使用场景｜适用人群｜一级问题类型｜二级具体原因｜主要问题类型｜主要原因｜责任环节｜严重度｜中文原因摘要｜代表性证据片段｜分类方式｜标签置信等级｜核对前主要问题类型｜核对前主要原因｜核对前二级具体原因｜语义核对结果｜修正说明｜核对方式`

Use a stable delimiter such as `；` for multi-label cells. Keep one primary type and one primary reason.

## Audit values

- `语义核对结果`: `已核对-匹配` or `已核对-已修正` for every retained row.
- `核对方式`: use a clear value such as `全量第二遍语义一致性校验`.
- `修正说明`: mandatory for corrected rows; state the old and new semantic direction concisely.
- `标签置信等级`: `高`, `中`, or `低`; low-confidence rows must be explicitly surfaced for another pass.

## Domain-dictionary lifecycle

- Use `词典状态=候选` when the product domain has no previously approved reference dictionary.
- Deliver the candidate dictionary and tagged details together for user approval.
- Do not persist the candidate as `references/taxonomy-<domain>.md` before explicit user acceptance.
- After acceptance, record `适用品类`, `词典版本`, `词典状态=已验收`, and `验收日期` before saving the reusable reference.
- For later revisions, include a change table with `新增`, `合并`, `重命名`, and `停用` labels plus the old and new version numbers.

## Acceptance checks

- Retained row count equals raw minus documented exclusions and exact duplicates.
- Review IDs are present and unique.
- Original comments and source row lineage remain available.
- Primary issue type and reason are populated for every row.
- Every primary type/reason pair exists in `标签字典`.
- No actionable record ends as blank, `其他`, `未覆盖`, `待分类`, or an equivalent placeholder.
- Information-insufficient records use the canonical information-insufficient reason rather than a fabricated product cause.
- Every row has a semantic audit result.
- Every corrected row has a correction note.
- All safety and damage rows include evidence and receive explicit re-review.
- Usage-scenario and applicable-group tags are evidence-based; missing evidence uses `未提及/无法判断`.
- First-time domain dictionaries remain marked as candidates until explicit user acceptance.
- Approved domain-dictionary revisions have a version and an auditable change record.
- Workbook filters, frozen panes, wrapping, number/date formats, and widths support manual review.

## User handoff

Deliver this workbook before downstream analysis. Report retained rows, exact duplicates removed, label matches, label corrections, information-insufficient rows, low-confidence rows, and any unmatched auxiliary-data rows. Ask the user to review corrected and low-confidence rows first. For a first-time product domain, also request explicit approval of the candidate dictionary before solidifying it as a reusable reference.
