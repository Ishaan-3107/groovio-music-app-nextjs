"use client";
import React from "react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  loadingText,
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 focus:ring-[var(--ring)] shadow-sm hover:shadow-md",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/90 focus:ring-[var(--ring)] border border-[var(--border)]",
    ghost: "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] focus:ring-[var(--ring)]"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm", 
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        (isLoading || disabled) && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" showText={false} className="mr-2" />
          {loadingText || "Loading..."}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
