"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white  z-50 px-24 max-xl:px-12 max-lg:px-0   ">
      {/* Top bar removed since we're showing 24/7 in the main navbar */}

      {/* Main navbar */}
      <nav className="flex justify-between items-center px-4 py-3  max-lg:px-0">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">INDO-BHUTAN TAXI </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-6 items-center text-gray-800 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* 24/7 Badge */}
        <div className="hidden md:flex items-center gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
            24x7 Support
          </span>
          <a href="tel:09004545000" className="text-blue-600 font-medium text-sm">
            090 4545 0000
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 px-4 py-3 text-gray-800 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li className="flex items-center gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                24x7
              </span>
              <a href="tel:09004545000" className="text-blue-600 font-medium text-sm">
                090 4545 0000
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
