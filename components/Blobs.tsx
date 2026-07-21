"use client";

import { motion } from "framer-motion";

export default function Blobs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{
          translate: [0, 30, -20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#7DF9C2]/15 rounded-full blur-[120px] theme-blob"
      />
      <motion.div
        animate={{
          translate: [0, -30, 20, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-[#A78BFA]/15 rounded-full blur-[120px] theme-blob"
      />
      <motion.div
        animate={{
          translate: [0, 20, -10, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
        className="absolute top-[40%] left-[55%] w-[300px] h-[300px] bg-[#60A5FA]/15 rounded-full blur-[120px] theme-blob"
      />
    </div>
  );
}
