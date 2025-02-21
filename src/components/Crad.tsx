import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  emoji: string;
  buttonText: string;
  href: string;
}

export const Card: React.FC<CardProps> = ({ title, emoji, buttonText, href }) => {
  return (
    <motion.a
      className="flex justify-center items-center no-underline cursor-pointer"
      href={href}
      whileHover={{
        scale: 1.08, // Slight zoom on hover
        rotate: 2,   // Small tilt effect
      }}
      whileTap={{
        scale: 0.95, // Compress slightly on tap
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
    >
      <motion.div
        className="text-white rounded-lg p-8 shadow-card flex flex-col justify-between items-start min-h-[400px] max-w-[300px] hover:bg-[#60a5fa]"
        whileHover={{ translateY: -7 }} // Slight upward motion on hover
        transition={{ duration: 0.3 }}
      >
        <button className="text-sm  border border-white px-4 py-2 rounded-full">
          {buttonText}
        </button>
        <h2 className="text-3xl font-bold mt-6">
          {title} {emoji}
        </h2>
      </motion.div>
    </motion.a>
  );
};
