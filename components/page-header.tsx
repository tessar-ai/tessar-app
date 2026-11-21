type Props = { title: string; desc?: string };

const PageHeader = ({ title, desc }: Props) => (
  <header className="mb-12">
    <h1 className="font-display text-[clamp(40px,6vw,72px)] font-light uppercase leading-none tracking-tight">
      {title}
    </h1>
    {desc && <p className="mt-4 max-w-2xl text-[15px] text-muted">{desc}</p>}
  </header>
);

export default PageHeader;