"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"; // Assuming these are correctly imported
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-4 py-3 bg-black/30 backdrop-blur-lg border-b border-white/20",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/groovio-logo.png"
            alt="Groovio Logo"
            className="h-8 w-auto sm:h-10 hover:scale-105 transition-transform duration-200 ease-in-out"
          />
        </Link>

        {/* Desktop Menu - Hidden on small screens */}
        <div className="hidden md:flex items-center">
          <Menu setActive={setActive}>
            <Link href={"/"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Our Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All Courses</HoveredLink>
                <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
                <HoveredLink href="/composition">
                  Advanced Composition
                </HoveredLink>
                <HoveredLink href="/song-writing">Song Writing</HoveredLink>
                <HoveredLink href="/music-production">
                  Music Production
                </HoveredLink>
              </div>
            </MenuItem>

            <Link href={"/contact"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact"
              ></MenuItem>
            </Link>

            <Link href={"/about"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="About"
              ></MenuItem>
            </Link>
          </Menu>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger Icon) - Visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" // X icon
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" // Hamburger icon
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay/Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed h-[35vh] inset-0 top-[3.5rem] bg-black/80 backdrop-blur-4xl z-40 flex flex-col items-center py-8 overflow-y-auto"
          onClick={toggleMobileMenu}
        >
          {/* Mobile Menu Items */}
          {/* Add a top padding inside the overlay itself to push content down from the top edge slightly */}
          <div className="w-full flex flex-col items-center space-y-8 pt-4"> {/* Added pt-4 and w-full */}
            <Link href={"/"} onClick={toggleMobileMenu}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
                className="text-3xl py-4"
              />
            </Link>

            <MenuItem setActive={setActive} active={active} item="Our Courses" className="text-3xl py-4">
              <div className="flex flex-col space-y-4 text-xl text-center mt-4">
                <HoveredLink href="/courses" onClick={toggleMobileMenu}>All Courses</HoveredLink>
                <HoveredLink href="/music-theory" onClick={toggleMobileMenu}>Basic Music Theory</HoveredLink>
                <HoveredLink href="/composition" onClick={toggleMobileMenu}>
                  Advanced Composition
                </HoveredLink>
                <HoveredLink href="/song-writing" onClick={toggleMobileMenu}>Song Writing</HoveredLink>
                <HoveredLink href="/music-production" onClick={toggleMobileMenu}>
                  Music Production
                </HoveredLink>
              </div>
            </MenuItem>

            <Link href={"/contact"} onClick={toggleMobileMenu}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact"
                className="text-3xl py-4"
              />
            </Link>

            <Link href={"/about"} onClick={toggleMobileMenu}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="About"
                className="text-3xl py-4"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;