import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Full-bleed ambient backdrop for the Hero — sparse nodes drifting slowly,
// linking to nearby nodes. A quiet nod to "distributed systems" rather
// than literal decoration, and it does the actual job of filling the
// hero's negative space: one continuous atmosphere instead of more
// foreground objects competing with the name.
const LINK_DISTANCE = 150;
const LINE_COLOR = "174, 173, 169"; // --color-ink-soft
const DOT_COLOR = "201, 162, 75"; // --color-accent

export default function NetworkField({ className = "" }) {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      const count = Math.min(60, Math.max(16, Math.floor((width * height) / 26000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function drawDots() {
      for (const p of particles) {
        ctx.fillStyle = `rgba(${DOT_COLOR}, 0.4)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawLinks() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${(1 - dist / LINK_DISTANCE) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    function renderStatic() {
      ctx.clearRect(0, 0, width, height);
      drawLinks();
      drawDots();
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      drawLinks();
      drawDots();
      rafId = requestAnimationFrame(step);
    }

    function start() {
      resize();
      initParticles();
      if (reduceMotion) {
        renderStatic();
      } else {
        step();
      }
    }

    start();

    function handleResize() {
      if (rafId) cancelAnimationFrame(rafId);
      start();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block h-full w-full ${className}`}
    />
  );
}
