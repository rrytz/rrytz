"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".scroll-reveal-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const highlights = ["person", "assume", "interfaces", "fail"];
  const { principles } = portfolioData;

  return (
    <section id="philosophy" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 scroll-reveal-section">
          <div className="eyebrow">How I think</div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Point of view,<br />not just opinions
          </h2>
        </div>

        {/* Main quote card */}
        <div className="glass p-14 relative overflow-hidden rounded-[20px] scroll-reveal-section scroll-reveal-scale">
          <div
            className="absolute top-[-0.5rem] left-8 font-syne font-extrabold text-[10rem] text-[#3fffa8]/5 leading-none pointer-events-none select-none"
            aria-hidden
          >
            &ldquo;
          </div>

          <p className="font-syne font-semibold text-[clamp(1.3rem,2.5vw,1.6rem)] leading-[1.6] text-white relative z-10 scroll-reveal-section scroll-reveal-quote pl-6">
            {portfolioData.philosophy.split(" ").map((word, i) => {
              const clean = word.replace(/[^\w]/g, "").toLowerCase();
              if (highlights.includes(clean)) {
                return (
                  <em
                    key={i}
                    className="text-[#3fffa8] not-italic font-bold"
                    style={{ borderBottom: "1px solid rgba(63,255,168,0.25)", paddingBottom: "1px" }}
                  >
                    {word}{" "}
                  </em>
                );
              }
              return word + " ";
            })}
          </p>
        </div>

        {/* Principle cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {principles.map((p, idx) => (
            <div
              key={p.number}
              className={`principle-card glass p-8 rounded-[20px] scroll-reveal-section stagger-card-${idx + 1} relative group`}
            >
              <div className="principle-border" />
              <div className="text-[2.5rem] font-syne font-extrabold text-[#3fffa8]/15 leading-none mb-3">
                {p.number}
              </div>
              <h3 className="font-syne font-bold text-base text-white mb-3">
                {p.title}
              </h3>
              <p className="text-[0.85rem] leading-[1.7] text-white/45">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
