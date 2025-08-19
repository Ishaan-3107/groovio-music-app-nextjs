"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const { theme } = useTheme();

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const fadeColor = theme === "light" ? "oklch(1 0 0)" : "oklch(0 0 0)";
  const getColorFromName = (name: string) => {
    const colors = [
      "#f87171", // red-400
      "#fbbf24", // yellow-400
      "#34d399", // green-400
      "#60a5fa", // blue-400
      "#a78bfa", // purple-400
      "#f472b6", // pink-400
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        `[mask-image:radial-gradient(ellipse_at_center,transparent_60%,${fadeColor}_90%)]`,
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl px-8 py-6 md:w-[450px] hover:cursor-pointer"
            style={{
              backgroundColor: `var(--card)`,
              color: `var(--card-foreground)`,
              border: `1px solid var(--border)`,
            }}
            key={item.name + idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] rounded-2xl"
                style={{
                  background: `linear-gradient(90deg,rgb(131, 90, 255), #c084fc)`, // Using the dark theme's gradient
                  filter: `blur(${theme === "light" ? "4px" : "4px"})`,
                }}
              ></div>
              <span
                className="relative z-20 text-base leading-[1.6] font-normal"
                style={{ color: `var(--card-foreground)` }}
              >
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span
                    className="text-sm leading-[1.6] font-normal"
                    style={{ color: `var(--muted-foreground)` }}
                  >
                    <span
                      className="px-2 py-1 rounded-full me-3 text-white"
                      style={{ backgroundColor: getColorFromName(item.name) }}
                    >
                      {item.name[0]}
                    </span>
                    {item.name}
                  </span>
                  <span
                    className="text-sm leading-[1.6] font-normal"
                    style={{ color: `var(--muted-foreground)` }}
                  >
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
