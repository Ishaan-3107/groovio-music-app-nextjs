"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export default function AdvancedCompositionPage() {
  const router = useRouter();

  const topics = [
    {
      title: "Counterpoint & Polyphony",
      desc: "Learn to weave multiple melodies together through species and invertible counterpoint, creating rich polyphonic textures.",
    },
    {
      title: "Orchestration Mastery",
      desc: "Study instrument ranges, timbres, and scoring techniques to bring your orchestral and ensemble compositions to life.",
    },
    {
      title: "Extended Harmony & Chromaticism",
      desc: "Explore extended chords, altered dominants, and modal interchange to craft sophisticated harmonic progressions.",
    },
    {
      title: "Large-Scale Form & Analysis",
      desc: "Understand sonata, rondo, and variation forms, and analyze masterworks to shape compelling large-scale structures.",
    },
    {
      title: "Contemporary Techniques",
      desc: "Experiment with twelve-tone, minimalism, spectral writing, and modern instrumental techniques to expand your style.",
    },
    {
      title: "Text Setting & Vocal Writing",
      desc: "Learn to set text with proper prosody, write idiomatically for voices, and create expressive vocal lines.",
    },
  ];

  return (
    <main className="min-h-screen text-gray-900 dark:text-white mt-22 p-8 transition-colors duration-300">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="purple"
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Advanced Composition
      </motion.h1>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Take your compositional craft to professional levels through advanced
        techniques and sophisticated musical thinking. These concepts will help
        you develop a mature compositional voice and create music of lasting
        artistic value.
      </p>

      {/* Topics Grid - Different layout from Music Theory */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="h-2 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"></div>
            <h2 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
              {topic.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {topic.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section - Unique to this page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">
            Prerequisites & Recommendations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Required Background:
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Solid understanding of basic music theory</li>
                <li>• Experience with four-part harmony</li>
                <li>• Familiarity with common musical forms</li>
                <li>• Basic composition experience</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                What You'll Achieve:
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Professional-level compositional skills</li>
                <li>• Understanding of advanced harmonic language</li>
                <li>• Ability to write for various ensembles</li>
                <li>• Development of personal artistic voice</li>
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
