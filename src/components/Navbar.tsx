"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"; // Assuming these are correctly imported
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-4 py-3 backdrop-blur-sm dark:backdrop-blur-lg border-b",
        "bg-[var(--navbar-bg)] border-[var(--navbar-border)] text-[var(--navbar-text)]",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/groovio_gradient.png"
            alt="Groovio Logo"
            className="h-9 w-auto sm:h-18 hover:scale-105 transition-transform duration-200 ease-in-out"
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
                <HoveredLink href={"/courses"}>All Courses</HoveredLink>
                <HoveredLink href="/music-theory">
                  Basic Music Theory
                </HoveredLink>
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
          <button
            onClick={toggleTheme}
            className="relative ml-4 p-2 rounded-full hover:cursor-pointer transition-colors duration-200
             bg-[var(--theme-button-bg)] dark:bg-white/[0.1] text-[var(--theme-button-text)] hover:bg-[var(--theme-button-hover-bg)] dark:hover:bg-white/[0.2] focus:ring-[var(--theme-button-ring)]
             group"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              // <i className="fas fa-sun w-5 h-5"></i>
              <img src="/sun-white.png" alt="Light Mode Icon" className="w-5 h-5" />
            ) : (
              <i className="fas fa-moon w-5 h-5"></i>
            )}

            {/* Tooltip Label */}
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 mb-2 mt-1 px-3 py-3 rounded-lg
               text-xs text-black dark:text-white bg-gray-200 dark:bg-gray-800 opacity-0
               group-hover:opacity-100 transition-opacity duration-300
               whitespace-nowrap"
            >
              {theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger Icon) - Visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 mr-2
                       bg-[var(--theme-button-bg)] text-[var(--theme-button-text)] hover:bg-[var(--theme-button-hover-bg)] focus:ring-[var(--theme-button-ring)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun w-5 h-5"></i>
            ) : (
              <i className="fas fa-moon w-5 h-5"></i>
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="text-black dark:text-white focus:outline-none"
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
          className="md:hidden fixed h-[35vh] inset-0 top-[3.5rem] bg-white/90 dark:bg-black/90 backdrop-blur-4xl z-40 flex flex-col items-center py-8 overflow-y-auto"
          onClick={toggleMobileMenu}
        >
          {/* Mobile Menu Items */}
          {/* Add a top padding inside the overlay itself to push content down from the top edge slightly */}
          <div className="w-full flex flex-col items-center space-y-8 pt-4">
            {" "}
            {/* Added pt-4 and w-full */}
            <Link href={"/"} onClick={toggleMobileMenu}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
                className="text-base"
              />
            </Link>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Our Courses"
              className="text-base"
            >
              <div className="flex flex-col space-y-4 text-base text-center mt-4">
                <HoveredLink href="/courses" onClick={toggleMobileMenu}>
                  All Courses
                </HoveredLink>
                <HoveredLink href="/music-theory" onClick={toggleMobileMenu}>
                  Basic Music Theory
                </HoveredLink>
                <HoveredLink href="/composition" onClick={toggleMobileMenu}>
                  Advanced Composition
                </HoveredLink>
                <HoveredLink href="/song-writing" onClick={toggleMobileMenu}>
                  Song Writing
                </HoveredLink>
                <HoveredLink
                  href="/music-production"
                  onClick={toggleMobileMenu}
                >
                  Music Production
                </HoveredLink>
              </div>
            </MenuItem>
            <Link href={"/contact"} onClick={toggleMobileMenu}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact"
                className="text-base"
              />
            </Link>
            <Link href={"/about"} onClick={toggleMobileMenu}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="About"
                className="text-base"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
