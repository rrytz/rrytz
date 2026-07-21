'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ThemeTransitionOverlay.css';

interface ThemeTransitionOverlayProps {
  active: boolean;
  direction?: 'forward' | 'reverse';
  onHalfway: () => void;
  onComplete: () => void;
}

export default function ThemeTransitionOverlay({
  active,
  direction = 'forward',
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

    const isForward = direction === 'forward';
    const startX = isForward ? '-100vw' : '200vw';
    const endX = isForward ? '200vw' : '-100vw';
    const gradient = isForward
      ? 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.15) 65%, transparent 100%)'
      : 'linear-gradient(240deg, transparent 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.15) 65%, transparent 100%)';

    // Reset overlay state
    gsap.set(container, { display: 'block', opacity: 1, pointerEvents: 'auto' });
    gsap.set(sweep, { x: startX, backgroundImage: gradient });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { display: 'none', pointerEvents: 'none' });
        onComplete?.();
      }
    });

    // Sweep across the screen
    tl.to(sweep, {
      x: endX,
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
  }, [active, direction, onHalfway, onComplete]);

  return (
    <div ref={containerRef} className="theme-transition-overlay">
      <div ref={sweepRef} className="theme-transition-sweep" />
    </div>
  );
}
