"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.scroll-reveal-section');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 scroll-reveal-section">
          <div className="eyebrow">
            My Philosophy
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            How I think about<br />building interfaces
          </h2>
        </div>

        <div className="glass p-14 relative overflow-hidden rounded-[20px] scroll-reveal-section">
          <div className="absolute top-[-0.5rem] left-8 font-syne font-extrabold text-[10rem] text-[#3fffa8]/5 leading-none pointer-events-none">"</div>
          <p className="font-syne font-semibold text-[clamp(1.3rem,2.5vw,1.6rem)] leading-[1.6] text-white relative z-10">
            {portfolioData.philosophy.split(' ').map((word, i) => {
              const highlights = ["person", "assume", "interfaces", "fail"];
              const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
              if (highlights.includes(cleanWord)) {
                return <em key={i} className="text-[#3fffa8] not-italic font-bold border-b border-[#3fffa8]/20 pb-0.5">{word} </em>;
              }
              return word + " ";
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
