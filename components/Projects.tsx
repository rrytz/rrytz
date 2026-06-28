"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const [openReflection, setOpenReflection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".scroll-reveal-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 scroll-reveal-section">
          <div className="eyebrow">Selected work</div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Selected work
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            Each project is a case study in tradeoffs — what I chose, why, and what I&apos;d do differently next time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const isReflectionOpen = openReflection === project.id;
            return (
              <div
                key={project.id}
                className={[
                  "glass p-8 flex flex-col relative group overflow-hidden rounded-[20px]",
                  "project-card scroll-reveal-section",
                  `stagger-card-${idx + 1}`,
                  idx % 2 === 0 ? "project-card-odd" : "project-card-even",
                ].join(" ")}
              >
                {/* Top gradient bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3fffa8] to-[#00c2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category + Role */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3fffa8]/10 border border-[#3fffa8]/30 rounded-full text-[0.72rem] font-bold text-[#3fffa8] uppercase tracking-[0.1em]">
                    {project.id} / {project.category}
                  </div>
                  {project.projectRole && (
                    <span className="text-[0.7rem] font-medium text-white/30 uppercase tracking-[0.06em]">
                      {project.projectRole}
                    </span>
                  )}
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-3 group-hover:text-[#3fffa8] transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-[0.875rem] leading-[1.7] text-white/45 flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="tech-tag px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[0.72rem] font-medium text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Reflection toggle */}
                {project.reflection && (
                  <div className="mt-2 pt-3 border-t border-white/10">
                    <button
                      onClick={() =>
                        setOpenReflection(isReflectionOpen ? null : project.id)
                      }
                      className="flex items-center gap-2 text-[0.72rem] font-bold text-white/30 hover:text-[#3fffa8]/70 uppercase tracking-[0.08em] transition-colors duration-200"
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isReflectionOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                      What I&apos;d do differently
                    </button>
                    <div className={`evidence-wrapper ${isReflectionOpen ? "open" : ""} mt-2`}>
                      <div className="evidence-inner">
                        <div className="evidence-border" />
                        <div className="evidence-content-fade pl-4 py-2">
                          <p className="text-[0.82rem] leading-[1.7] text-white/40 italic">
                            {project.reflection}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card footer */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10 group-hover:border-[#3fffa8]/20 transition-colors duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-[0.06em] uppercase border bg-[#3fffa8]/10 text-[#3fffa8] border-[#3fffa8]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fffa8] badge-dot" />
                    Shipped
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8rem] text-white/25 hover:text-[#3fffa8] transition-colors flex items-center gap-1"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>

                {/* "View Project →" slides up on hover */}
                <div className="view-project-label absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3fffa8]/10 to-transparent p-4 flex items-center justify-center">
                  <span className="text-[0.8rem] font-semibold text-[#3fffa8] flex items-center gap-2">
                    View Project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
