export type SkillGroup = {
  title: string;
  items: string[];
};

// Skills stay in data so the portfolio can be updated without changing layout code.
export const skillGroups: SkillGroup[] = [
  {
    title: "分析方法",
    items: ["商业分析", "经营分析", "市场洞察", "业务诊断", "ROI 测算", "归因分析"],
  },
  {
    title: "数据工具",
    items: ["SQL", "Tableau", "BI", "Excel", "RPA"],
  },
  {
    title: "AI 提效",
    items: ["Codex", "Vibe Coding", "Agent", "ChatGPT", "Gemini"],
  },
  {
    title: "业务场景",
    items: ["跨境电商", "供应链", "物流运营", "新品研究", "增长策略"],
  },
];
