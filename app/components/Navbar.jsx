'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importing framer-motion
import DarkModeToggle from "./darkmodetoggle"; // import the DarkModeToggle component

export default function Navbar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="text-dark-white bg-red-bright p-4 flex items-center justify-between sticky top-0 z-40">
      <div className="hidden lg:flex items-center w-full">
        {/* Left-aligned section */}
        <Link href="/" className="flex items-center space-x-4 pl-8">
          <Image
            src="/Logo.png"
            alt="bouquet"
            width={18} // Set appropriate width
            height={50} // Set appropriate height
            className="h-auto"
          />
          <span className="font-nooks text-2xl">Andrea Larioza | Full Stack Dev + Designer</span>
        </Link>

        {/* Center-aligned section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Link href="/">
            <span className="font-nooksbold text-xl hover:text-gray-300 cursor-pointer">WORKS</span>
          </Link>
          <Link href="/about">
            <span className="font-nooksbold text-xl hover:text-gray-300 cursor-pointer">ABOUT</span>
          </Link>
          <Link href="/AndreaLariozaCV.pdf" target="_blank" rel="noopener noreferrer">
            <span className="font-nooksbold text-xl hover:text-gray-300 cursor-pointer">RESUME</span>
          </Link>
        </div>

        {/* Right-aligned section */}
        <div className="flex items-center ml-auto pr-8">
          <DarkModeToggle/>
          <Link href="/">
          
          </Link>
        
        </div>
      </div>

      {/* Hamburger Icon with Text (visible on mobile) */}
      <div className="lg:hidden flex items-center space-x-2">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Text next to the hamburger icon */}
        <Link href="/" className="text-white font-nooks text-xl">Andrea Larioza | Full Stack Dev + Designer</Link>
      </div>
      <div className='lg:hidden'>
        <DarkModeToggle
        />
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      <motion.div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-red-dark p-2`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4 pl-10"> {/* Added space between links */}
          <Link href="/" className="block text-dark-white font-nooksbold text-lg py-1 hover:text-gray-300">
            WORKS
          </Link>
          <Link href="/about" className="block text-dark-white font-nooksbold text-lg py-1 hover:text-gray-300">
            ABOUT
          </Link>
          <Link href="/" className="block text-dark-white font-nooksbold text-lg py-1 hover:text-gray-300">
            RESUME
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
