import { useState } from "react";
import type { Language } from "../types";

const navItems = {
  zh: [
    { label: "首页", href: "#home" },
    { label: "关于我", href: "#about" },
    { label: "作品", href: "#projects" },
    { label: "经历", href: "#experience" },
    { label: "联系", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = navItems[language];
  const isChinese = language === "zh";

  const toggleLanguage = () => onLanguageChange(isChinese ? "en" : "zh");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e9e3ff]/70 bg-[#fbf9ff]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={isChinese ? "返回首页" : "Back to home"}>
          <img src="/favicon.svg" alt="" width="40" height="40" className="size-10 shrink-0" />
          <span className="font-semibold tracking-wide">Esther Cui</span>
        </a>

        <div className="ml-auto hidden items-center md:flex">
          <nav className="mr-7 flex items-center gap-7" aria-label={isChinese ? "主导航" : "Main navigation"}>
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#6f687a] transition-colors hover:text-[#625383]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleLanguage}
            className="utility-font min-w-14 border border-[#d8cff2] bg-white px-3 py-2 text-xs font-semibold tracking-[0.12em] text-[#625383] transition hover:border-[#9582e8] hover:text-[#7b68d5]"
            aria-label={isChinese ? "Switch to English" : "切换为中文"}
          >
            {isChinese ? "EN" : "中文"}
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="utility-font min-w-12 border border-[#d8cff2] bg-white px-2.5 py-2 text-[11px] font-semibold tracking-wider text-[#625383]"
            aria-label={isChinese ? "Switch to English" : "切换为中文"}
          >
            {isChinese ? "EN" : "中文"}
          </button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#ded7f4] bg-white text-[#625383]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? (isChinese ? "关闭菜单" : "Close menu") : (isChinese ? "打开菜单" : "Open menu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="text-xl">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-[#e9e3ff] bg-[#fbf9ff] px-5 py-4 md:hidden" aria-label={isChinese ? "移动端导航" : "Mobile navigation"}>
          <div className="mx-auto flex max-w-7xl flex-col">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#eee9fa] py-3 text-sm text-[#625383] last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
