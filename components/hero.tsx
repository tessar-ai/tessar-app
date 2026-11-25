import Link from "next/link";

const btn =
  "glow-border px-8 py-4 text-[13px] uppercase tracking-[0.12em] transition-colors";

const Hero = () => (
  <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pt-4 pb-12 text-center">
    <p className="mb-8 text-[12px] uppercase tracking-[0.3em] text-muted">
      <span className="mr-2 text-accent">✦</span>Tessar
    </p>

    <h1 className="font-display text-[clamp(48px,5vw,76px)] font-medium uppercase leading-[0.9] tracking-tight">
      Anything can
      <br />
      <span className="text-accent">be a plugin</span>
    </h1>

    <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
      A TypeScript framework and SDK for building CLI agents and embedding
      agents in applications. Start with an Agent, add plugins when you need
      them.
    </p>

    <div className="mt-7 flex flex-wrap justify-center items-center gap-3">
      <Link
        href="/docs"
        className={`${btn} bg-accent text-white hover:bg-accent`}
      >
        Get started
      </Link>
      <Link
        href="https://github.com/tessar-ai/tessar"
        className={`${btn} border border-fg/30 hover:text-accent`}
      >
        GitHub
      </Link>
    </div>
  </section>
);

export default Hero;