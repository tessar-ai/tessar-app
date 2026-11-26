import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { GITHUB } from "@/lib/site";
import { source } from "@/lib/source";
import { LogoMark } from "@/components/logo";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <div>
      <DocsLayout
      tree={source.getPageTree()}
      githubUrl={GITHUB}
      nav={{ mode: "auto", title: <LogoMark size={46} /> }}
      links={[
        { text: "Docs", url: "/docs", active: "nested-url" },
        { text: "Models", url: "/models", active: "nested-url" },
        { text: "Integrations", url: "/integrations", active: "nested-url" },
        { text: "Reference", url: "/reference", active: "nested-url" },
      ]}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </DocsLayout>
    </div>
  );
}
