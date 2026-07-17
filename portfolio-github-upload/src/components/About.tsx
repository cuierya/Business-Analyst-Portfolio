import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/skills";

const experiences = [
  {
    company: "深圳合沣网络科技有限公司",
    role: "跨境电商商业分析",
    period: "2025.10 - 2026.07",
    summary: "搭建销售、供应链与物流联动的自动化分析体系，负责经营诊断、新品研究和 AI 提效，推动销量增长与业务流程优化。",
  },
  {
    company: "新企航供应链有限公司",
    role: "跨境物流数据运营",
    period: "2024.01 - 2025.09",
    summary: "构建 Tableau 销售 BI 看板与经营分析框架，支持客户分层、增长策略、物流时效预测和跨部门数据需求。",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
        >
          <div className="relative border-l-2 border-[#9582e8] pl-6 sm:pl-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#9582e8]">ABOUT ME</p>
            <h2 className="display-font mt-5 text-5xl leading-[1.12] tracking-[-0.03em] sm:text-6xl">
              不只呈现数据，<br />
              <span className="bg-gradient-to-r from-[#7b68d5] to-[#dd756b] bg-clip-text text-transparent">更推动行动。</span>
            </h2>
          </div>
          <div className="max-w-xl space-y-4 text-sm leading-7 text-[#6f687a] sm:text-base lg:pt-9">
            <p>我擅长从业务目标出发，建立指标体系、拆解问题并找到关键影响因素，再把复杂结论转译成团队能直接执行的策略。</p>
            <p>跨境电商和跨境物流经历，让我既能深入数据，也理解运营现场。面对重复分析工作，我会使用 Codex、Vibe Coding 与 RPA 构建自动化流程，把时间留给判断和决策。</p>
          </div>
        </motion.div>

        <div className="mt-16 border-y border-[#ddd6e8]">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="grid gap-4 border-b border-[#e9e3ee] py-6 last:border-b-0 md:grid-cols-[13rem_1fr] md:items-start"
            >
              <h3 className="utility-font text-xs font-semibold tracking-[0.16em] text-[#625383]">{group.title}</h3>
              <div className="flex flex-wrap gap-x-0 gap-y-2">
                {group.items.map((skill) => (
                  <span key={skill} className="text-sm text-[#6f687a] after:mx-3 after:text-[#c6bdd4] after:content-['/'] last:after:content-none sm:text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div id="experience" className="mt-24 scroll-mt-28">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#ee8d81]">EXPERIENCE</p>
              <h2 className="display-font mt-3 text-4xl sm:text-5xl">经历，让分析更懂业务。</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6f687a]">从跨境物流到跨境电商，把数据能力扎进真实业务流程。</p>
          </div>

          <div className="border-t border-[#e9e3ff]">
            {experiences.map((experience) => (
              <article key={experience.company} className="grid gap-4 border-b border-[#e9e3ff] py-8 md:grid-cols-[0.8fr_0.65fr_1.55fr] md:gap-8">
                <div>
                  <h3 className="font-semibold text-[#282335]">{experience.company}</h3>
                  <p className="mt-1 text-sm text-[#9582e8]">{experience.period}</p>
                </div>
                <p className="font-medium text-[#625383]">{experience.role}</p>
                <p className="text-sm leading-7 text-[#6f687a]">{experience.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
