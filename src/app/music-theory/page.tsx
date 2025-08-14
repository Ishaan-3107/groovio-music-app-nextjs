"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/Spotlight";

export default function MusicTheoryPage() {
  const router = useRouter();

  const sections = [
    {
      title: "Notes & Pitch",
      desc: "Music is built on notes — the individual sounds we hear. Each note has a pitch, determined by its frequency, which can be high (like a whistle) or low (like a bass drum). Understanding pitch helps you identify melodies and sing or play in tune.",
    },
    {
      title: "Scales & Keys",
      desc: "Scales are a sequence of notes arranged in a specific order, such as major (happy) or minor (sad). A key tells us the 'home' note of a song. Learning scales and keys gives you the roadmap to composing, improvising, and understanding why certain notes sound good together.",
    },
    {
      title: "Chords & Harmony",
      desc: "Chords are groups of notes played together, forming the backbone of harmony in music. Major chords feel bright, minor chords feel emotional, and diminished chords feel tense. Harmony supports the melody, adding richness and depth to a song.",
    },
    {
      title: "Rhythm & Time Signatures",
      desc: "Rhythm is the heartbeat of music — the way sounds are spaced over time. Time signatures (like 4/4 or 3/4) tell you how beats are grouped in each measure. Mastering rhythm helps you keep time, groove with others, and create compelling patterns.",
    },
    {
      title: "Intervals & Ear Training",
      desc: "An interval is the distance between two notes, measured in steps or semitones. Ear training teaches you to recognize intervals, chords, and rhythms just by listening — an essential skill for playing by ear, improvising, and improving overall musicianship.",
    },
  ];

  return (
    <main className="min-h-screen text-gray-900 dark:text-white mt-22 p-8 transition-colors duration-300">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue" />
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Music Theory
      </motion.h1>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Music theory is the language of music — the framework that explains why notes, rhythms, and harmonies sound the way they do. Whether you're a beginner or an experienced musician, mastering these concepts will take your playing and composing to the next level.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition"
          >
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{section.desc}</p>
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
