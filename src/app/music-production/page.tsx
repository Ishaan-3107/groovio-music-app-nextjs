"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export default function MusicProductionPage() {
  const router = useRouter();

  const sections = [
    {
      title: "DAW Fundamentals",
      desc: "Learn the essentials of digital audio workstations: recording, MIDI, and workflow basics.",
    },
    {
      title: "Recording Techniques",
      desc: "Explore microphone types, placement, and strategies for capturing clean, pro-level audio.",
    },
    {
      title: "Mixing & EQ",
      desc: "Balance tracks with volume, panning, and EQ. Shape frequencies for polished mixes.",
    },
    {
      title: "Sound Design",
      desc: "Dive into synthesis, sampling, and creative sound manipulation to craft unique tones.",
    },
    {
      title: "Effects & Processing",
      desc: "Use reverb, delay, and compression effectively to add depth and character to your sound.",
    },
    {
      title: "Mastering",
      desc: "Finalize tracks with loudness, stereo balance, and prepare music for release platforms.",
    },
    {
      title: "Beat Making",
      desc: "Program drums, grooves, and rhythmic patterns across genres using samples and MIDI.",
    },
    {
      title: "Arrangement",
      desc: "Structure songs with dynamic builds, transitions, and engaging layouts.",
    },
  ];

  return (
    <main className="min-h-screen text-gray-900 dark:text-white mt-22 md:mt-28 p-8 transition-colors duration-300">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="orange" />
      
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Music Production
      </motion.h1>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Turn your ideas into professional tracks with essential tools, techniques, and creative workflows used by industry producers.
      </p>

      {/* Sections Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.05 }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
          >
            <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-300">{section.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{section.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Production Essentials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-orange-800 dark:text-orange-300">Production Essentials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Skills</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• Recording & editing</li>
                <li>• Mixing workflows</li>
                <li>• Plugin routing</li>
                <li>• MIDI programming</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Creative Process</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• Sound palette design</li>
                <li>• Arrangement flow</li>
                <li>• Genre adaptation</li>
                <li>• Collaboration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Industry Standards</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• Streaming optimization</li>
                <li>• File formats</li>
                <li>• Release prep</li>
                <li>• Client workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 border border-black dark:border-white bg-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white hover:cursor-pointer dark:hover:text-black text-black dark:text-white rounded-lg font-medium transition-all duration-200"
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </button>
      </div>
    </main>
  );
}
