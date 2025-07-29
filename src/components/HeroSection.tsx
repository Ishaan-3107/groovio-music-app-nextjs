"use client";

import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { HeroHighlight } from "./ui/hero-highlight";
import { motion } from "motion/react";
import { Button } from "./ui/moving-border";
import { WavyBackground } from "./ui/wavy-background";
function HeroSection() {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="h-[100vh] md:h-[40 rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md: py-0">
          <div className="p-4 relative z-10 text-center w-full">
            <h1 className="mt-20 md: mt-0 text-4xl md: text-7xl mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Master the art of music
            </h1>
            <p className="mt-4 mb-10 font-normal text-base md:text-xl text-neutral-300 max-w-lg mx-auto">
              Dive into our comprehensive music courses and transform your
              musical journey today. Whether you're a beginner or looking to
              refine your skills, join us to unlock your true potential.
            </p>
            <div className="mt-4 ">
              <Link href={"/courses"}>
                <Button
                  borderRadius="1.2rem"
                  className="text-sm hover:text-white/[0.8] hover:bg-[linear-gradient(to_right,#002739ff,#091b23ff)] hover:text-[15px] hover:cursor-pointer transition-all duration-200 ease-in-out"
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
