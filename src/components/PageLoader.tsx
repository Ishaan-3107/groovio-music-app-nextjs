"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { LoaderOne } from "./ui/loader";

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
        <LoaderOne />
        <p className="text-[var(--muted-foreground)] font-medium text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
