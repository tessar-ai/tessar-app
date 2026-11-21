import Link from "next/link";
import { guides } from "@/lib/site";

const item = "text-muted transition-colors hover:text-accent";

const DocsLayout = ({ children }: LayoutProps<"/docs">) => (
  <div className="mx-auto grid max-w-7xl grid-cols-[220px_1fr] gap-12 px-10 py-10 max-md:grid-cols-1">
    <aside className="max-md:hidden">
      <nav className="sticky top-10 flex flex-col gap-2 text-[13px]">
        <Link href="/docs" className={item}>
          Introduction
        </Link>
        <p className="mt-6 mb-1 text-[11px] uppercase tracking-[0.2em] text-fg">
          Guides
        </p>
        {guides.map((g) => (
          <Link key={g.slug} href={`/docs/${g.slug}`} className={item}>
            {g.title}
          </Link>
        ))}
      </nav>
    </aside>
    <main className="min-w-0">{children}</main>
  </div>
);

export default DocsLayout;