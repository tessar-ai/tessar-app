import Link from "next/link";
import CodeWindow from "@/components/code-window";

const Hero = () => (
  <section className="mx-auto flex max-w-5xl flex-col items-center px-10 pt-16 text-center">
    <p className="mb-8 text-[12px] uppercase tracking-[0.3em] text-muted">
      <span className="mr-2 text-accent">✦</span>TypeScript SDK
    </p>

    <h1 className="font-display text-[clamp(56px,9vw,120px)] font-light uppercase leading-[0.9] tracking-tight">
      Anything is
      <br />a <span className="text-accent">plugin</span>
    </h1>

    <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-muted">
      A TypeScript framework and SDK for building CLI agents and embedding
      agents in applications. Start with an Agent, add plugins when you need
      them.
    </p>

    <div className="mt-12 flex items-center gap-3 text-[13px]">
      <Link
        href="/docs"
        className="glow-border rounded-full bg-fg px-7 py-3.5 text-bg transition-colors hover:bg-accent"
      >
        Get started
      </Link>
      <Link
        href="https://github.com/tessar-ai/tessar"
        className="glow-border rounded-full border border-fg/30 bg-fg/5 px-7 py-3.5 backdrop-blur transition-colors hover:border-fg/60 hover:text-accent"
      >
        GitHub
      </Link>
    </div>

    <div className="mt-20 w-full">
      <CodeWindow />
    </div>
  </section>
);

export default Hero;