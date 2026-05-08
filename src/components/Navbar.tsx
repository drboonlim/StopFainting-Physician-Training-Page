"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/about-pots", label: "About POTS" },
  { href: "/diagnosis", label: "Diagnosis" },
  { href: "/management", label: "Management" },
  { href: "/training", label: "Physician Training" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Refer a Patient" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-oxford sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-cambridge rounded-lg p-1.5">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none">
                StopFainting
              </span>
              <span className="block text-cambridge text-xs font-medium leading-none">
                Dr Boon Lim
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.label === "Refer a Patient" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-2 bg-cambridge text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cambridge-dark transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-oxford-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-oxford-dark border-t border-oxford-light">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.label === "Refer a Patient"
                    ? "bg-cambridge text-white"
                    : "text-gray-300 hover:text-white hover:bg-oxford-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
