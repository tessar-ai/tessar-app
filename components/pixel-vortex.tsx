"use client";

import { useEffect, useRef } from "react";

const CELL = 8;
const LOOP_DURATION = 16;
const OMEGA = (Math.PI * 2) / LOOP_DURATION;

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const hash = (x: number, y: number) => {
  let n = Math.imul(x, 374761393) ^ Math.imul(y, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return (n >>> 0) / 4294967295;
};
function noise(x: number, y: number) {
  const a = Math.floor(x),
    b = Math.floor(y),
    u = smooth(0, 1, x - a),
    v = smooth(0, 1, y - b);
  const p = hash(a, b) * (1 - u) + hash(a + 1, b) * u,
    q = hash(a, b + 1) * (1 - u) + hash(a + 1, b + 1) * u;
  return p * (1 - v) + q * v;
}

export default function PixelVortex() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = 0,
      h = 0,
      frame = 0,
      last = 0,
      elapsed = 0,
      visible = true;
    let radius = new Float32Array(0),
      angle = new Float32Array(0),
      grain = new Float32Array(0);
    let img: ImageData;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = Math.max(1, Math.ceil(rect.width / CELL));
      h = Math.max(1, Math.ceil(rect.height / CELL));
      canvas!.width = w;
      canvas!.height = h;
      img = ctx!.createImageData(w, h);
      radius = new Float32Array(w * h);
      angle = new Float32Array(w * h);
      grain = new Float32Array(w * h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const dx = (x + 0.5 - w * 0.5) / (w * 0.5);
          const dy = (y + 0.5 - h * 0.52) / (h * 0.5);
          const u = dx + 0.24 * dy;
          const v = dy + 0.14 * dx;
          const i = y * w + x;
          radius[i] = Math.hypot(u, v);
          angle[i] = Math.atan2(v, u);
          grain[i] = hash(x + 91, y + 173);
        }
      }
      draw(elapsed);
    }

    function draw(t: number) {
      if (!img) return;
      const data = img.data;
      const theta = -OMEGA * t;

      for (let i = 0; i < radius.length; i++) {
        const r = radius[i],
          a = angle[i] + theta;
        const lr = Math.log(Math.max(0.16, r));

        const phase = a + 2.75 * lr;
        const ca = Math.cos(phase),
          sa = Math.sin(phase);

        const n = noise(ca * 2.2 + 12.5, sa * 2.2 + lr * 1.6 + 18.3);
        const detail = noise(ca * 7.0 + 31.7, sa * 7.0 + lr * 4.8 + 41.2);

        const warp = 0.95 * (n - 0.5) + 0.25 * (detail - 0.5);
        const p = phase + warp;

        const bands =
          0.5 +
          0.22 * Math.sin(4 * p + 0.9 * lr) +
          0.15 * Math.sin(7 * p - 1.4 * lr + 1.5) +
          0.08 * Math.sin(11 * p + 2.1 * lr + 0.6) +
          0.08 * (detail - 0.5);
        const spiral = smooth(0.22, 0.78, bands);

        const edge =
          r +
          0.04 * (n - 0.5) +
          0.02 * (detail - 0.5) -
          0.025 * (spiral - 0.5);
        const eye = smooth(0.45, 0.62, edge);

        const minArm = 0.28 * (1 - smooth(0.52, 0.82, r));
        const effectiveSpiral = minArm + (1 - minArm) * spiral;

        const eyewallRing =
          smooth(0.46, 0.6, r) * (1 - smooth(0.68, 0.94, r));
        const eyewall = eyewallRing * (0.45 + 0.55 * spiral);

        const cloud = smooth(0.22, 0.78, n);
        const radialFalloff = 1 - 0.1 * smooth(0.65, 1.65, r);

        // Tăng nhẹ mật độ hạt trên nền, cánh xoáy và vành mắt bão
        const density =
          eye *
          radialFalloff *
          (0.23 +
            0.36 * effectiveSpiral +
            0.23 * eyewall +
            0.08 * cloud +
            0.12 * (detail - 0.5));

        const threshold = 0.52 + (grain[i] - 0.5) * 0.24;
        const on = density > threshold;

        const j = i * 4;
        data[j] = on ? 36 : 0;
        data[j + 1] = on ? 36 : 0;
        data[j + 2] = on ? 36 : 0;
        data[j + 3] = 255;
      }
      ctx!.putImageData(img, 0, 0);
    }

    function loop(ms: number) {
      frame = requestAnimationFrame(loop);
      if (!visible || document.hidden || motion.matches) {
        last = ms;
        return;
      }
      if (ms - last < 40) return;
      elapsed = (elapsed + Math.min((ms - last) / 1000, 0.15)) % LOOP_DURATION;
      last = ms;
      draw(elapsed);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(canvas);

    resize();
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="block size-full [image-rendering:pixelated]"
    />
  );
}