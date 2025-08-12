"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/[0.96] pt-33 text-center text-black dark:text-white">
      <h1 className="text-2xl text-center md:text-3xl font-bold mb-3">
        All Courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <CardContainer className="m-4 ms-10">
              <Link href={`/courses/${course.slug}`}>
                <CardBody className="bg-zinc-200 dark:bg-zinc-900 border border-black/[0.1 dark:border-white/[0.1] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
                  <CardItem className="text-xl font-semibold mb-4">
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    className="text-left text-gray-700 dark:text-white/[0.7] mb-4 overflow-hidden"
                    style={{ minHeight: "80px", maxHeight: "80px" }}
                  >
                    {course.description}
                  </CardItem>
                  <div className="w-full h-40 rounded-lg mb-4 overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
                    />
                    <span className="absolute top-2 right-3 bg-gray-600/[0.7] text-sm rounded-xl px-2 py-1 text-white z-100"><i className="fa-regular fa-clock"></i>&nbsp;{course.duration}h</span>
                  </div>
                  <CardItem className="flex items-center justify-between w-full text-lg">
                    <div>
                      <span className="font-bold text-xl">${course.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-star text-base text-[#EAC60F] dark:text-[#FFD43B]"></i>
                      <span className="text-base text-black/[0.7] dark:text-white/[0.7]">
                        {course.rating}
                      </span>
                    </div>
                  </CardItem>
                  <CardItem className="mt-3 flex justify-between items-center w-full text-black/[0.7] dark:text-white/[0.7]">
                    <span>
                      <span className="bg-purple-400 border h-8 w-8 rounded-full inline-flex items-center justify-center">
                        {course.instructor[0]} {/* Initial of the instructor */}
                      </span>
                      &nbsp;&nbsp;{course.instructor}
                    </span>

                    <span className={`p-2 rounded-lg ${course.difficulty === "Beginner" ? "text-green-600 dark:text-green-400" : course.difficulty === "Intermediate" ? "text-yellow-600 dark:text-yellow-400" : course.difficulty === "Advanced" ? "text-red-500 dark:text-red-400" : ""}`}>{course.difficulty}</span>
                  </CardItem>
                </CardBody>
              </Link>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
