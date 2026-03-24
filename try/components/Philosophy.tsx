"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 text-[#7DF9C2] text-[0.75rem] font-semibold uppercase tracking-[0.12em] mb-4">
            <span className="w-6 h-px bg-[#7DF9C2]/60" />
            My Philosophy
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            How I think about<br />building interfaces
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-14 relative overflow-hidden rounded-[20px]"
        >
          <div className="absolute top-[-0.5rem] left-8 font-syne font-extrabold text-[10rem] text-[#7DF9C2]/5 leading-none pointer-events-none">"</div>
          <p className="font-syne font-semibold text-[clamp(1.1rem,2.5vw,1.5rem)] leading-[1.6] text-white relative z-10">
            {portfolioData.philosophy.split(' ').map((word, i) => {
              const highlights = ["person", "assume", "interfaces", "fail"];
              const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
              if (highlights.includes(cleanWord)) {
                return <em key={i} className="text-[#7DF9C2] not-italic">{word} </em>;
              }
              return word + " ";
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
