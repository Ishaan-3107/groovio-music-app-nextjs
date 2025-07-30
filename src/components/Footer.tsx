import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900/[0.2] text-gray-400 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-8">
        <div>
          <h1 className="text-black dark:text-white text-xl">About Us</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            GROOVIO is an online music learning platform that empowers musicians
            of all levels through expert-led courses, flexible learning, and a
            supportive global community. Start your musical journey today!
          </p>
        </div>
        <div>
          <h1 className="text-black dark:text-white text-xl">Quick Links</h1>
          <div className="flex flex-col mt-2 space-y-2">
            <span>
              <Link
                href={"/"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </span>
            <span>
              <Link
                href={"/about"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </span>

            <span>
              <Link
                href={"/courses"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </span>

            <span>
              <Link
                href={"/contact"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-black dark:text-white text-xl">Follow Us</h1>
          <div className="flex mt-2 space-x-3 gap-2 text-xl sm:text-2xl">
            <span>
              <Link
                href={"/"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </span>
            <span>
              <Link
                href={"/"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </span>
            <span>
              <Link
                href={"/"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </span>
            <span>
              <Link
                href={"/"}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-black dark:text-white text-xl mb-2">Contact Us</h1>
          <div>
            <span className="text-gray-600 dark:text-gray-400">
              Have questions or need support? Reach out to us anytime!
            </span>
            <p className="text-gray-600 dark:text-gray-400 mt-2">New Delhi, India</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Delhi-110001</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Email: info@groovio.com</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Phone: +91 123 456 7890</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 pt-4">
        &copy; {new Date().getFullYear()} Groovio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
