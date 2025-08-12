"use client";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { AnimatedTooltip } from "./ui/animated-tooltip";

function Instructors() {
  const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Sofia Navarro",
    designation: "Music Theory Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Liam O’Connor",
    designation: "Violin Maestro",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Priya Mehta",
    designation: "Electronic Music Producer",
    image:
      "https://images.unsplash.com/photo-1588367171393-c0f77a14faff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "Nikhil Dubey",
    designation: "Classical Music Composer",
    image: "https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww"
  }
];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center bg-white dark:bg-black">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-center mb-12 max-w-2xl text-gray-700 dark:text-white/[0.7]">
          Our instructors are passionate about music and dedicated to helping
          you achieve your musical goals. With years of experience and a love
          for teaching, they are here to guide you every step of the way.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </BackgroundLines>
    </div>
  );
}

export default Instructors;
