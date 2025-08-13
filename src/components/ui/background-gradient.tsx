import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      {/* Blurred glow layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "150% 150%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-lg transition duration-500 will-change-transform",
          // 🎨 Pink + Blue gradient shades
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff9ec4,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8ec5ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff6ec7,transparent),radial-gradient(circle_farthest-side_at_0_0,#6eaaff,#141316)]"
        )}
      />
      {/* Solid gradient layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "150% 150%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          // 🎨 Same pink + blue combo for solid layer
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff9ec4,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8ec5ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff6ec7,transparent),radial-gradient(circle_farthest-side_at_0_0,#6eaaff,#141316)]"
        )}
      />

      {/* Inner content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
