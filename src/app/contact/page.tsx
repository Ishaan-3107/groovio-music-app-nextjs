"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/[0.96] text-white pt-38 pb-16 antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-400 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            courses, partnership inquiries, or just want to say hello, feel free
            to reach out.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-zinc-100 dark:bg-zinc-900 p-8 md:p-10 rounded-xl shadow-2xl border border-black/20 dark:border-zinc-800 hover:translate-y-[-5px] transition-transform duration-200">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Inquiry about Music Production Course"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Please describe your query in detail..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Other Contact Details Section */}
          <div className="flex flex-col space-y-8">
            {/* Direct Contact Info */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-xl shadow-2xl border border-black/20 dark:border-zinc-800 hover:translate-y-[-5px] transition-transform duration-200">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
                Direct Contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-neutral-900 dark:text-neutral-300">
                  <span className="text-xl text-black/[0.7] dark:text-white/[0.4] mr-3">
                    <i className="fa-solid fa-envelope"></i>
                  </span>{" "}
                  {/* Mail Icon */}
                  <p>info@groovio.com</p>
                </div>
                <div className="flex items-center text-neutral-900 dark:text-neutral-300">
                  <span className="text-xl text-black/[0.7] dark:text-white/[0.4] mr-3">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <p>+91 (123) 456-7890</p>
                </div>
                <div className="flex items-center text-neutral-900 dark:text-neutral-300">
                  <span className="text-xl text-black/[0.7] dark:text-white/[0.4] mr-3">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-xl shadow-2xl border border-black/20 dark:border-zinc-800 hover:translate-y-[-5px] transition-transform duration-200">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
                Connect With Us
              </h2>
              <div className="flex justify-center space-x-6">
                <Link
                  href="#"
                  className="text-neutral-900 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                >
                  <span className="text-4xl">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-neutral-900 dark:text-neutral-300 hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                >
                  <span className="text-4xl">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-neutral-900 dark:text-neutral-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                >
                  <span className="text-4xl">
                    <i className="fa-brands fa-x-twitter"></i>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-neutral-900 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                >
                  <span className="text-4xl">
                    <i className="fa-brands fa-youtube"></i>
                  </span>
                </Link>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl shadow-2xl border border-black/20 dark:border-zinc-800 overflow-hidden hover:translate-y-[-5px] transition-transform duration-200">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">
                Find Us on Map
              </h2>
              {/* Replace with your actual Google Maps embed or a map library component */}
              <div className="h-64 w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14010.563442547437!2d77.210031!3d28.6304207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722339000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
