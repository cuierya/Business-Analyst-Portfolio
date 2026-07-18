import type { Language } from "../types";

export type Project = {
  title: string;
  category: string;
  period: string;
  description: string;
  result: string;
  image: string;
  imageAlt: string;
  link: string;
  secondaryLink?: string;
  tags: string[];
};

const sharedLinks = {
  research: "https://my.feishu.cn/wiki/X9UywMm7EiPzd8kXoX5cDmH9nFh?from=from_copylink",
  dashboard: "https://public.tableau.com/views/-UK_17769154366490/-1?:language=zh-CN&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  integration: "https://my.feishu.cn/wiki/GIRQwGiIginaGCkAK3lcZA3FnZb?from=from_copylink",
  operations: "https://my.feishu.cn/wiki/QZ9vw3eb8iAvbmk7t4AcxI6znge?from=from_copylink",
};

export const projects: Record<Language, Project[]> = {
  zh: [
    {
      title: "AI 驱动跨境电商新品调研",
      category: "市场研究",
      period: "2025.10 - 2026.07",
      description: "调研 30+ 产品、分析 6000+ 用户评论，结合 AI 完成竞品清洗、卖点打标与市场机会识别，支持新品筛选和优先级判断。",
      result: "调研效率提升 60%，推动 10+ 新品开发",
      image: "/projects/market-research.png",
      imageAlt: "跨境电商干发喷雾市场调研报告页面",
      link: sharedLinks.research,
      tags: ["市场容量", "用户洞察", "AI 竞品分析"],
    },
    {
      title: "跨境多维表联动与 BI 看板",
      category: "数据产品",
      period: "2024.01 - 2025.09",
      description: "整合销售、供应链与物流数据，搭建可下钻的 Tableau 经营看板与自动预警体系，让业务团队实时掌握货量、利润和履约表现。",
      result: "业务人效提升 30%，月度货量提升 7%",
      image: "/projects/bi-analysis.png",
      imageAlt: "跨境业务经营分析数据看板",
      link: sharedLinks.dashboard,
      secondaryLink: sharedLinks.integration,
      tags: ["Tableau", "数据建模", "自动预警"],
    },
    {
      title: "跨境经营分析与策略输出",
      category: "经营分析",
      period: "2025.03 - 2026.07",
      description: "围绕收入、利润、广告和库存建立经营诊断框架，定位风险与增长机会，并将分析结论转化为可执行的促销、协同和流程策略。",
      result: "月货量提升 11%，毛利率提升 3%",
      image: "/projects/operations-report.png",
      imageAlt: "英国跨境电商经营分析月报页面",
      link: sharedLinks.operations,
      tags: ["经营诊断", "增长策略", "ROI 测算"],
    },
  ],
  en: [
    {
      title: "AI-Powered New Product Research for Cross-border E-commerce",
      category: "MARKET RESEARCH",
      period: "Oct 2025 - Jul 2026",
      description: "Researched 30+ products and analyzed 6,000+ customer reviews. Used AI to clean competitor data, tag selling points, and identify market opportunities, supporting product screening and prioritization.",
      result: "Research efficiency +60%; 10+ new products advanced",
      image: "/projects/market-research.png",
      imageAlt: "Cross-border e-commerce market research report",
      link: sharedLinks.research,
      tags: ["Market Sizing", "Customer Insights", "AI Competitor Analysis"],
    },
    {
      title: "Cross-border Data Integration and BI Dashboard",
      category: "DATA PRODUCT",
      period: "Jan 2024 - Sep 2025",
      description: "Integrated sales, supply chain, and logistics data to build a drill-down Tableau operations dashboard and automated alerting system, enabling real-time visibility into shipment volume, profitability, and fulfillment performance.",
      result: "Team productivity +30%; monthly shipment volume +7%",
      image: "/projects/bi-analysis.png",
      imageAlt: "Cross-border operations analytics dashboard",
      link: sharedLinks.dashboard,
      secondaryLink: sharedLinks.integration,
      tags: ["Tableau", "Data Modeling", "Automated Alerts"],
    },
    {
      title: "Cross-border Operations Analysis and Strategy",
      category: "OPERATIONS ANALYSIS",
      period: "Mar 2025 - Jul 2026",
      description: "Built an operational diagnostic framework covering revenue, profitability, advertising, and inventory. Identified business risks and growth opportunities, then translated findings into actionable promotion, collaboration, and process strategies.",
      result: "Monthly shipment volume +11%; gross margin +3%",
      image: "/projects/operations-report.png",
      imageAlt: "Cross-border e-commerce operations analysis report",
      link: sharedLinks.operations,
      tags: ["Operational Diagnostics", "Growth Strategy", "ROI Analysis"],
    },
  ],
};
