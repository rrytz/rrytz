"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CursorTrail() {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(Array.from({ length: 6 }, () => ({ x: -100, y: -100 })));
  const rafId = useRef(0);

  const sizes = [12, 8, 6, 4, 3, 2];
  const opacities = [0.8, 0.6, 0.45, 0.3, 0.2, 0.1];
  const delays = [0, 0.08, 0.12, 0.16, 0.2, 0.24]; // lerp factors (higher = faster follow)

  const animate = useCallback(() => {
    positions.current.forEach((pos, i) => {
      const target = i === 0 ? mouse.current : positions.current[i - 1];
      const lerpFactor = 1 - delays[i];
      const speed = 0.15 + lerpFactor * 0.3;
      pos.x += (target.x - pos.x) * speed;
      pos.y += (target.y - pos.y) * speed;

      const dot = dotsRef.current[i];
      if (dot) {
        dot.style.transform = `translate(${pos.x - sizes[i] / 2}px, ${pos.y - sizes[i] / 2}px)`;
      }
    });
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <div className="cursor-trail-container" aria-hidden="true">
      {sizes.map((size, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="cursor-dot"
          style={{
            width: size,
            height: size,
            opacity: opacities[i],
          }}
        />
      ))}
    </div>
  );
}
