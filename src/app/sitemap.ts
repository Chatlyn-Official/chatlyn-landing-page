import type { MetadataRoute } from "next";
import { DOC_PAGES } from "@/content/docs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/contact", "/docs", "/privacy-policy", "/terms-and-conditions", "/cancellation-policy"];
  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...DOC_PAGES.map((page) => ({ url: `${SITE_URL}/docs/${page.slug}` })),
  ];
}
