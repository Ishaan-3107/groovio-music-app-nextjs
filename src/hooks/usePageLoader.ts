"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUnresponsive, setIsUnresponsive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let unresponsiveTimer: NodeJS.Timeout;

    const handleStart = () => {
      setIsLoading(true);
      setIsUnresponsive(false);
      
      // Set unresponsive state if loading takes too long
      unresponsiveTimer = setTimeout(() => {
        setIsUnresponsive(true);
      }, 3000); // 3 seconds
    };

    const handleComplete = () => {
      setIsLoading(false);
      setIsUnresponsive(false);
      clearTimeout(unresponsiveTimer);
    };

    // Listen for link clicks to trigger loading
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && !link.href.startsWith('#') && !link.target) {
        const url = new URL(link.href);
        if (url.pathname !== pathname && url.origin === window.location.origin) {
          handleStart();
          // Auto-hide after a reasonable time
          setTimeout(handleComplete, 1000);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      clearTimeout(unresponsiveTimer);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [pathname]);

  const showLoader = () => {
    setIsLoading(true);
    setIsUnresponsive(false);
  };

  const hideLoader = () => {
    setIsLoading(false);
    setIsUnresponsive(false);
  };

  return {
    isLoading,
    isUnresponsive,
    showLoader,
    hideLoader
  };
};
