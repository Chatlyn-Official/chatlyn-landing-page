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
    return NextResponse.rewrite(new URL("/docs-not-found", request.url), { status: 404 });
  }
  return NextResponse.next();
}

export const config = { matcher: "/docs/:slug+" };
