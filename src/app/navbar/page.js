"use client";
import React, { useState } from "react";
import Image from "next/image"; // Jika menggunakan Next.js
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#d7a98c] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/ubi.png" // Pastikan path ke gambar benar
            alt="Logo"
            width={50} // Sesuaikan ukuran logo sesuai kebutuhan
            height={50} // Sesuaikan ukuran logo sesuai kebutuhan
            className="mr-2"
          />
          <span className="text-white text-2xl font-display">Kang Ubi</span>
        </div>
        <button className="text-white lg:hidden" onClick={toggleNavbar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          } absolute lg:static bg-[#d7a98c] lg:bg-transparent lg:flex-row lg:flex lg:items-center lg:w-auto lg:space-x-4 top-full left-0 w-full lg:w-auto mt-2 lg:mt-0 z-50`}
        >
          <Link
            href="#home"
            className="text-white px-4 py-2 hover:bg-brown-700"
          >
            Home
          </Link>
          <Link
            href="#menu"
            className="text-white px-4 py-2 hover:bg-[#8f6246]"
          >
            Menu
          </Link>
          <a
            href="https://wa.me/+6285776130245?text=Hallo%20Kang%20Ubi"
            className="text-white px-4 py-2 hover:bg-[#8f6246] border border-white rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
