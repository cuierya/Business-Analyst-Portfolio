import { useState } from "react";
import type { Language } from "../types";

const EMAIL = "cuierya07@gmail.com";

const content = {
  zh: {
    heading: "期待把下一份清晰、可执行的答案，带到你的团队。",
    roles: "商业分析 | 经营分析 | 数据分析",
    locations: "深圳 | 香港",
    copy: "点击复制",
    copied: "已复制",
    copyLabel: `复制邮箱 ${EMAIL}`,
    wechat: "添加微信",
    wechatLabel: "打开微信二维码大图",
    resume: "查看简历",
    resumeLabel: "打开中文在线简历",
    resumeLink: "https://my.feishu.cn/wiki/YrGewU8PQifYSIk5kAMchmaEn8f?from=from_copylink",
    repository: "GitHub 作品仓库",
  },
  en: {
    heading: "I look forward to bringing the next clear, actionable answer to your team.",
    roles: "Business Analysis | Operations Analysis | Data Analysis",
    locations: "Shenzhen | Hong Kong",
    copy: "COPY",
    copied: "COPIED",
    copyLabel: `Copy email ${EMAIL}`,
    wechat: "Add me on WeChat",
    wechatLabel: "Open the WeChat QR code",
    resume: "View résumé",
    resumeLabel: "Open the English résumé",
    resumeLink: "https://my.feishu.cn/docx/VT3IdoLYIodttbxn18Xcsiq0nxl",
    repository: "GitHub Portfolio Repository",
  },
};

export default function Contact({ language }: { language: Language }) {
  const [copied, setCopied] = useState(false);
  const copy = content[language];

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
            <h2 className="display-font mt-5 max-w-4xl text-4xl leading-tight sm:text-6xl">{copy.heading}</h2>
            <p className="mt-7 flex flex-col gap-2 text-sm font-medium tracking-wide text-[#d9d3e0] sm:flex-row sm:gap-10 sm:text-base">
              <span>{copy.roles}</span>
              <span>{copy.locations}</span>
            </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-stretch">
              <div className="mx-auto flex w-fit gap-6">
                  <a
                  href="/wechat-qr.jpg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.wechatLabel}
                  className="group w-[5.125rem] shrink-0 bg-white p-2 text-center text-[#625383] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee8d81]"
                  >
                    <span className="relative mx-auto block aspect-square w-full overflow-hidden bg-white">
                      <img
                        src="/wechat-qr.jpg"
                        alt={copy.wechat}
                        loading="lazy"
                        decoding="async"
                        className="absolute left-[-24%] top-[-52%] w-[148%] max-w-none"
                      />
                    </span>
                    <span className="mt-2 block text-[10px] font-semibold leading-tight">{copy.wechat}</span>
                  </a>
                  <a
                  href={copy.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.resumeLabel}
                  className="group w-[5.125rem] shrink-0 bg-white p-2 text-center text-[#625383] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee8d81]"
                  >
                    <img
                      src="/resume-qr.png"
                      alt={copy.resume}
                      loading="lazy"
                      decoding="async"
                      className="mx-auto aspect-square w-full bg-white object-contain"
                    />
                    <span className="mt-2 block text-[10px] font-semibold leading-tight">{copy.resume}</span>
                  </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center justify-between gap-5 bg-white px-7 py-3.5 text-sm font-semibold text-[#625383] transition hover:-translate-y-0.5"
                aria-label={copy.copyLabel}
              >
                <span>{EMAIL}</span>
                <span className="utility-font text-[10px] tracking-wider text-[#9582e8]" aria-live="polite">
                  {copied ? copy.copied : copy.copy}
                </span>
              </button>
              <a
                href="https://github.com/cuierya/Business-Analyst-Portfolio.git"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/35 px-1 py-2 text-center text-sm font-semibold text-white transition hover:border-[#ee8d81]"
              >
                {copy.repository} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
