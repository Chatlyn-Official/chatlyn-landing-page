import { NextResponse, type NextRequest } from "next/server";
import { DOC_PAGES } from "@/content/docs";

const DOC_SLUGS = new Set(DOC_PAGES.map((page) => page.slug));

/**
 * Doc pages stream in (partial prerendering), so by the time the page calls notFound() the
 * 200 status has already been sent. Unknown /docs/<slug> addresses get a real 404 here instead.
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.slice("/docs/".length).replace(/\/+$/, "");
  if (!DOC_SLUGS.has(slug)) {
    // Behind nginx, X-Forwarded-Proto makes request URLs read "https://localhost:<port>", but the
    // app itself speaks plain http. Next treats a rewrite to that https origin as an external
    // proxy and fails (500), so point the internal rewrite back at http.
    const url = request.nextUrl.clone();
    url.protocol = "http:";
    url.pathname = "/docs-not-found";
    return NextResponse.rewrite(url, { status: 404 });
  }
  return NextResponse.next();
}

export const config = { matcher: "/docs/:slug+" };
