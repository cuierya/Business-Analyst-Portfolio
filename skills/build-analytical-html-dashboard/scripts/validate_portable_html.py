#!/usr/bin/env python3
"""Validate a portable analytical HTML dashboard using only the standard library."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


def check(name: str, passed: bool, detail: str) -> dict[str, object]:
    return {"check": name, "passed": passed, "detail": detail}


def validate(html_path: Path, required: list[str], max_bytes: int) -> dict[str, object]:
    if not html_path.is_file():
        return {
            "file": str(html_path),
            "passed": False,
            "checks": [check("file_exists", False, "HTML file does not exist")],
            "warnings": [],
        }

    raw = html_path.read_text(encoding="utf-8")
    lowered = raw.lower()
    checks = [
        check("doctype", "<!doctype html" in lowered, "HTML5 doctype is present"),
        check("html_root", bool(re.search(r"<html\b", raw, re.I)), "HTML root element is present"),
        check(
            "viewport",
            bool(re.search(r'<meta\b[^>]*name=["\']viewport["\']', raw, re.I)),
            "Mobile viewport metadata is present",
        ),
        check(
            "no_external_scripts",
            not bool(re.search(r'<script\b[^>]*\bsrc\s*=', raw, re.I)),
            "No script src references remain",
        ),
        check(
            "no_external_stylesheets",
            not bool(
                re.search(
                    r'<link\b(?=[^>]*\brel=["\']stylesheet["\'])[^>]*>', raw, re.I
                )
            ),
            "No stylesheet link references remain",
        ),
        check("inline_css", bool(re.search(r"<style\b", raw, re.I)), "Inline CSS is present"),
        check("inline_js", bool(re.search(r"<script\b", raw, re.I)), "Inline JavaScript is present"),
        check(
            "no_placeholders",
            not bool(re.search(r"\b(?:TODO|FIXME|Lorem ipsum)\b", raw, re.I)),
            "No common placeholder text remains",
        ),
    ]

    for marker in required:
        checks.append(
            check(
                f"required:{marker}",
                marker in raw,
                f"Required marker is present: {marker}",
            )
        )

    warnings: list[str] = []
    size = html_path.stat().st_size
    if size > max_bytes:
        warnings.append(
            f"File is {size:,} bytes, above the configured warning threshold of {max_bytes:,}."
        )

    return {
        "file": str(html_path.resolve()),
        "bytes": size,
        "passed": all(bool(item["passed"]) for item in checks),
        "checks": checks,
        "warnings": warnings,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate a self-contained analytical HTML file.")
    parser.add_argument("html", type=Path, help="HTML file to validate")
    parser.add_argument(
        "--require",
        action="append",
        default=[],
        help="Text marker that must exist; may be repeated",
    )
    parser.add_argument(
        "--max-bytes",
        type=int,
        default=15_000_000,
        help="Warning threshold for file size (default: 15 MB)",
    )
    args = parser.parse_args()

    result = validate(args.html, args.require, args.max_bytes)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result["passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
