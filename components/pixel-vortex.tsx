"use client";

import { useEffect, useRef } from "react";

const CELL = 8;
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (a: number, b: number, x: number) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const hash = (x: number, y: number) => { let n = Math.imul(x, 374761393) ^ Math.imul(y, 668265263); n = Math.imul(n ^ (n >>> 13), 1274126177); return (n >>> 0) / 4294967295; };
function noise(x: number, y: number) {
  const a = Math.floor(x), b = Math.floor(y), u = smooth(0, 1, x - a), v = smooth(0, 1, y - b);
  const p = hash(a, b) * (1 - u) + hash(a + 1, b) * u, q = hash(a, b + 1) * (1 - u) + hash(a + 1, b + 1) * u;
  return p * (1 - v) + q * v;
}

export default function PixelVortex() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); if (!ctx) return;
    let w = 0, h = 0, frame = 0, last = 0, elapsed = 0, visible = true;
    let radius = new Float32Array(0), angle = new Float32Array(0), grain = new Float32Array(0);
    let img: ImageData;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = Math.max(1, Math.ceil(rect.width / CELL)); h = Math.max(1, Math.ceil(rect.height / CELL));
      canvas!.width = w; canvas!.height = h; img = ctx!.createImageData(w, h);
      radius = new Float32Array(w * h); angle = new Float32Array(w * h); grain = new Float32Array(w * h);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const dx = (x + .5 - w * .5) / (w * .5), dy = (y + .5 - h * .51) / (h * .5);
        const u = dx - .25 * dy, v = dy + .10 * dx, i = y * w + x;
        radius[i] = Math.hypot(u, v); angle[i] = Math.atan2(v, u); grain[i] = hash(x + 91, y + 173);
      }
      draw(elapsed);
    }
    function draw(t: number) {
      if (!img) return;
      const data = img.data;
      for (let i = 0; i < radius.length; i++) {
        const r = radius[i], a = angle[i];
        // Advect the texture inward while rotating it. The phase is constant
        // along a logarithmic spiral, rather than along an ellipse.
        const lr = Math.log(Math.max(.16, r));
        const phase = a + 2.8 * lr + .19 * t;
        // Periodic, advected coordinates avoid a seam at atan2's branch cut.
        const ca = Math.cos(phase), sa = Math.sin(phase);
        const n = noise(ca * 2.2 + 12, sa * 2.2 + lr * 1.7 + t * .12 + 18);
        const detail = noise(ca * 7.5 + 31, sa * 7.5 + lr * 5.2 + t * .30 + 41);
        const warp = 1.25 * (n - .5) + .28 * (detail - .5);
        const p = phase + warp;
        // Overlapping frequencies and radial drift prevent evenly spaced blades.
        const bands = .50
          + .19 * Math.sin(7 * p + 1.3 * lr)
          + .14 * Math.sin(11 * p - 2.1 * lr + 1.7)
          + .09 * Math.sin(17 * p + 3.4 * lr + .6)
          + .08 * (detail - .5);
        const spiral = smooth(.30, .76, bands);
        const edge = r + .075 * (n - .5) + .035 * (detail - .5);
        const eye = smooth(.47, .75, edge);
        const outer = smooth(.92, 1.65, r);
        let density = eye * (.19 + .55 * spiral + .18 * outer + .12 * (n - .5));
        density += eye * (detail - .5) * .12;
        // Sparse fixed grain breaks edges without making the whole field flicker.
        const threshold = .48 + (grain[i] - .5) * .22;
        const c = density > threshold ? 36 : 0, j = i * 4;
        data[j] = data[j + 1] = data[j + 2] = c; data[j + 3] = 255;
      }
      ctx!.putImageData(img, 0, 0);
    }
    function loop(ms: number) {
      frame = requestAnimationFrame(loop);
      if (!visible || document.hidden || motion.matches) { last = ms; return; }
      if (ms - last < 65) return;
      elapsed += Math.min((ms - last) / 1000, .15); last = ms; draw(elapsed);
    }
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(canvas);
    resize(); frame = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(frame); ro.disconnect(); io.disconnect(); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="block size-full [image-rendering:pixelated]" />;
}
