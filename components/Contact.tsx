"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, location } = portfolioData.personal;
  const { linkedin } = portfolioData.social;

  const contactItems = [
    { label: "Email", value: email, icon: "✉", href: `mailto:${email}`, colorClass: "bg-[#3fffa8]/10 text-[#3fffa8]" },
    { label: "LinkedIn", value: "linkedin.com/in/ritzlloyd", icon: "in", href: linkedin, colorClass: "bg-[#A78BFA]/10 text-[#A78BFA]" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass p-14 grid md:grid-cols-2 gap-16 items-center rounded-[20px]"
        >
          <div>
            <div className="eyebrow">
              Contact
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] leading-[1.1] tracking-tight text-white mb-4">
              Let's build something<br /><span className="bg-gradient-to-r from-[#3fffa8] to-[#00c2ff] bg-clip-text text-transparent">great together.</span>
            </h2>
            <p className="text-white/45 text-base leading-[1.7] mt-4">
              Have a project in mind, a role to fill, or just want to connect? I'm always open to meaningful conversations.
            </p>
            <p className="text-[#3fffa8]/70 text-sm font-medium mt-6">
              Currently available for freelance and full-time roles.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-[14px] hover:border-[#3fffa8]/30 hover:bg-[#3fffa8]/5 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.colorClass} group-hover:scale-110 group-hover:animate-micro-bounce transition-transform shadow-[0_0_15px_rgba(63,255,168,0.2)]`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[0.7rem] font-bold text-white/25 uppercase tracking-[0.1em] mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#3fffa8] transition-colors">{item.value}</div>
                </div>
                <div className="text-white/20 group-hover:text-[#3fffa8] transition-colors">
                  →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
