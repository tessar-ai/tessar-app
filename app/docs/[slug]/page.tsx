import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { GITHUB, guides } from "@/lib/site";

export const dynamicParams = false;

export const generateStaticParams = () => guides.map(({ slug }) => ({ slug }));

const Guide = async ({ params }: PageProps<"/docs/[slug]">) => {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <>
      <PageHeader title={guide.title} desc={guide.desc} />
      <a
        href={`${GITHUB}/blob/main/examples/guide/${slug}.md`}
        className="text-[13px] text-accent hover:underline"
      >
        Read on GitHub →
      </a>
    </>
  );
};

export default Guide;