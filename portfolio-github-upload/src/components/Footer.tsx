import type { Language } from "../types";

export default function Footer({ language }: { language: Language }) {
  return (
    <footer className="border-t border-[#eee9fa] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-[#8b8495] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Esther Cui · Business Analyst</p>
        <p>{language === "zh" ? "用数据看清问题，用行动创造结果。" : "Use data to clarify problems—and action to create results."}</p>
      </div>
    </footer>
  );
}
