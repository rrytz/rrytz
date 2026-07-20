'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ThemeTransitionOverlay.css';

interface ThemeTransitionOverlayProps {
  active: boolean;
  onHalfway: () => void;
  onComplete: () => void;
}

export default function ThemeTransitionOverlay({
  active,
  onHalfway,
  onComplete
}: ThemeTransitionOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    const sweep = sweepRef.current;
    if (!container || !sweep) return;

    // Reset overlay state
    gsap.set(container, { display: 'block', opacity: 1, pointerEvents: 'auto' });
    gsap.set(sweep, { x: '-100vw' });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { display: 'none', pointerEvents: 'none' });
        onComplete?.();
      }
    });

    // Sweep from left (-100vw) to right (200vw) across the screen
    tl.to(sweep, {
      x: '200vw',
      duration: 1.0,
      ease: 'power2.inOut'
    }, 0);

    // At 50% of the transition (500ms), swap variables under the sweep line
    tl.call(() => {
      onHalfway?.();
    }, [], 0.5);

    return () => {
      tl.kill();
    };
  }, [active, onHalfway, onComplete]);

  return (
    <div ref={containerRef} className="theme-transition-overlay">
      <div ref={sweepRef} className="theme-transition-sweep" />
    </div>
  );
}
