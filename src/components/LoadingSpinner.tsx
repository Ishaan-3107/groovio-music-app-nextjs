"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className,
  showText = true,
  text = "Loading..."
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

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-3", className)}>
      {/* Music-themed spinning vinyl record */}
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer ring */}
        <div className={cn(
          "absolute inset-0 rounded-full border-2 border-[var(--primary)]/20",
          sizeClasses[size]
        )} />
        
        {/* Spinning vinyl */}
        <div className={cn(
          "absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--primary)] animate-spin",
          sizeClasses[size]
        )} />
        
        {/* Center dot (like vinyl record center) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--primary)] rounded-full" />
        
        {/* Inner grooves effect */}
        <div className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)]/30",
          size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-8 h-8"
        )} />
      </div>
      
      {showText && (
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
