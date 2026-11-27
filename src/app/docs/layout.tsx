import { DocsSidebar } from "@/components/docs/docs-sidebar";

/** Public help docs (chatlyn.in/docs): sidebar + article, between the site header and the CTA. */
export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <main className="relative px-5 pt-[100px] sm:pt-[130px] lg:pt-[150px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <DocsSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </main>
  );
}
