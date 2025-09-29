"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-xl font-bold">{`{Finsweet}`}</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About us
          </Link>
          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-gray-300">
            FAQ
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
          <Link
            href="/contact"
            className="ml-4 px-6 py-2 border rounded-full hover:bg-white hover:text-[#1b1c54] transition"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1b1c54]/90 px-6 pb-4 space-y-4">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/about" className="block">
            About us
          </Link>
          <Link href="/features" className="block">
            Features
          </Link>
          <Link href="/pricing" className="block">
            Pricing
          </Link>
          <Link href="/faq" className="block">
            FAQ
          </Link>
          <Link href="/blog" className="block">
            Blog
          </Link>
          <Link
            href="/contact"
            className="block text-center px-6 py-2 border rounded-full hover:bg-white hover:text-[#1b1c54] transition"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
