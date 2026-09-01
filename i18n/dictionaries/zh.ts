import type { Dictionary } from "./types";

const zh: Dictionary = {
  meta: {
    title: "Cognex | 机器视觉与AI解决方案",
    description:
      "Cognex为工业自动化提供世界领先的机器视觉解决方案,以高精度和易用性解决自动化难题。",
  },

  header: {
    homeAria: "前往Cognex首页",
    searchPlaceholder: "搜索",
    searchAria: "搜索",
    myCognex: "MyCognex",
    languageAria: "选择语言",
    navAria: "主导航",
    mobileNavAria: "移动端导航",
    menuOpenAria: "打开菜单",
    menuCloseAria: "关闭菜单",
    gnbLabels: ["产品", "应用", "支持", "工具与资源", "关于我们"],
    mobileNavLabels: ["产品", "应用", "支持", "工具与资源", "Why Cognex", "公司"],
    mobileCta: {
      line1: "不确定",
      line2: "需要哪款产品?",
      linkLabel: "浏览产品",
    },
  },

  footer: {
    footerAria: "网站页脚",
    companyName: "Cognex总部",
    phoneAria: "电话咨询",
    instagramAria: "Cognex Instagram",
    youtubeAria: "Cognex YouTube",
    navAria: "页脚导航",
    legalAria: "法律信息导航",
    navLabels: ["产品", "客户案例", "公司简介", "招聘", "支持"],
    legalLabels: ["隐私政策", "服务条款", "Partner Portal", "Cookies Settings"],
    newsletterTitle: "获取Cognex资讯",
    emailPlaceholder: "电子邮箱地址",
    countryAria: "选择国家/地区",
    countryPlaceholder: "国家 / 地区",
    countries: ["韩国", "美国", "中国", "日本", "德国", "英国"],
    salesButton: "联系销售",
  },

  hero: {
    ariaLabel: "首屏区域",
    title: ["持续提供", "全新AI视觉"],
    body: "探索Cognex最新的AI驱动产品,以高精度和易用性解决您的自动化难题。",
    cta: "下载产品指南",
    slideAria: (i, label) => `幻灯片 ${i + 1}: ${label}`,
    slideGoToAria: (i) => `跳转到幻灯片 ${i + 1}`,
    slides: [
      { label: ["应对复杂自动化难题的", "强大处理能力与灵活性"], alt: "Cognex In-Sight AI 机器视觉系统" },
      { label: ["通过OneVision", "实现AI检测流程的标准化与扩展"], alt: "Cognex OneVision 软件" },
      { label: ["AI超高速检测", "保障生产线顺畅运行"], alt: "Cognex 视觉传感器" },
      { label: ["超过500家企业的选择", "Cognex AI视觉"], alt: "Cognex 3D激光扫描仪" },
    ],
  },

  company: {
    ariaLabel: "公司介绍区域",
    title: "我们为工业自动化提供世界领先的机器视觉解决方案。",
    body: "我们独特地提供工业生产中最关键的核心能力,引领向AI驱动视觉自动化的转型。",
    circles: [
      { label: "公司概况", sub: "Who we are" },
      { label: "技术与创新", sub: "Technology & AI" },
      { label: "主要应用行业", sub: "Industries" },
    ],
    stats: ["成立时间", "全球累计安装量", "全球主要据点", "持有专利数"],
  },

  coreFeatures: {
    ariaLabel: "核心优势区域",
    title: "选择Cognex的理由",
    viewAllLabel: "查看全部",
    features: [
      {
        title: "解决复杂自动化难题",
        body: "凭借高性能处理能力与卓越的灵活性,准确高效地解决任何复杂的自动化难题。",
      },
      {
        title: "AI检测流程标准化",
        body: "基于OneVision的统一平台,轻松实现AI检测流程标准化,并根据现场规模灵活扩展。",
      },
      {
        title: "超高速AI视觉检测",
        body: "AI驱动的超高速检测技术让生产线不间断运行,将不良率降至最低并实现品质最大化。",
      },
      {
        title: "久经验证的全球解决方案",
        body: "全球500多家企业信赖的Cognex AI视觉解决方案,引领行业标准。",
      },
    ],
  },

  products: {
    ariaLabel: "产品分类区域",
    detailLabel: "查看详情",
    items: [
      { title: "视觉传感器与\n系统", alt: "Cognex视觉传感器及系统" },
      { title: "3D视觉\n系统", alt: "Cognex 3D视觉系统" },
      { title: "条码\n读取器", alt: "Cognex条码读取器" },
      { title: "视觉\n软件", alt: "Cognex视觉软件" },
      { title: "物流\n解决方案", alt: "Cognex物流解决方案" },
      { title: "镜头、光源及\n配件", alt: "Cognex镜头、光源及配件" },
    ],
  },

  solutions: {
    ariaLabel: "技术应用领域区域",
    eyebrow: "SOLUTIONS / 成果",
    title: "技术应用领域",
    viewAllLabel: "查看全部",
    detailLabel: "查看详情",
    mainTabs: { application: "应用", industry: "行业" },
    appTabs: [
      "装配检测与验证",
      "自动缺陷检测",
      "条码扫描与追踪",
      "自动分类与分拣",
      "测量与尺寸检测",
      "导引与定位",
      "光学字符识别 (OCR)",
    ],
    industryTabs: ["半导体", "食品饮料", "汽车", "制药", "电子元件", "物流"],
    appContent: [
      { title: "装配检测与验证", body: "[示例] 先进的机器视觉技术精密检测并验证复杂装配工艺中的每个组件,保障产品质量与生产可靠性。实际内容即将更新。" },
      { title: "自动缺陷检测", body: "[示例] 借助先进机器视觉与AI的强大能力检测所有缺陷,确保品质一致并减少高成本的错误。实际内容即将更新。" },
      { title: "条码扫描与追踪", body: "[示例] 高速条码识读技术保障供应链全程的产品可追溯性,同时提升物流效率与数据准确性。实际内容即将更新。" },
      { title: "自动分类与分拣", body: "[示例] 精密视觉系统按形状、颜色、尺寸自动分类产品,并快速剔除不良品,实现生产效率最大化。实际内容即将更新。" },
      { title: "测量与尺寸检测", body: "[示例] 非接触式精密测量技术可实时检测微米级尺寸偏差,自动确保符合设计规格。实际内容即将更新。" },
      { title: "导引与定位", body: "[示例] 基于视觉的导引系统实时支持机械臂与自动化设备的精确定位,提升装配精度。实际内容即将更新。" },
      { title: "光学字符识别 (OCR)", body: "[示例] 基于深度学习的OCR引擎可准确识读不同字体、方向和表面的字符,提升可追溯性与数据质量。实际内容即将更新。" },
    ],
    industryContent: [
      { title: "半导体", body: "[示例] 从晶圆、封装检测到标记读取,在半导体制造全流程中提升良率并将不良降至最低。" },
      { title: "食品饮料", body: "[示例] 标签检测、异物检测、容量确认等,自动满足食品饮料产线的品质与安全标准。" },
      { title: "汽车", body: "[示例] 通过车身、发动机、电装部件的缺陷检测与装配验证,保障汽车制造品质。" },
      { title: "制药", body: "[示例] 通过标签、条码、外观检测,实现制药法规合规与产品可追溯性的自动化。" },
      { title: "电子元件", body: "[示例] 对PCB、连接器、小型元件的精密检测,最大化电子产品生产品质。" },
      { title: "物流", body: "[示例] 物流中心的条码识读与自动分拣,同时提升处理速度与准确性。" },
    ],
  },

  resources: {
    ariaLabel: "热门资源区域",
    title: "热门资源",
    prevAria: "上一张",
    nextAria: "下一张",
    detailLabel: "查看详情",
    items: [
      { title: "质检视觉系统应用案例", body: "介绍如何借助Cognex视觉系统实现生产线质量管理的全面自动化。" },
      { title: "In-Sight 2000 条码识读应用", body: "基于In-Sight 2000系列的高速条码识读解决方案的配置与操作指南。" },
      { title: "面向自主机器人的物流视觉方案", body: "通过整合自主移动机器人(AMR)与视觉系统构建智能物流中心的方法。" },
      { title: "高性能条码机器视觉指南", body: "在多种条码类型与环境下确保最佳识读率的技术简报。" },
      { title: "消费品品质保障解决方案", body: "在消费品产线上利用AI视觉实时检测外观不良与标签错误的案例。" },
      { title: "AI驱动的自动缺陷检测", body: "快速部署基于深度学习的缺陷检测模型并应用于现场的实战指南。" },
    ],
  },

  successStories: {
    ariaLabel: "客户成功案例区域",
    eyebrow: "SUCCESS STORIES",
    title: "借助Cognex取得成功的客户案例",
    viewAllLabel: "查看全部",
    detailLabel: "查看详情",
    slideAria: (i, title) => `成功案例 ${i + 1}: ${title}`,
    items: [
      {
        title: "Panpass Technology如何以数字化方式革新产品生命周期管理",
        heading: "从提升品质到守护品牌声誉",
        body: "以99.9%的卓越代码识读准确率大幅提升品质与效率,并改善供应链的全程可追溯性与透明度。由此全面保护品牌,增强客户忠诚度,守护企业声誉。",
      },
      {
        title: "施耐德电气如何借助Cognex OneVision实现AI检测标准化",
        heading: "从检测精度到集成速度的双重提升",
        body: "基于OneVision平台实现AI检测标准化,将误判(假拒绝)次数减少70倍,提升作业效率并减少不必要的浪费。新检测应用的集成时间缩短30%,并通过扩大检测覆盖范围大幅提升了检测精度。",
      },
      {
        title: "Federal Package实现99%以上的缺陷检出率",
        heading: "从全数检测到完美品质承诺",
        body: "通过100%产品检测率的全数检测,将缺陷检出精度提升至99%以上,完美兑现了对客户卓越品质的品牌承诺,带来令人满意的成果。",
      },
      {
        title: "Wipro PARI如何利用AI解决电动车制造难题",
        heading: "从检测速度到成本效益的全面优化",
        body: "在兼顾众多组件配置的同时,加快了电动车电池模组的检测速度。通过EtherInspect创建多个虚拟相机,部署了具有成本效益的解决方案;并结合视觉引导机器人、视觉软件与条码扫描器,共同提升了产能与可追溯性。",
      },
    ],
  },
};

export default zh;
