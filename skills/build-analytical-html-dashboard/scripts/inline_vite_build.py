#!/usr/bin/env python3
"""Inline a Vite production build into one portable HTML file."""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from urllib.parse import unquote, urlsplit


def local_asset(dist_dir: Path, url: str) -> Path:
    """Resolve a local asset URL and ensure it stays inside the build directory."""
    parts = urlsplit(url)
    if parts.scheme or parts.netloc or url.startswith("//"):
        raise ValueError(f"External asset cannot be inlined: {url}")

    relative = unquote(parts.path).lstrip("/")
    if not relative:
        raise ValueError(f"Empty asset path: {url}")

    root = dist_dir.resolve()
    asset = (root / relative).resolve()
    try:
        asset.relative_to(root)
    except ValueError as exc:
        raise ValueError(f"Asset escapes the build directory: {url}") from exc

    if not asset.is_file():
        raise FileNotFoundError(f"Asset not found: {asset}")
    return asset


def inline_vite(dist_dir: Path, output_path: Path) -> tuple[int, int]:
    index_path = dist_dir / "index.html"
    if not index_path.is_file():
        raise FileNotFoundError(f"Missing Vite entry file: {index_path}")

    html = index_path.read_text(encoding="utf-8")
    stylesheet_pattern = re.compile(
        r'<link\b(?=[^>]*\brel=["\']stylesheet["\'])(?=[^>]*\bhref=["\']([^"\']+)["\'])[^>]*>',
        re.IGNORECASE,
    )
    script_pattern = re.compile(
        r'<script\b(?=[^>]*\bsrc=["\']([^"\']+)["\'])[^>]*>\s*</script>',
        re.IGNORECASE,
    )

    css_count = 0
    js_count = 0

    def replace_stylesheet(match: re.Match[str]) -> str:
        nonlocal css_count
        asset = local_asset(dist_dir, match.group(1))
        css_count += 1
        return f"<style>\n{asset.read_text(encoding='utf-8')}\n</style>"

    def replace_script(match: re.Match[str]) -> str:
        nonlocal js_count
        asset = local_asset(dist_dir, match.group(1))
        script = asset.read_text(encoding="utf-8").replace("</script>", "<\\/script>")
        js_count += 1
        return f'<script type="module">\n{script}\n</script>'

    html = stylesheet_pattern.sub(replace_stylesheet, html)
    html = script_pattern.sub(replace_script, html)

    if css_count == 0:
        raise ValueError("No local stylesheet was found in dist/index.html")
    if js_count == 0:
        raise ValueError("No local script was found in dist/index.html")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html, encoding="utf-8")
    return css_count, js_count


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Inline local CSS and JavaScript from a Vite dist directory."
    )
    parser.add_argument("--dist", required=True, type=Path, help="Vite dist directory")
    parser.add_argument("--output", required=True, type=Path, help="Output HTML path")
    args = parser.parse_args()

    css_count, js_count = inline_vite(args.dist, args.output)
    print(
        f"Created {args.output.resolve()} "
        f"({args.output.stat().st_size:,} bytes; {css_count} CSS, {js_count} JS inlined)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
