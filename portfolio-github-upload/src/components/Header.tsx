import { useState } from "react";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "关于我", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "经历", href: "#experience" },
  { label: "联系", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e9e3ff]/70 bg-[#fbf9ff]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="返回首页">
          <span className="utility-font grid size-9 place-items-center border-t-2 border-[#ee8d81] bg-[#282335] text-sm font-semibold text-white">
            C
          </span>
          <span className="font-semibold tracking-wide">崔萍萍</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {navItems.map((item) => (
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
          className="grid size-11 place-items-center rounded-full border border-[#ded7f4] bg-white text-[#625383] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl">{menuOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-[#e9e3ff] bg-[#fbf9ff] px-5 py-4 md:hidden" aria-label="移动端导航">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
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
