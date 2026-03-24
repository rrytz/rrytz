"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, role, bio, profileImage } = portfolioData.personal;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7DF9C2]/10 border border-[#7DF9C2]/20 rounded-full text-[0.78rem] font-medium text-[#7DF9C2] uppercase tracking-[0.06em] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7DF9C2] animate-pulse-dot" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-syne font-extrabold text-[clamp(2.5rem,7vw,5.5rem)] leading-none tracking-[-0.03em] text-white"
            >
              {name.split(' ').slice(0, 2).join(' ')}<br />
              <span className="text-[#7DF9C2]">{name.split(' ').slice(2).join(' ')}</span>
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
              I build intuitive, responsive, and visually engaging user interfaces that transform complex logic into seamless user experiences. I focus on the <em className="text-[#7DF9C2] not-italic">"how it feels"</em> so the <em className="text-[#A78BFA] not-italic">"what it does"</em> becomes effortless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 mt-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DF9C2] text-[#080808] font-bold text-sm rounded-full tracking-tighter hover:scale-105 transition-all shadow-[0_0_30px_rgba(125,249,194,0.25)] hover:shadow-[0_0_50px_rgba(125,249,194,0.4)]"
              >
                View Projects ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-white/15 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-all"
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
            <div className="glass bg-white/5 backdrop-blur-2xl p-8 min-w-[240px] text-center rounded-[20px] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#60A5FA] mx-auto mb-5 flex items-center justify-center font-syne font-extrabold text-4xl text-white shadow-[0_0_40px_rgba(167,139,250,0.3)] relative group overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  "RL"
                )}
                <div className="absolute inset-[-3px] border-full opacity-60 z-[-1] bg-gradient-to-tr from-[#7DF9C2] via-[#A78BFA] to-[#60A5FA] blur-sm animate-pulse-slow"></div>
              </div>
              <h3 className="font-syne font-bold text-base text-white mb-1.5">{name}</h3>
              <p className="text-[0.75rem] font-bold text-[#7DF9C2] uppercase tracking-[0.1em]">{role}</p>

              <div className="flex justify-between items-center gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex-1">
                  <div className="font-syne font-extrabold text-2xl text-white">4+</div>
                  <div className="text-[0.7rem] font-bold text-white/25 uppercase tracking-[0.1em] mt-0.5">Projects</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex-1">
                  <div className="font-syne font-extrabold text-2xl text-white">5+</div>
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
