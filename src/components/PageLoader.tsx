"use client";
import React from "react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "./LoadingSpinner";

interface PageLoaderProps {
  isLoading: boolean;
  className?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading, className }) => {
  if (!isLoading) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-[9999] flex items-center justify-center",
      "bg-[var(--background)]/80 backdrop-blur-sm",
      "transition-opacity duration-300",
      className
    )}>
      <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl">
        <LoadingSpinner size="xl" text="Loading..." />
        
        {/* Music wave animation */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 bg-[var(--primary)] rounded-full animate-pulse",
                "h-4 animate-bounce"
              )}
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "0.6s"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
