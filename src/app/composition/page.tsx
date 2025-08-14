"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export default function CompositionPage() {
  const router = useRouter();

  const topics = [
    {
      title: "Melodic Development",
      desc: "Learn to create memorable melodies by using motifs, repetition, and variation. Explore how to balance predictability with surprise in your compositions.",
      icon: "🎼",
    },
    {
      title: "Advanced Chord Progressions",
      desc: "Move beyond simple triads into extended chords, borrowed chords, and chromatic harmony to add depth and color to your music.",
      icon: "🎹",
    },
    {
      title: "Counterpoint & Polyphony",
      desc: "Master the art of combining multiple independent melodies to create rich and interwoven textures, a technique used by classical and modern composers alike.",
      icon: "🎻",
    },
    {
      title: "Orchestration & Arrangement",
      desc: "Discover how to assign musical ideas to different instruments and arrange them for clarity, emotion, and impact.",
      icon: "🎺",
    },
    {
      title: "Dynamics & Expression",
      desc: "Use volume, articulation, and phrasing to breathe life into your compositions and connect emotionally with listeners.",
      icon: "🥁",
    },
    {
      title: "Modern Composition Techniques",
      desc: "Incorporate techniques like minimalism, serialism, and film scoring to expand your creative toolkit.",
      icon: "🎬",
    },
  ];

  return (
    <main className="min-h-screen text-gray-900 dark:text-white mt-22 p-8 transition-colors duration-300">
      {/* Background Spotlight */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="purple" />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        🎶 Advanced Composition
      </motion.h1>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Composition is where theory meets creativity. In this section, you’ll explore advanced techniques for crafting music that tells a story, evokes emotion, and leaves a lasting impression on your audience.
      </p>

      {/* Topic Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-4xl mb-3">{topic.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{topic.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {topic.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 border border-black dark:border-white bg-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-black dark:text-white hover:cursor-pointer rounded-lg font-medium transition-all duration-200"
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </button>
      </div>
    </main>
  );
}
