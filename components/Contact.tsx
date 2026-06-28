"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, location } = portfolioData.personal;
  const { linkedin } = portfolioData.social;
  const { openTo } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements =
      sectionRef.current?.querySelectorAll(".scroll-reveal-section");
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactItems = [
    {
      label: "Email",
      value: email,
      icon: "✉",
      href: `mailto:${email}`,
      colorClass: "bg-[#3fffa8]/10 text-[#3fffa8]",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ritzlloyd",
      icon: "in",
      href: linkedin,
      colorClass: "bg-[#A78BFA]/10 text-[#A78BFA]",
    },
  ];

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-14 grid md:grid-cols-2 gap-16 items-start rounded-[20px] scroll-reveal-section scroll-reveal-contact">

          {/* Left column */}
          <div>
            <div className="eyebrow">Contact</div>
            <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] leading-[1.1] tracking-tight text-white mb-4">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-[#3fffa8] to-[#00c2ff] bg-clip-text text-transparent">
                great together.
              </span>
            </h2>
            <p className="text-white/45 text-base leading-[1.7] mt-4">
              Have a project in mind, a role to fill, or just want to connect?
              I&apos;m always open to meaningful conversations.
            </p>

            {/* "What I'm open to" list */}
            <div className="mt-8">
              <div className="text-[0.72rem] font-bold text-white/25 uppercase tracking-[0.1em] mb-4">
                What I&apos;m open to
              </div>
              <ul className="space-y-2.5">
                {openTo.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[0.875rem]"
                  >
                    {item.available ? (
                      <span className="open-to-check w-5 h-5 rounded-full bg-[#3fffa8]/15 flex items-center justify-center text-[#3fffa8] text-[0.7rem] font-bold flex-shrink-0">
                        ✓
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 text-[0.7rem] font-bold flex-shrink-0">
                        ✗
                      </span>
                    )}
                    <span
                      className={
                        item.available
                          ? "text-white/60"
                          : "text-white/25 line-through"
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-row flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-[14px] hover:border-[#3fffa8]/30 hover:bg-[#3fffa8]/5 transition-all duration-300 group"
              >
                <div
                  className={`contact-icon w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.colorClass} shadow-[0_0_15px_rgba(63,255,168,0.2)]`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[0.7rem] font-bold text-white/25 uppercase tracking-[0.1em] mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#3fffa8] transition-colors">
                    {item.value}
                  </div>
                </div>
                <div className="text-white/20 group-hover:text-[#3fffa8] transition-colors">
                  →
                </div>
              </a>
            ))}

            {/* Response time note */}
            <p className="text-[0.75rem] text-white/20 mt-2 pl-1 italic">
              Response time: usually within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
