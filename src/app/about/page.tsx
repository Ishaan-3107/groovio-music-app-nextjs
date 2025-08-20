import React from 'react';
import Link from 'next/link';
// Assuming your Button component is theme-aware
import { Button } from "@/components/ui/button";
// You might use an image here, so ensure it's in your public folder and theme-aware if applicable
// import Image from 'next/image'; // If using Next.js Image component for optimization

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-38 pb-16 antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-20 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Our Passion, Your Harmony
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At Groovio, we believe that music is a universal language, a powerful tool for self-expression, and a lifelong journey. Our mission is to make high-quality music education accessible to everyone, everywhere.
          </p>
        </section>

        {/* Section 2: Our Philosophy / What Drives Us */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:mb-24">
          <div className="md:order-2">
            <img
              src="https://images.unsplash.com/photo-1542844985-d6ee1fc9b891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwbGVhcm5pbmclMjBtdXNpYyUyMHRvZ2V0aGVyfGVufDB8fDB8fHww" // Ensure this image exists in your public/images folder
              alt="People learning music together"
              className="rounded-xl shadow-lg w-full h-auto object-cover border border-border"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl text-center md:text-left font-bold mb-6">The Groovio Difference</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Born from a shared love for melodies and rhythms, Groovio was founded by a team of dedicated musicians and educators. We saw a gap in online music learning – a need for comprehensive, engaging, and truly personalized instruction that goes beyond basic tutorials.
            </p>
            <p className="text-lg text-muted-foreground">
              We've meticulously crafted our curriculum with expert instructors, ensuring every lesson resonates with your learning style. Our interactive platform fosters a vibrant global community where aspiring musicians can connect, collaborate, and grow.
            </p>
          </div>
        </section>

        {/* Section 3: Our Core Values (could be icons/cards) */}
        <section className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl font-bold mb-10">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-card p-8 rounded-xl hover:translate-y-[-6px] hover:shadow-2xl transition-all duration-200 shadow-md border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Expert Instruction</h3>
              <p className="text-muted-foreground">Learn from industry professionals and seasoned educators with proven teaching methodologies.</p>
            </div>
            <div className="bg-gray-100 dark:bg-card p-8 rounded-xl hover:translate-y-[-6px] hover:shadow-2xl transition-all duration-200 shadow-md border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Accessible Learning</h3>
              <p className="text-muted-foreground">High-quality music education, available anytime, anywhere, at your own pace.</p>
            </div>
            <div className="bg-gray-100 dark:bg-card p-8 rounded-xl hover:translate-y-[-6px] hover:shadow-2xl transition-all duration-200 shadow-md border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Thriving Community</h3>
              <p className="text-muted-foreground">Connect with fellow musicians, share progress, and collaborate in a supportive global network.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Vision / Future */}
        <section className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We envision a world where everyone can unlock their musical potential, regardless of their background or location. Groovio is continuously evolving, bringing new courses, innovative tools, and enriching experiences to foster a global symphony of talent.
          </p>
        </section>

        {/* Section 5: Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <Link href="/courses">
            <Button
              className="text-lg sm:p-6 border border-black dark:border-white text-black bg-white dark:bg-black dark:text-white hover:bg-black hover:text-white hover:text-[19px] dark:text-white/[0.8] dark:hover:bg-white dark:hover:text-black hover:cursor-pointer transition-all duration-200 ease-in-out"
            >
              Explore Our Courses
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}