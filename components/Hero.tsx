"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import PixelTransition from "./PixelTransition";
import TextType from "./TextType";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  VerifiedBadgeIcon,
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  TailwindIcon,
  PostgresIcon
} from "./Icons";

export default function Hero() {
  const { name, role, profileImage, positioning, bio, resumeUrl, email } = portfolioData.personal;
  const { github, linkedin } = portfolioData.social;

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 sm:pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Profile Header Row — Avatar + Name + Verified Badge + Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-8"
        >
          {/* Avatar with PixelTransition hover effect */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#60A5FA] flex-shrink-0 flex items-center justify-center font-syne font-extrabold text-2xl text-white shadow-[0_0_30px_rgba(125,249,194,0.15)] relative group overflow-hidden border-2 border-white/10">
            <PixelTransition
              isVisible={true}
              isHovered={false}
              onClick={() => {}}
              divRef={null}
              contentContainerClassName="w-full h-full flex items-center justify-center"
              pixelSize={8}
              transitionDuration={0.4}
              className="w-full h-full"
              autoPlay={true}
              playInterval={4000}
              gridGap={2}
              initialSpeed={0.8}
              hoverSpeed={0.6}
              pixelClassName="bg-gradient-to-br from-[#7DF9C2] to-[#60A5FA]"
              firstContent={
                <img src="/avatar_hover.png" alt={`${name} Avatar`} className="w-full h-full object-cover" />
              }
              secondContent={
                profileImage ? (
                  <img src={profileImage} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white">RL</span>
                )
              }
            />
          </div>

          {/* Name & Verified Badge & Social Links */}
          <div>
            <h1 className="font-syne font-bold text-2xl sm:text-3xl text-white flex items-center gap-2">
              <TextType
                text={name}
                typingSpeed={50}
                showCursor={false}
                loop={false}
                hideCursorOnComplete={true}
              />
              <span className="inline-flex items-center text-[#38BDF8]" title="Verified Developer">
                <VerifiedBadgeIcon size={24} />
              </span>
            </h1>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 mt-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#0A66C2] transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-white/40 hover:text-[#7DF9C2] transition-colors duration-200"
                  aria-label="Email"
                >
                  <MailIcon size={20} />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Headline / Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug tracking-tight mb-6"
        >
          Customer Service Representative | Technical Support Associate — <span className="text-white/50">IT Student &amp; Web Developer</span>
        </motion.h2>

        {/* Bio Paragraph with Embedded Inline Tech Chips (like renlenon.vercel.app) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-white/60 leading-[1.8] max-w-3xl mb-8 font-normal"
        >
          I&apos;m a frontend developer building responsive web applications and performant user interfaces with{' '}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#61DAFB]/30 bg-[#61DAFB]/10 text-[#61DAFB] text-xs font-semibold align-middle mx-0.5">
            <ReactIcon size={13} /> React
          </span>{' '}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-white/20 bg-white/10 text-white text-xs font-semibold align-middle mx-0.5">
            <NextjsIcon size={13} /> Next.js
          </span>{' '}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#3178C6]/30 bg-[#3178C6]/10 text-[#60A5FA] text-xs font-semibold align-middle mx-0.5">
            <TypescriptIcon size={13} /> TypeScript
          </span>{' '}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-semibold align-middle mx-0.5">
            <TailwindIcon size={13} /> Tailwind CSS
          </span>{' '}
          and{' '}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#4169E1]/30 bg-[#4169E1]/10 text-[#A78BFA] text-xs font-semibold align-middle mx-0.5">
            <PostgresIcon size={13} /> PostgreSQL
          </span>{' '}
          — focused on UI component architecture, accessibility, and high-conversion user experiences. Currently delivering production-ready applications and open to full-time &amp; freelance opportunities.
        </motion.div>

        {/* Primary Action Button — View Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg group"
          >
            <span>View Resume</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-medium text-sm rounded-lg hover:bg-white/5 transition-all duration-200"
          >
            See the work
          </a>
        </motion.div>
      </div>

      {/* Floating Bottom-Right Chat Widget (Chat with Ritz) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-black/90 backdrop-blur-md border border-white/20 text-white font-medium text-xs rounded-full shadow-2xl hover:border-[#7DF9C2]/60 hover:text-[#7DF9C2] transition-all group"
        >
          <span className="w-2 h-2 rounded-full bg-[#7DF9C2] animate-pulse" />
          <span>Chat with Ritz</span>
        </a>
      </div>
    </section>
  );
}
