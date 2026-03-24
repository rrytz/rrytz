"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills } = portfolioData;

  const stackGroups = [
    { label: "Client Side", icon: "M2 3h20v14H2z M8 21h8M12 17v4", items: skills.clientSide },
    { label: "Server Side", icon: "M22 12h-4l-3 9L9 3l-3 9H2", items: skills.serverSide },
    { label: "Database", icon: "M21 5c0 1.66-4 3-9 3s-9-1.34-9-3 M21 12c0 1.66-4 3-9 3s-9-1.34-9-3 M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5", items: skills.database },
    { label: "Tools & Workflow", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", items: skills.tools },
    { label: "Design & Prototyping", icon: "M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z", items: skills.design },
  ];

  return (
    <section id="stack" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-14"
        >
          <div className="flex items-center gap-3 text-[#7DF9C2] text-[0.75rem] font-semibold uppercase tracking-[0.12em] mb-4">
            <span className="w-6 h-px bg-[#7DF9C2]/60" />
            Toolkit
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            The tools and technologies I use to design, build, and ship interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group, idx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[20px]"
            >
              <div className="flex items-center gap-2.5 text-[0.72rem] font-bold text-[#A78BFA] uppercase tracking-[0.1em] mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={group.icon} />
                </svg>
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-[0.8rem] font-medium text-white/80 hover:border-[#7DF9C2]/30 hover:text-[#7DF9C2] hover:bg-[#7DF9C2]/5 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
