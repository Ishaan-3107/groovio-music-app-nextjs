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
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-teal-600 text-base tracking-wide font-semibold uppercase">
          Featured Courses
        </h1>
        <p className="text-3xl mt-4 antialiased font-bold sm:text-4xl">
          Learn with the Best
        </p>
      </div>
      <div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:p-2 md:p-4 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-md overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 bg-zinc-900 rounded-[21px] flex flex-col text-center items-center flex-grow">
                    <p className="text-lg sm:text-xl mb-4 font-semibold">
                      {course.title}
                    </p>
                    <p className="text-sm text-white/[0.7] flex-grow">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>
                      <Button
                        variant="ghost"
                        className="bg-primary text-base text-primary-foreground shadow-xs mt-4 hover:bg-white/[0.06] hover:text-white hover:cursor-pointer transition-all-ease-in-out duration-200"
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
            className="text-lg sm:p-6 hover:bg-blue-900/[0.4] hover:text-white hover:cursor-pointer transition-all-ease-in-out duration-200"
          >
            View all courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
