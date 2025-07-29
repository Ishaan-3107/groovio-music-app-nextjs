"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

function TestimonialCards() {
  const testimonials = [
    {
      quote:
        "This app reignited my passion for music after years away. The lessons are so intuitive, and I can finally play my favorite songs on the piano!",
      name: "Alicia Morgan",
      title: "Piano Enthusiast & Working Mom",
    },
    {
      quote:
        "I never thought I could learn guitar without a personal tutor, but this app made it possible. The instructors are amazing!",
      name: "Jay Patel",
      title: "College Student & Guitar Beginner",
    },
    {
      quote:
        "Thanks to this app, I passed my music theory exam with flying colors. The interactive quizzes made it so easy to understand the concepts.",
      name: "Sophie Li",
      title: "High School Music Student",
    },
    {
      quote:
        "I used to feel stuck in my vocal training, but the personalized feedback here helped me break through and hit notes I never imagined possible.",
      name: "Carlos Mendes",
      title: "Aspiring Vocalist",
    },
    {
      quote:
        "What sets this app apart is its supportive community. I’ve made friends from across the world who share the same love for music.",
      name: "Emma Johansson",
      title: "Choir Director & Community Leader",
    },
    {
      quote:
        "As a complete beginner, I found the courses incredibly approachable. Now I play the ukulele every weekend with my kids!",
      name: "Derrick Tan",
      title: "New Music Learner & Father of Two",
    },
    {
      quote:
        "I've tried many music apps before, but this is the only one that truly kept me engaged. The gamified progress tracking is brilliant!",
      name: "Maya Singh",
      title: "UX Designer & Music Hobbyist",
    },
    {
      quote:
        "The freedom to learn at my own pace is invaluable. I’ve gone from clueless to confident in just a few months.",
      name: "Oliver Chen",
      title: "Remote Worker & Weekend Drummer",
    },
    {
      quote:
        "As a professional musician, I use this app to keep my skills sharp. The content is top-notch and constantly updated.",
      name: "Riley Matthews",
      title: "Session Guitarist",
    },
    {
      quote:
        "Being able to submit my performances and get direct feedback changed everything. I feel like I have a real mentor.",
      name: "Fatima Al-Rashid",
      title: "Vocal Coach in Training",
    },
    {
      quote:
        "I love how the app blends fun with learning. My son and I both use it, and he’s more motivated than ever to practice.",
      name: "Tom Becker",
      title: "Parent & Music Lover",
    },
    {
      quote:
        "I joined just to learn basic keyboard skills, but now I’m composing my own music. This app unlocked a new part of me.",
      name: "Leila Haddad",
      title: "Creative Writer & Amateur Composer",
    },
  ];

  const [speed, setSpeed] = useState<"fast" | "normal" | "slow">("slow");

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed("fast"); // mobile screens
      } else {
        setSpeed("normal"); // default for larger screens
      }
    };

    updateSpeed(); // initial check
    window.addEventListener("resize", updateSpeed); // listen for screen resize

    return () => window.removeEventListener("resize", updateSpeed); // cleanup
  }, []); 

  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div>
      <h1 className="text-center text-3xl font-bold mb-6 z-20">
        Hear our Harmony: Voices of Success
      </h1>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed={speed}
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
