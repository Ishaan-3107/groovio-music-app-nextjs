import React from 'react';
import Link from 'next/link';
// Assuming you have components for forms, icons etc., or you can build them directly here.
// For example, a shared Button component:
// import { Button } from "@/components/ui/button";
// If you have an icon library setup (e.g., react-icons), import them
// import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black/[0.96] text-white pt-24 pb-16 antialiased"> {/* pt-24 to clear fixed navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our courses, partnership inquiries, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-zinc-900 p-8 md:p-10 rounded-xl shadow-2xl border border-zinc-800">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Inquiry about Music Production Course"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-y"
                  placeholder="Please describe your query in detail..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Other Contact Details Section */}
          <div className="flex flex-col space-y-8">
            {/* Direct Contact Info */}
            <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl border border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Direct Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center text-neutral-300">
                  {/* You'd replace this with an actual icon component like <FiMail /> */}
                  <span className="text-xl text-blue-400 mr-3">✉️</span> {/* Mail Icon */}
                  <a href="mailto:info@groovio.com" className="hover:text-white transition-colors">info@groovio.com</a>
                </div>
                <div className="flex items-center text-neutral-300">
                  {/* <FiPhone className="text-blue-400 text-xl mr-3" /> */}
                  <span className="text-xl text-blue-400 mr-3">📞</span> {/* Phone Icon */}
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center text-neutral-300">
                  {/* <FiMapPin className="text-blue-400 text-xl mr-3" /> */}
                  <span className="text-xl text-blue-400 mr-3">📍</span> {/* Location Icon */}
                  <span>123 Music Lane, Harmony City, MC 98765</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl border border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Connect With Us</h2>
              <div className="flex justify-center space-x-6">
                <Link href="#" className="text-neutral-300 hover:text-blue-400 transition-colors">
                  {/* <FiFacebook className="text-4xl" /> */}
                  <span className="text-4xl">📘</span> {/* Facebook Icon */}
                </Link>
                <Link href="#" className="text-neutral-300 hover:text-blue-400 transition-colors">
                  {/* <FiTwitter className="text-4xl" /> */}
                  <span className="text-4xl">🐦</span> {/* Twitter Icon */}
                </Link>
                <Link href="#" className="text-neutral-300 hover:text-blue-400 transition-colors">
                  {/* <FiInstagram className="text-4xl" /> */}
                  <span className="text-4xl">📸</span> {/* Instagram Icon */}
                </Link>
                {/* Add more social links as needed */}
              </div>
            </div>

            {/* Embedded Map */}
            <div className="bg-zinc-900 p-4 rounded-xl shadow-2xl border border-zinc-800 overflow-hidden">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Find Us on Map</h2>
              {/* Replace with your actual Google Maps embed or a map library component */}
              <div className="h-64 w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.280126780993!2d144.9620613153164!3d-37.81720847975193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ce2968390b%3A0x889c1d1a6e7608f5!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1628741234567!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}