import { motion, useReducedMotion } from "framer-motion";
import type { Language } from "../types";

const content = {
  zh: {
    headline: ["把复杂业务", "拆成清晰、可执行的", "增长答案。"],
    intro: ["商业分析师，专注跨境电商数据分析、市场洞察与经营策略。", "用数据定位问题，用 AI 放大分析效率，让洞察真正落到业务结果。"],
    work: "查看代表作品",
    contact: "联系我",
    imageAlt: "商业分析师 Esther Cui 的职业头像",
    metrics: [
      { value: "60%", label: "调研效率提升" },
      { value: "30%", label: "协同效率提升" },
      { value: "10+", label: "新品推动开发" },
    ],
  },
  en: {
    headline: ["Turning complex business challenges", "into clear, actionable", "growth solutions."],
    intro: ["Business analyst specializing in cross-border e-commerce analytics, market intelligence, and operational strategy.", "I use data to identify problems and AI to accelerate analysis—transforming insights into measurable business outcomes."],
    work: "View selected work",
    contact: "Contact me",
    imageAlt: "Professional portrait of business analyst Esther Cui",
    metrics: [
      { value: "+60%", label: "Research efficiency" },
      { value: "+30%", label: "Collaboration efficiency" },
      { value: "10+", label: "New products advanced" },
    ],
  },
};

export default function Hero({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const copy = content[language];
  const enter = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative overflow-hidden border-b border-[#e5dff0] bg-[#faf8fc] pt-20">
      <div className="absolute inset-y-0 left-[8%] w-px bg-[#e9e3ff]/70" />
      <div className="absolute right-0 top-20 h-28 w-[34%] bg-[#f4eff8]" />

      <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:py-24">
        <motion.div {...enter} transition={{ duration: 0.65, ease: "easeOut" }} className="relative z-10">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#ee8d81]" />
            <p className="utility-font text-[11px] font-semibold tracking-[0.2em] text-[#625383]">
              BUSINESS ANALYST · SHENZHEN / HONG KONG
            </p>
          </div>
          <h1 className="display-font max-w-3xl text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.12] tracking-[-0.04em] text-[#282335]">
            <span className="block">{copy.headline[0]}</span>
            <span className={`mt-2 block ${language === "zh" ? "lg:whitespace-nowrap" : ""}`}>
              {copy.headline[1]} <span className="bg-gradient-to-r from-[#7b68d5] to-[#dd756b] bg-clip-text text-transparent">{copy.headline[2]}</span>
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#6f687a] sm:text-base sm:leading-8">
            <span className="block">{copy.intro[0]}</span>
            <span className="block">{copy.intro[1]}</span>
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-[#282335] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#625383]"
            >
              {copy.work} <span className="ml-2" aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border-b border-[#9582e8] px-1 py-2 text-sm font-semibold text-[#625383] transition hover:border-[#ee8d81] hover:text-[#dd756b]"
            >
              {copy.contact} <span className="ml-2" aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute -right-5 -top-5 h-full w-full border border-[#cfc4f6]" />
          <div className="relative overflow-hidden rounded-[7rem_0_0_0] bg-white p-2 shadow-[0_24px_60px_rgba(40,35,53,0.12)]">
            <img
              src="/portrait.webp"
              alt={copy.imageAlt}
              width="900"
              height="1200"
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[6.4rem_0_0_0] object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="grid border-y border-[#dcd5e7] lg:col-span-2 sm:grid-cols-3 sm:divide-x sm:divide-[#dcd5e7]">
          {copy.metrics.map((metric) => (
            <div key={metric.label} className="flex items-baseline justify-between border-b border-[#dcd5e7] px-5 py-5 last:border-b-0 sm:block sm:border-b-0 sm:px-8">
              <strong className="utility-font text-2xl font-medium text-[#282335] sm:text-3xl">{metric.value}</strong>
              <p className="mt-1 text-xs tracking-wide text-[#6f687a]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
