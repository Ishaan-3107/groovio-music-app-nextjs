"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { usePageLoader } from "@/hooks/usePageLoader";
import PageLoader from "./PageLoader";

interface LoadingContextType {
  isLoading: boolean;
  isUnresponsive: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const { isLoading, isUnresponsive, showLoader, hideLoader } = usePageLoader();

  return (
    <LoadingContext.Provider value={{ isLoading, isUnresponsive, showLoader, hideLoader }}>
      {children}
      <PageLoader isLoading={isLoading || isUnresponsive} />
    </LoadingContext.Provider>
  );
};
