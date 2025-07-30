"use client";

import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      
      <div className="text-center mb-8">
        <h1 className="text-teal-700 dark:text-teal-600 text-base tracking-wide font-semibold uppercase">
          Featured Courses
        </h1>
        <p className="text-3xl mt-4 antialiased font-bold sm:text-4xl text-gray-800 dark:text-white">
          Learn with the Best
        </p>
      </div>
      <div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:p-2 md:p-4 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-md overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 rounded-[21px] flex flex-col text-center items-center flex-grow">
                    <p className="text-lg sm:text-xl mb-4 font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </p>
                    <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover mb-4 hover:scale-110 hover:rounded-lg transition-all duration-200" />
                    </div>
                    
                    <p className="text-sm text-gray-700 dark:text-white/[0.7] flex-grow">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>
                      <Button
                        variant="ghost"
                        className="border border-black dark:border-white text-black dark:text-white shadow-xs mt-4 hover:bg-black/[0.8] dark:hover:bg-white dark:hover:text-black hover:text-white hover:text-[15px] hover:cursor-pointer transition-all duration-200 ease-in-out"
                      >
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link href="/courses">
          <Button
            variant="ghost"
            className="text-lg sm:p-6 text-gray-700 hover:bg-gray-200 hover:text-gray-900 hover:text-[19px] dark:text-white/[0.8] dark:hover:bg-blue-900/[0.4] dark:hover:text-white hover:cursor-pointer transition-all duration-200 ease-in-out"
          >
            View all courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
