"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { LoaderOne, LoaderTwo, LoaderThree, LoaderFour, LoaderFive } from "./ui/loader";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  text?: string;
  variant?: "simple" | "compact" | "svg" | "glitch" | "shimmer";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className,
  showText = true,
  text = "Loading...",
  variant = "simple"
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg", 
    xl: "text-xl"
  };

  const renderAceternityLoader = () => {
    switch (variant) {
      case "simple":
        return <LoaderOne />;
      case "compact":
        return <LoaderTwo />;
      case "svg":
        return <LoaderThree />;
      case "glitch":
        return <LoaderFour text={text} />;
      case "shimmer":
        return <LoaderFive text={text} />;
      default:
        return <LoaderOne />;
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-3", className)}>
      {renderAceternityLoader()}
      {showText && variant !== "glitch" && variant !== "shimmer" && (
        <p className={cn(
          "text-[var(--muted-foreground)] font-medium animate-pulse",
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
