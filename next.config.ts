import type { NextConfig } from "next";

const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.chatlyn.in").replace(/\/+$/, "");

/** App pages people may still open on chatlyn.in (old links, bookmarks): send them to the app, same path. */
const APP_PATHS = ["/login", "/signup", "/forgot-password", "/reset-password", "/invite", "/dashboard", "/verify"];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  async redirects() {
    return [
      // Pages the old chatlyn.in had that this site drops; 301 so search engines move them to the home page.
      { source: "/about", destination: "/", permanent: true },
      { source: "/waitlist", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      { source: "/pricing", destination: "/#pricing", permanent: true },
      // Short legal URLs the old site accepted.
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      // Login and sign-up live in the app.
      ...APP_PATHS.flatMap((path) => [
        { source: path, destination: `${APP_URL}${path}`, permanent: true },
        { source: `${path}/:rest*`, destination: `${APP_URL}${path}/:rest*`, permanent: true },
      ]),
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
