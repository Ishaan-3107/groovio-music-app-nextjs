"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { WavyBackground } from "./ui/wavy-background";
function HeroSection() {
  return (
    <>
      {/* WavyBackground now acts as the primary container for the section */}
      {/* It will automatically handle its backgroundFill and waveColors based on the theme */}
      <WavyBackground className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="h-[100vh] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <div className="p-4 relative z-10 text-center w-full">
            <h1
              className="mt-20 md:mt-0 text-4xl md:text-7xl mb-10 font-bold bg-clip-text"
            >
              <span className="bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
                Master the art of music
              </span>
            </h1>
            <p className="mt-4 mb-10 font-normal text-base md:text-xl text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto">
              Dive into our comprehensive music courses and transform your
              musical journey today. Whether you're a beginner or looking to
              refine your skills, join us to unlock your true potential.
            </p>
            <div className="mt-4 ">
              <Link href={"/courses"}>
                <Button
                  borderRadius="1.2rem"
                  className="text-sm text-white hover:cursor-pointer hover:text-[15px] hover:bg-[#002739ff] transition-all duration-200"
                >
                  Explore courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
}

export default HeroSection;
