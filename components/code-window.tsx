const k = "text-accent";
const s = "text-[#f0b8a8]";
const c = "text-muted";

const CodeWindow = () => (
  <div className="w-full overflow-hidden rounded-t-2xl border border-b-0 border-line bg-surface/80 text-left backdrop-blur">
    <div className="flex items-center gap-4 border-b border-line px-4 py-3">
      <div className="flex gap-2">
        <span className="size-3 rounded-full bg-line" />
        <span className="size-3 rounded-full bg-line" />
        <span className="size-3 rounded-full bg-line" />
      </div>
      <span className="border-b border-accent pb-0.5 text-[12px]">agent.ts</span>
    </div>

    <pre className="overflow-x-auto p-6 text-[13px] leading-7">
      <code>
        <span className={k}>import</span> {"{ Agent }"} <span className={k}>from</span> <span className={s}>"@tessar/core"</span>;{"\n"}
        <span className={k}>import</span> {"{ OpenAIProvider }"} <span className={k}>from</span> <span className={s}>"@tessar/openai"</span>;{"\n\n"}
        <span className={k}>const</span> agent = <span className={k}>new</span> Agent({"({"}{"\n"}
        {"  "}id: <span className={s}>"assistant"</span>,{"\n"}
        {"  "}model: <span className={k}>new</span> OpenAIProvider({"({"}{"\n"}
        {"    "}apiKey: process.env.OPENAI_API_KEY!,{"\n"}
        {"    "}model: process.env.OPENAI_MODEL!,{"\n"}
        {"  "}{"}),"}{"\n"}
        {"  "}instructions: <span className={s}>"Be concise and helpful."</span>,{"\n"}
        {"});"}{"\n\n"}
        <span className={k}>const</span> result = <span className={k}>await</span> agent.generate(<span className={s}>"What can an agent do with tools?"</span>);
      </code>
    </pre>

    <div className="border-t border-line px-6 py-3 text-[12px] text-muted">
      <span className="text-accent">$</span> npm install @tessar/core @tessar/openai zod
    </div>
  </div>
);

export default CodeWindow;