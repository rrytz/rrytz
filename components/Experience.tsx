"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current
      ?.querySelectorAll(".scroll-reveal-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { experience } = portfolioData;

  return (
    <section id="journey" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 scroll-reveal-section">
          <div className="eyebrow">Journey</div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            How I got here
          </h2>
        </div>

        <div className="relative max-w-2xl">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3fffa8]/40 via-[#3fffa8]/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((entry, idx) => (
              <div
                key={idx}
                className={`scroll-reveal-section timeline-entry stagger-card-${idx + 1} relative pl-10`}
                style={{ transform: "translateX(-20px)" }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#3fffa8] bg-[#050d1a] shadow-[0_0_12px_rgba(63,255,168,0.4)]" />

                <div className="text-[0.72rem] font-bold text-[#3fffa8] uppercase tracking-[0.1em] mb-2">
                  {entry.period}
                </div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">
                  {entry.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.7] text-white/45">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
