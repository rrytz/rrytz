"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";
import { MailIcon, PhoneIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const { email, phone } = portfolioData.personal;
  const { linkedin } = portfolioData.social;

  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    { status: "idle", message: "" }
  );

  const contactItems = [
    { label: "Email", value: email, icon: <MailIcon size={20} />, href: `mailto:${email}`, colorClass: "bg-[#7DF9C2]/10 text-[#7DF9C2]" },
    { label: "Phone", value: phone, icon: <PhoneIcon size={20} />, href: `tel:${phone}`, colorClass: "bg-[#60A5FA]/10 text-[#60A5FA]" },
    { label: "LinkedIn", value: "linkedin.com/in/ritzlloyd", icon: <LinkedinIcon size={20} />, href: linkedin, colorClass: "bg-[#A78BFA]/10 text-[#A78BFA]" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass p-14 grid md:grid-cols-2 gap-16 items-start rounded-[20px]"
        >
          <div className="flex flex-col gap-4">
            <div className="text-[#7DF9C2] text-[0.75rem] font-semibold uppercase tracking-[0.12em] mb-4">
              Contact
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] leading-[1.1] tracking-tight text-white mb-4">
              Let&apos;s build something<br /><span className="text-[#7DF9C2]">great together.</span>
            </h2>
            <p className="text-white/45 text-base leading-[1.7] mt-4">
              Have a project in mind, a role to fill, or just want to connect?
              I&apos;m always open to meaningful conversations.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              {contactItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" || item.label === "LinkedIn" ? "_blank" : "_self"}
                  rel={item.label === "Email" || item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-[14px] hover:border-[#7DF9C2]/25 hover:bg-[#7DF9C2]/5 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${item.colorClass} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[0.7rem] font-bold text-white/25 uppercase tracking-[0.1em] mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#7DF9C2] transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <form action={formAction} className="flex flex-col gap-4 max-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Name</label>
                <input
                  name="name"
                  className="px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#7DF9C2] focus:outline-none transition-all"
                  placeholder="Ritz Lloyd"
                  required
                />
                {state.errors?.name && (
                  <p className="text-[0.7rem] text-[#ef4444]">{state.errors.name[0]}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Email</label>
                <input
                  name="email"
                  type="email"
                  className="px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#7DF9C2] focus:outline-none transition-all"
                  placeholder="you@example.com"
                  required
                />
                {state.errors?.email && (
                  <p className="text-[0.7rem] text-[#ef4444]">{state.errors.email[0]}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Subject</label>
              <input
                name="subject"
                className="px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#7DF9C2] focus:outline-none transition-all"
                placeholder="Freelance project / Job opportunity"
                required
              />
              {state.errors?.subject && (
                <p className="text-[0.7rem] text-[#ef4444]">{state.errors.subject[0]}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                rows={5}
                className="px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#7DF9C2] focus:outline-none transition-all resize-none"
                placeholder="Tell me about your project or the role you&apos;re hiring for..."
                required
              />
              {state.errors?.message && (
                <p className="text-[0.7rem] text-[#ef4444]">{state.errors.message[0]}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DF9C2] text-black font-bold rounded-[10px] hover:bg-[#7DF9C2]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isPending ? "Sending…" : "Send Message"}
              <span className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
            </button>
          </form>

          <AnimatePresence>
            {state.status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 rounded-[10px] bg-[#7DF9C2]/10 border border-[#7DF9C2]/20 text-[#7DF9C2] text-sm"
              >
                ✓ {state.message}
              </motion.div>
            )}
            {state.status === "error" && !isPending && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 rounded-[10px] bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] text-sm"
              >
                ✕ {state.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
