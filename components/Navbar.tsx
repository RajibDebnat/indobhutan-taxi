"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white   sticky top-0 z-50 px-24 max-xl:px-12 max-lg:px-0   ">
      {/* Top bar removed since we're showing 24/7 in the main navbar */}

      {/* Main navbar */}
      <nav className="flex justify-between items-center px-4 py-3  max-lg:px-0">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">INDO-BHUTAN TRAVELS</div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-6 items-center text-gray-800 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="Blog">Blog</Link></li>
          <li><Link href="/travelpacages">Pacages</Link></li>
          <li><Link href="/car-rent">Car-Rent</Link></li>
        </ul>

        {/* 24/7 Badge */}
        <div className="hidden md:flex items-center gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
            24x7 Support
          </span>
          <Link href="tel:09004545000" className="text-blue-600 font-medium text-sm">
            090 4545 0000
          </Link>
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/travelpacages">Pacages</Link></li>
            <li><Link href="/car-rent">Car-rent</Link></li>
            <li className="flex items-center gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                24x7
              </span>
              <Link href="tel:09004545000" className="text-blue-600 font-medium text-sm">
                090 4545 0000
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
