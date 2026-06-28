"use client";

import { portfolioData } from "@/data/portfolio";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const { name, role, profileImage, positioning, bio } = portfolioData.personal;
  const thinkingTopics = portfolioData.thinkingAbout;
  const [projectsCount, setProjectsCount] = useState(0);
  const [techCount, setTechCount] = useState(0);
  const [counterDone, setCounterDone] = useState(false);
  const [thinkingIndex, setThinkingIndex] = useState(0);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const counterTriggered = useRef(false);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counterTriggered.current) {
            counterTriggered.current = true;
            animateCounter(4, setProjectsCount);
            animateCounter(5, setTechCount, () => setCounterDone(true));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (profileCardRef.current) observer.observe(profileCardRef.current);
    return () => observer.disconnect();
  }, []);

  // "Currently thinking about" rotator — 4s cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setThinkingIndex((prev) => (prev + 1) % thinkingTopics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [thinkingTopics.length]);

  // Profile card tilt
  useEffect(() => {
    const card = profileCardRef.current;
    if (!card) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -3;
      const rotY = ((x - cx) / cx) * 3;
      card.style.transition = "transform 100ms ease-out";
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const animateCounter = (
    target: number,
    setter: (v: number) => void,
    onComplete?: () => void
  ) => {
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setter(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else { setter(target); onComplete?.(); }
    };
    requestAnimationFrame(tick);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">

          {/* LEFT — text content */}
          <div>
            {/* Badge */}
            <div className="animate-badge inline-flex items-center gap-2 px-4 py-1.5 bg-[#3fffa8]/10 border border-[#3fffa8]/30 rounded-full text-[0.78rem] font-medium text-[#3fffa8] uppercase tracking-[0.06em] mb-6 shadow-[0_0_20px_rgba(63,255,168,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fffa8] badge-dot shadow-[0_0_8px_rgba(63,255,168,0.8)]" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="font-syne font-extrabold text-[clamp(2.5rem,7vw,5.5rem)] leading-none tracking-[-0.03em] text-white">
              <span className="animate-name-first inline-block tracking-[-0.02em]">Ritz Lloyd</span>
              <br />
              <span className="animate-name-last inline-block text-[#3fffa8] tracking-[-0.04em]">
                Sastrillas
              </span>
            </h1>

            {/* Positioning statement (replaces generic "Frontend Developer") */}
            <p className="animate-subtitle font-syne font-semibold text-[clamp(1rem,2vw,1.35rem)] text-white/40 mt-4 mb-5 max-w-[560px]">
              {positioning}
            </p>

            {/* Impact-first bio */}
            <p className="animate-subtitle text-base leading-[1.75] text-white/45 max-w-[520px]">
              {bio}
            </p>

            {/* "Currently thinking about" rotator */}
            <div className="animate-subtitle mt-5">
              <span className="text-[0.72rem] font-bold text-white/25 uppercase tracking-[0.1em]">
                Currently thinking about
              </span>
              <div className="thinking-rotator mt-1.5 h-[1.6em] overflow-hidden relative">
                {thinkingTopics.map((topic, i) => (
                  <p
                    key={i}
                    className={`thinking-topic text-sm text-[#3fffa8]/70 font-medium italic transition-all duration-500 absolute w-full ${
                      i === thinkingIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    → {topic}
                  </p>
                ))}
              </div>
            </div>

            {/* Mint divider */}
            <div className="animate-buttons mt-8 mb-8 h-px w-24 bg-gradient-to-r from-[#3fffa8]/60 to-transparent shadow-[0_0_8px_rgba(63,255,168,0.3)]" />

            {/* Buttons */}
            <div className="animate-buttons flex flex-wrap gap-4">
              <a
                href="#projects"
                className="shimmer-button relative inline-flex items-center gap-2 px-7 py-3 bg-[#3fffa8] text-[#050d1a] font-bold text-sm rounded-full tracking-tighter overflow-hidden group"
              >
                <span className="relative z-10">See the work →</span>
              </a>
              <a
                href="#contact"
                className="pulse-button inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-white/15 text-white font-medium text-sm rounded-full transition-colors hover:border-[#3fffa8]/40 hover:text-[#3fffa8]"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>

          {/* RIGHT — profile card */}
          <div className="hidden md:block animate-profile-card" ref={profileCardRef}>
            <div
              className="profile-card glass bg-white/5 backdrop-blur-2xl p-8 min-w-[240px] text-center rounded-[20px] border border-[#3fffa8]/20 shadow-2xl relative overflow-hidden"
              style={{ willChange: "transform" }}
            >
              {/* Ambient drift */}
              <div className="card-ambient-shimmer absolute inset-0 pointer-events-none" />

              {/* Avatar */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#60A5FA] mx-auto mb-5 flex items-center justify-center font-syne font-extrabold text-4xl text-white shadow-[0_0_40px_rgba(167,139,250,0.3)] relative overflow-hidden group">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  "RL"
                )}
              </div>

              <h3 className="font-syne font-bold text-base text-white mb-1.5">{name}</h3>
              <p className="text-[0.75rem] font-bold text-[#3fffa8] uppercase tracking-[0.1em]">{role}</p>

              {/* Stats — "Shipped Products" & "Full Stack" */}
              <div className="flex justify-between items-center gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex-1">
                  <div
                    className={`font-extrabold text-2xl text-white transition-all duration-300 ${
                      !counterDone ? "counter-mono" : "counter-display"
                    }`}
                  >
                    {projectsCount}
                  </div>
                  <div className="text-[0.65rem] font-bold text-white/25 uppercase tracking-[0.08em] mt-0.5">
                    Shipped Products
                  </div>
                </div>

                <div className="w-px h-8 bg-[#3fffa8]/30 shadow-[0_0_8px_rgba(63,255,168,0.6)]" />

                <div className="flex-1">
                  <div
                    className={`font-extrabold text-2xl text-white transition-all duration-300 ${
                      !counterDone ? "counter-mono" : "counter-display"
                    }`}
                  >
                    {techCount}+
                  </div>
                  <div className="text-[0.65rem] font-bold text-white/25 uppercase tracking-[0.08em] mt-0.5">
                    Full Stack
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
