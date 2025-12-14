import type { SiteConfig } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "范小兵",
  tagline: "分享个人产品和知识。",
  description:
    "分享个人产品和知识。",
  keywords: [
    "范小兵",
    "个人网站",
    "项目",
    "知识",
    "分享",
    "博客",
    "教程",
    "技术",
    "编程",
    "Directory",
    "Template",
    "Boilerplate",
    "Next.js",
    "Auth.js",
    "Tailwindcss",
    "Shadcn/ui",
    "Resend",
    "Sanity",
    "Stripe",
    "Vercel",
  ],
  author: "范小兵",
  url: SITE_URL,
  logo: "/logo.png",
  // set the logoDark if you have put the logo-dark.png in the public folder
  // logoDark: "/logo-dark.png",
  // please increase the version number when you update the image
  image: `${SITE_URL}/og.png?v=1`,
  mail: "support@xiaobingkj.com",
  utm: {
    source: "xiaobingkj.com",
    medium: "referral",
    campaign: "navigation",
  },
  links: {
    // leave it blank if you don't want to show the link (don't delete)
    twitter: "https://x.com/ben_jacksons",
    github: "https://github.com/xiaobingtech",
    youtube: "https://www.youtube.com/@fanxiaobing",
  },
};
