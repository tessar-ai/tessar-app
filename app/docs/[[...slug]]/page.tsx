import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import mdxComponents from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { source } from "@/lib/source";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageProps<"/docs/[[...slug]]">) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();

  return { title: page.data.title, description: page.data.description };
}

export default function Page({ params }: PageProps<"/docs/[[...slug]]">) {
  return (
    <Suspense
      fallback={
        <DocsPage>
          <DocsBody>
            <p role="status">Loading documentation…</p>
          </DocsBody>
        </DocsPage>
      }
    >
      <DocContent params={params} />
    </Suspense>
  );
}

async function DocContent({ params }: Pick<PageProps<"/docs/[[...slug]]">, "params">) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={mdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}
