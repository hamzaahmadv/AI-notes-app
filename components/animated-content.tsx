"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedContentProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonHref: string;
}

export default function AnimatedContent({ 
  heading,
  subheading,
  buttonText,
  buttonHref
}: AnimatedContentProps) {
  return (
    <motion.div 
      className="relative flex flex-col gap-4 items-center justify-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeInOut"
      }}
    >
      <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        {heading}
      </h1>
      <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        {subheading}
      </p>
      <Link href={buttonHref}>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          {buttonText}
        </button>
      </Link>
    </motion.div>
  );
} 