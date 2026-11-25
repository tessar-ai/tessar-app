import PixelVortex from "@/components/pixel-vortex";

const Backdrop = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-svh overflow-hidden"
  >
    <PixelVortex />
  </div>
);

export default Backdrop;