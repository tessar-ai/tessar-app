import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { GITHUB } from "@/lib/site";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{ title: "Tessar", url: "/" }}
      githubUrl={GITHUB}
    >
      {children}
    </DocsLayout>
  );
}
