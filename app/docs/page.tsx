import Link from "next/link";
import PageHeader from "@/components/page-header";
import { guides } from "@/lib/site";

const Docs = () => (
  <>
    <PageHeader
      title="Docs"
      desc="Start with an Agent, a model and your own tools. Add a Controller for plugins, and Sessions for conversations."
    />
    <div className="grid gap-4 sm:grid-cols-2">
      {guides.map((g) => (
        <Link
          key={g.slug}
          href={`/docs/${g.slug}`}
          className="border border-line bg-surface p-6 transition-colors hover:border-accent"
        >
          <h2 className="text-[15px]">{g.title}</h2>
          <p className="mt-2 text-[13px] text-muted">{g.desc}</p>
        </Link>
      ))}
    </div>
  </>
);

export default Docs;