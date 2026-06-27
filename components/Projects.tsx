"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-14"
        >
          <div className="eyebrow">
            Work
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            A selection of frontend interfaces I've designed and developed — each focused on clarity, usability, and visual polish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 flex flex-col relative group overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-1 hover:border-[#3fffa8]/30 hover:shadow-[0_0_30px_rgba(63,255,168,0.1)]"
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
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-[#3fffa8] animate-pulse-dot' : 'bg-amber-400 animate-pulse-dot'}`} />
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

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3fffa8]/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 flex items-center justify-center">
                <span className="text-[0.8rem] font-semibold text-[#3fffa8]">View Project →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
