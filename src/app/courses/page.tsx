"use client";

import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/[0.96] pt-33 text-center text-black dark:text-white">
      <h1 className='text-2xl md:text-3xl font-bold mb-8'>All Courses ({courseData.courses.length})</h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (
          <CardContainer key={course.id} className="m-4">
            <CardBody className="bg-gray-100 dark:bg-zinc-900 border border-black/[0.1] dark:border-white/[0.1] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"> {/* Add flex-col justify-between and h-full */}
              <CardItem className="text-xl font-semibold mb-4">{course.title}</CardItem>
              <CardItem
                as="p"
                className="text-left text-gray-700 dark:text-white/[0.7] mb-4 overflow-hidden"
                style={{ minHeight: '80px', maxHeight: '80px' }}
              >
                {course.description}
              </CardItem>
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
                />
              </div>
              <CardItem className="text-lg">
                Price: <span className='font-bold'>${course.price}</span>
              </CardItem>
              <CardItem as="a" href={`/courses/${course.slug}`} className="text-teal-700 dark:text-teal-600 hover:underline mt-auto">
                <Button
                        variant="ghost"
                        className="border border-black dark:border-white text-black dark:text-white shadow-xs mt-4 hover:bg-black/[0.8] dark:hover:bg-white dark:hover:text-black hover:text-white hover:text-[15px] hover:cursor-pointer transition-all duration-200 ease-in-out"
                      >
                        Learn more
                      </Button>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}