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
          <div className="eyebrow">
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
        </motion.div>
      </div>
    </section>
  );
}
