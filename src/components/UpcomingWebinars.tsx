import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function UpcomingWebinars() {
  const webinars = [
    {
      title: "Mastering the Art of Vocal Performance",
      description:
        "Join award-winning vocalist Emma Rivera for an in-depth live session on vocal techniques, breath control, and performance tips for both beginners and advanced singers.",
    },
    {
      title: "Guitar Essentials: Chords, Rhythm & Expression",
      description:
        "In this interactive webinar, guitarist Leo Bennett will break down essential guitar skills, help you improve your rhythm, and explore expressive playing techniques.",
    },
    {
      title: "Songwriting Workshop: From Idea to Hit",
      description:
        "Learn how to turn your musical ideas into complete songs with guidance from professional songwriter Maya Chen. Covers structure, lyrics, and melody creation.",
    },
    {
      title: "Demystifying Music Theory for Creatives",
      description:
        "Perfect for self-taught musicians, this webinar with music educator Dr. James Patel makes theory approachable and shows how to apply it creatively in your music.",
    },
    {
      title: "Live Music Production with Ableton Live",
      description:
        "Producer and DJ Chris Tan walks you through live music production using Ableton, including beat making, live effects, and mixing basics.",
    },
    {
      title: "Building Confidence on Stage",
      description:
        "Overcome stage fright and improve your live performance presence with techniques from theater and music coach Alisha Gomez. Open Q&A at the end.",
    },
  ].map((w) => ({
    ...w,
    link: `/webinars/${w.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")}`, // makes a clean URL slug
  }));

  return (
    <div className="p-12 bg-gray-200 dark:bg-gray-900">
      <div className="text-center p-4">
        <h1 className="text-teal-700 dark:text-teal-600 text-base tracking-wide font-semibold uppercase">
          Featured Webinars
        </h1>
        <p className="text-3xl text-gray-800 dark:text-white mt-4 antialiased font-bold sm:text-4xl">
          Enhance your Musical Journey
        </p>
      </div>
      <HoverEffect items={webinars} />
      <div className="text-center mt-6">
        <Link href="/webinars">
          <Button
            variant="ghost"
            className="text-lg sm:p-6 text-gray-700 hover:bg-gray-300 hover:text-gray-900 hover:text-[19px] dark:text-white/[0.8] dark:hover:bg-blue-900/[0.4] dark:hover:text-white hover:cursor-pointer transition-all duration-200 ease-in-out"
          >
            View all webinars
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
