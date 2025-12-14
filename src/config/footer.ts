import type { FooterConfig } from "@/types";

export const footerConfig: FooterConfig = {
  links: [
    {
      title: "Company",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ],
};
