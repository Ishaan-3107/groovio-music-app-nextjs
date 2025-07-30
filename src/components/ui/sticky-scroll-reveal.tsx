"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const { theme } = useTheme();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const lightBackgroundColor = "#ffffff"; // White for light theme
  const darkBackgroundColor = "#000000"; // Black for dark theme
  const effectiveBackgroundColor = theme === 'light' ? lightBackgroundColor : darkBackgroundColor;

  const lightLinearGradients = [
    "linear-gradient(to bottom right, #a5f3fc, #67e8f9)",
    "linear-gradient(to bottom right, #fbcfe8, #a78bfa)",
    "linear-gradient(to bottom right, #fed7aa, #fcd34d)",
  ];

  const darkLinearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const effectiveLinearGradients = theme === 'light' ? lightLinearGradients : darkLinearGradients;

  const [backgroundGradient, setBackgroundGradient] = useState(
    effectiveLinearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(effectiveLinearGradients[activeCard % effectiveLinearGradients.length]);
  }, [activeCard, theme, effectiveLinearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: effectiveBackgroundColor,
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 text-center sm:text-left"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : (index > activeCard ? 0.3 : 1),
                }}
                className="text-2xl font-bold text-gray-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : (index > activeCard ? 0.3 : 1),
                }}
                className="text-lg mt-10 max-w-sm text-gray-700 dark:text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-85 w-120 overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].image && (
          <img
            src={content[activeCard].image}
            alt={content[activeCard].title || "Content Image"}
            className="h-full w-full object-cover rounded-md"
          />
        )}
        {!content[activeCard].image && content[activeCard].content}
      </div>
    </motion.div>
  );
};