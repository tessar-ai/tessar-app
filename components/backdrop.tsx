const Backdrop = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
  >
    <div className="absolute -top-40 -left-40 h-[640px] w-[640px] animate-drift-1 rounded-full bg-accent/40 blur-[110px] will-change-transform" />
    <div className="absolute top-10 -right-32 h-[520px] w-[520px] animate-drift-2 rounded-full bg-accent-hover/25 blur-[110px] will-change-transform" />
    <div className="absolute top-72 left-1/3 h-[480px] w-[720px] animate-drift-3 rounded-full bg-[#7a2a1c]/50 blur-[130px] will-change-transform" />
    <div className="absolute top-40 -left-20 h-[420px] w-[420px] animate-drift-4 rounded-full bg-accent/20 blur-[100px] will-change-transform" />
  </div>
);

export default Backdrop;