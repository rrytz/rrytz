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
          <div className="flex items-center gap-3 text-[#7DF9C2] text-[0.75rem] font-semibold uppercase tracking-[0.12em] mb-4">
            <span className="w-6 h-px bg-[#7DF9C2]/60" />
            Work
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            A selection of frontend interfaces I&apos;ve designed and developed — each focused on clarity, usability, and visual polish.
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
              className="glass p-8 flex flex-col relative group overflow-hidden rounded-[20px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7DF9C2] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="font-syne font-bold text-[0.72rem] text-[#7DF9C2]/70 tracking-[0.1em] mb-4">
                {project.id} / {project.category}
              </div>

              <h3 className="font-syne font-bold text-lg text-white mb-3 group-hover:text-[#7DF9C2] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[0.875rem] leading-[1.7] text-white/45 flex-grow mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-[0.06em] uppercase border ${
                  project.status === 'Completed' 
                    ? 'bg-[#7DF9C2]/10 text-[#7DF9C2] border-[#7DF9C2]/20' 
                    : 'bg-amber-400/10 text-amber-400 border-amber-400/20'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-[#7DF9C2]' : 'bg-amber-400'}`} />
                  {project.status}
                </span>

                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    className="text-[0.8rem] text-white/25 hover:text-[#7DF9C2] transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
