import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import type { Language } from "../types";

const content = {
  zh: {
    heading: "代表作品",
    intro: "从市场研判、数据产品到经营策略，展示我如何把分析变成可验证的业务结果。",
    view: "查看完整作品",
    secondaryLabel: "打开跨境多维表联动作品",
    impact: "BUSINESS IMPACT",
  },
  en: {
    heading: "Selected Work",
    intro: "From market research and data products to operational strategy, these projects show how I turn analysis into measurable business outcomes.",
    view: "View full project",
    secondaryLabel: "Open the cross-border data integration project",
    impact: "BUSINESS IMPACT",
  },
};

export default function Projects({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const copy = content[language];

  return (
    <section id="projects" className="bg-[#fbf9ff] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#9582e8]">SELECTED WORK</p>
          <h2 className="display-font mt-4 text-4xl leading-tight sm:text-6xl">{copy.heading}</h2>
          <p className="mt-5 text-base leading-8 text-[#6f687a] sm:text-lg">{copy.intro}</p>
        </div>

        <div className="mt-14 border-t border-[#dcd5e7]">
          {projects[language].map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group grid gap-7 border-b border-[#dcd5e7] py-9 md:grid-cols-[14rem_1fr] md:items-start lg:gap-12"
            >
              <div className="grid h-40 items-center overflow-hidden border border-[#e1dae9] bg-white p-2 transition-colors group-hover:border-[#9582e8]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-[1fr_15rem] lg:gap-12">
                <div>
                <div className="flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.12em] text-[#9582e8]">
                  <span>{project.category}</span>
                  <span className="text-[#8b8495]">{project.period}</span>
                </div>
                <h3 className="display-font mt-4 text-2xl leading-snug text-[#282335]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6f687a]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="utility-font border-l border-[#ee8d81] pl-2 text-[11px] tracking-wide text-[#8b5f5a]">{tag}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {project.secondaryLink && (
                    <a
                      href={project.secondaryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[#625383] transition-colors hover:text-[#dd756b]"
                      aria-label={copy.secondaryLabel}
                    >
                      {copy.view} <span className="ml-2" aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#625383] transition-colors hover:text-[#dd756b]"
                    aria-label={language === "zh" ? `打开${project.title}${project.secondaryLink ? "的 BI 看板" : ""}` : `Open ${project.title}${project.secondaryLink ? " BI dashboard" : ""}`}
                  >
                    {copy.view} <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                </div>
                </div>
                <aside className="border-l border-[#dcd5e7] pl-5 lg:pt-8">
                  <p className="utility-font text-[10px] tracking-[0.18em] text-[#9582e8]">{copy.impact}</p>
                  <p className="display-font mt-3 text-xl leading-8 text-[#625383]">{project.result}</p>
                </aside>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
