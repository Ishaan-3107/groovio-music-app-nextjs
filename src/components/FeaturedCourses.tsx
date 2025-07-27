import courseData from "@/data/courses.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeaturedCourses() {
  return (
    <div className="bg-gray-900 py-10">
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
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                test
            </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link
          href="/courses"
        >
          <Button variant="ghost" className="hover:bg-blue-900/[0.4] hover:text-base hover:text-white hover:cursor-pointer transition-all-ease-in-out duration-200">View all courses</Button>
        </Link>
      </div>
    </div>
  );
}
