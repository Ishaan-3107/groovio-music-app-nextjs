"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export default function MusicTheoryPage() {
  const router = useRouter();

  const sections = [
  {
    title: "Notes & Pitch",
    desc: "Learn the basics of musical notes, pitch, and frequency. Build a strong foundation by identifying notes and developing accurate pitch perception.",
  },
  {
    title: "Scales & Key Signatures",
    desc: "Understand major, minor, and modal scales, and how key signatures shape the emotional color of music.",
  },
  {
    title: "Chords & Harmonic Theory",
    desc: "Explore chord building, harmonic progressions, and voice leading. Discover how harmony supports melody and musical expression.",
  },
  {
    title: "Rhythm & Meter",
    desc: "Master time signatures, beat subdivisions, and rhythmic patterns. Improve your timing, groove, and rhythmic accuracy.",
  },
  {
    title: "Intervals & Ear Training",
    desc: "Train your ear to recognize intervals, chords, and melodies. Enhance your listening skills for analysis, improvisation, and musicianship.",
  },
];


  return (
    <main className="min-h-screen text-gray-900 dark:text-white mt-22 md:mt-28 p-8 transition-colors duration-300">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="blue" />
      
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Music Theory
      </motion.h1>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Build a solid theoretical foundation that will enhance every aspect of your musical journey. Understanding these core concepts will improve your performance, composition, and overall musical comprehension.
      </p>

      {/* Sections Grid - 2 columns to differentiate from composition's 3 columns */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="h-2 w-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-6"></div>
            <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-indigo-300">{section.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{section.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Unique section for Music Theory - Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Theory Fundamentals</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Core Concepts:</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Note reading and staff notation</li>
                <li>• Scale patterns and construction</li>
                <li>• Chord symbols and progressions</li>
                <li>• Basic harmonic analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Practical Applications:</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Improved sight-reading abilities</li>
                <li>• Better improvisation skills</li>
                <li>• Enhanced composition techniques</li>
                <li>• Stronger ensemble playing</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

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