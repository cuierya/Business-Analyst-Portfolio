import { useState } from "react";

const EMAIL = "cuierya07@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden border-y border-[#554d64] bg-[#282335] px-6 py-16 text-white sm:px-12 sm:py-20">
          <div className="absolute right-0 top-0 h-2 w-1/3 bg-gradient-to-r from-[#9582e8] to-[#ee8d81]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#cfc4f6]">LET'S WORK TOGETHER</p>
            <h2 className="display-font mt-5 max-w-4xl text-4xl leading-tight sm:text-6xl">期待把下一份清晰、可执行的答案，带到你的团队。</h2>
            <p className="mt-7 flex flex-col gap-2 text-sm font-medium tracking-wide text-[#d9d3e0] sm:flex-row sm:gap-10 sm:text-base">
              <span>商业分析 | 经营分析 | 数据分析</span>
              <span>深圳 | 香港</span>
            </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-stretch">
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center justify-between gap-5 bg-white px-7 py-3.5 text-sm font-semibold text-[#625383] transition hover:-translate-y-0.5"
                aria-label="复制邮箱 cuierya07@gmail.com"
              >
                <span>{EMAIL}</span>
                <span className="utility-font text-[10px] tracking-wider text-[#9582e8]" aria-live="polite">
                  {copied ? "已复制" : "点击复制"}
                </span>
              </button>
              <a
                href="https://github.com/cuierya/Business-Analyst-Portfolio.git"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/35 px-1 py-2 text-center text-sm font-semibold text-white transition hover:border-[#ee8d81]"
              >
                GitHub 作品仓库 ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
