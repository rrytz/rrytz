"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;
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
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 scroll-reveal-section">
          <div className="eyebrow">
            Work
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            A selection of frontend interfaces I've designed and developed — each focused on clarity, usability, and visual polish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass p-8 flex flex-col relative group overflow-hidden rounded-[20px] project-card scroll-reveal-section stagger-card-${idx + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3fffa8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3fffa8] to-[#00c2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3fffa8]/10 border border-[#3fffa8]/30 rounded-full text-[0.72rem] font-bold text-[#3fffa8] uppercase tracking-[0.1em] mb-4 w-fit">
                {project.category}
              </div>

              <h3 className="font-syne font-bold text-lg text-white mb-3 group-hover:text-[#3fffa8] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[0.875rem] leading-[1.7] text-white/45 flex-grow mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10 group-hover:border-[#3fffa8]/20 transition-colors">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-[0.06em] uppercase border ${
                  project.status === 'Completed' 
                    ? 'bg-[#3fffa8]/10 text-[#3fffa8] border-[#3fffa8]/20' 
                    : 'bg-amber-400/10 text-amber-400 border-amber-400/20'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-[#3fffa8] badge-dot' : 'bg-amber-400 badge-dot'}`} />
                  {project.status === 'Completed' ? '• Live' : project.status}
                </span>

                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    className="text-[0.8rem] text-white/25 hover:text-[#3fffa8] transition-colors flex items-center gap-1"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3fffa8]/10 to-transparent view-project-label p-4 flex items-center justify-center">
                <span className="text-[0.8rem] font-semibold text-[#3fffa8]">View Project →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
