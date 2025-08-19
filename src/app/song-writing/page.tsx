"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export default function SongwritingPage() {
  const router = useRouter();

  const sections = [
    {
      title: "Lyrics & Storytelling",
      desc: "Write lyrics that tell vivid stories and convey emotions using imagery, metaphor, and narrative.",
    },
    {
      title: "Melody Composition",
      desc: "Craft memorable melodies with strong contour, phrasing, and hooks that stick with listeners.",
    },
    {
      title: "Song Architecture",
      desc: "Explore verse-chorus and experimental forms to build tension, release, and engagement.",
    },
    {
      title: "Harmonic Foundations",
      desc: "Use chord progressions and harmony to enhance melodies and reinforce emotional impact.",
    },
    {
      title: "Creating Memorable Hooks",
      desc: "Design powerful hooks and choruses that capture attention and leave a lasting impression.",
    },
    {
      title: "Revision & Refinement",
      desc: "Polish songs through editing, refining melodies, and perfecting arrangements.",
    },
  ];

  return (
    <main className="min-h-screen text-gray-900 dark:text-white mt-22 p-8 transition-colors duration-300">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="green"
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Songwriting
      </motion.h1>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Transform your musical ideas into compelling songs that connect with
        audiences. Learn the essential craft of combining melody, harmony, and
        lyrics to create powerful musical narratives that stand the test of
        time.
      </p>

      {/* Sections Grid - Similar layout to Advanced Composition but with different styling */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="h-2 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>
            <h2 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
              {section.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {section.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Unique section for Songwriting - Creative Process Tips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
            Songwriting Essentials
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Creative Foundations:
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Start with emotion or story concept</li>
                <li>• Develop strong melodic motifs</li>
                <li>• Use chord progressions purposefully</li>
                <li>• Focus on relatable themes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Professional Skills:
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Collaborate effectively with others</li>
                <li>• Understand commercial song structures</li>
                <li>• Develop your unique artistic voice</li>
                <li>• Learn effective revision techniques</li>
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
