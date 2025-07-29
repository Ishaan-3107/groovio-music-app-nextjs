import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-8">
      <div>
        <h1 className="text-white text-xl">About Us</h1>
        <p className="text-gray-400 mt-2">
          GROOVIO is an online music learning platform that empowers musicians
          of all levels through expert-led courses, flexible learning, and a
          supportive global community. Start your musical journey today!
        </p>
      </div>
      <div>
        <h1 className="text-white text-xl">Quick Links</h1>
        <div className="flex flex-col mt-2 space-y-2">
          <span>
            <Link
              href={"/"}
              className="inline-block text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              href={"/about"}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
          </span>

          <span>
            <Link
              href={"/courses"}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Courses
            </Link>
          </span>

          <span>
            <Link
              href={"/contact"}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl">Follow Us</h1>
        <div className="flex flex-col mt-2 space-y-2">
          <span>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
          </span>
          <span>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </span>
          <span>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl">Contact Us</h1>
        <div>
          <span className="text-gray-400 mt-2">
            Have questions or need support? Reach out to us anytime!
          </span>
          <br />
          New Delhi, India
          <br />
          Delhi 110001
          <br />
          Email: info@groovio.com
          <br />
          Phone: +91 123 456 7890
        </div>
      </div>
    </div>
  );
}

export default Footer;
