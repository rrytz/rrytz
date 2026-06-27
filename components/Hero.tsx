"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export default function Hero() {
  const { name, role, bio, profileImage } = portfolioData.personal;
  const [projectsCount, setProjectsCount] = useState(0);
  const [techCount, setTechCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target: number, setter: (val: number) => void) => {
      let current = 0;
      const increment = target / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 50);
    };

    animateCounter(4, setProjectsCount);
    animateCounter(5, setTechCount);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3fffa8]/10 border border-[#3fffa8]/30 rounded-full text-[0.78rem] font-medium text-[#3fffa8] uppercase tracking-[0.06em] mb-6 shadow-[0_0_20px_rgba(63,255,168,0.2)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fffa8] animate-pulse-dot shadow-[0_0_10px_rgba(63,255,168,0.8)]" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-syne font-extrabold text-[clamp(2.5rem,7vw,5.5rem)] leading-none tracking-[-0.03em] text-white"
            >
              <span className="tracking-[-0.02em]">Ritz Lloyd</span><br />
              <span className="text-[#3fffa8] tracking-[-0.04em]">Sastrillas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-syne font-semibold text-[clamp(1.1rem,2.5vw,1.6rem)] text-white/45 mt-3 my-6"
            >
              {role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base leading-[1.75] text-white/45 max-w-[520px]"
            >
              I turn complex requirements into interfaces people actually enjoy using. My focus: the gap between how something works and <em className="text-[#3fffa8] not-italic border-b border-[#3fffa8]/30 pb-0.5">how it feels</em>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 mt-10"
            >
              <a
                href="#projects"
                className="relative inline-flex items-center gap-2 px-7 py-3 bg-[#3fffa8] text-[#050d1a] font-bold text-sm rounded-full tracking-tighter hover:scale-105 transition-all shadow-[0_0_30px_rgba(63,255,168,0.25)] hover:shadow-[0_0_50px_rgba(63,255,168,0.4)] overflow-hidden group"
              >
                <span className="relative z-10">View Projects ↗</span>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-white/15 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-all hover:border-[#3fffa8]/50 animate-border-glow"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block"
          >
            <div className="glass bg-white/5 backdrop-blur-2xl p-8 min-w-[240px] text-center rounded-[20px] border border-[#3fffa8]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3fffa8]/5 to-transparent pointer-events-none" />
              
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#60A5FA] mx-auto mb-5 flex items-center justify-center font-syne font-extrabold text-4xl text-white shadow-[0_0_40px_rgba(167,139,250,0.3)] relative group overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  "RL"
                )}
                <div className="absolute inset-[-3px] border-full opacity-60 z-[-1] bg-gradient-to-tr from-[#3fffa8] via-[#A78BFA] to-[#60A5FA] blur-sm animate-pulse-slow"></div>
              </div>
              <h3 className="font-syne font-bold text-base text-white mb-1.5">{name}</h3>
              <p className="text-[0.75rem] font-bold text-[#3fffa8] uppercase tracking-[0.1em]">{role}</p>

              <div className="flex justify-between items-center gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex-1">
                  <div className="font-syne font-extrabold text-2xl text-white">{projectsCount}+</div>
                  <div className="text-[0.7rem] font-bold text-white/25 uppercase tracking-[0.1em] mt-0.5">Projects</div>
                </div>
                <div className="w-px h-8 bg-[#3fffa8]/30 shadow-[0_0_8px_rgba(63,255,168,0.5)]" />
                <div className="flex-1">
                  <div className="font-syne font-extrabold text-2xl text-white">{techCount}+</div>
                  <div className="text-[0.7rem] font-bold text-white/25 uppercase tracking-[0.1em] mt-0.5">Tech</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
