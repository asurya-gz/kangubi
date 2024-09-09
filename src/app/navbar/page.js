"use client";
import React, { useState } from "react";
import Image from "next/image"; // Jika menggunakan Next.js
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Sidebar hanya muncul di mode mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#f8f4f1] shadow-lg transform lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ zIndex: 60 }} // Z-index untuk sidebar
      >
        <button
          className="absolute top-4 right-4 text-[#333]"
          onClick={toggleSidebar}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col mt-12">
          <Link
            href="#home"
            className="text-[#333] px-4 py-2 hover:bg-[#e2d8d0] block"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="#menu"
            className="text-[#333] px-4 py-2 hover:bg-[#e2d8d0] block"
            onClick={toggleSidebar}
          >
            Menu
          </Link>
          <Link
            href="/nonmakanan"
            className="text-[#333] px-4 py-2 hover:bg-[#e2d8d0] block"
            onClick={toggleSidebar}
          >
            Non-Makanan
          </Link>
          {/* Dropdown Contact & Survey untuk Mobile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-[#333] px-4 py-2 hover:bg-[#e2d8d0] block border border-[#333] rounded-full text-center"
            >
              Contact & Survey
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                <a
                  href="https://wa.me/+6285776130245?text=Hallo%20Kang%20Ubi"
                  className="block px-4 py-2 text-[#333] hover:bg-[#e2d8d0] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleSidebar}
                >
                  Contact
                </a>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe3RGEuAqJ51_wBIMQTDd9n2CoaOz2AdzqRgko379rFi8NT8g/viewform?usp=sf_link"
                  className="block px-4 py-2 text-[#333] hover:bg-[#e2d8d0] hover:text-white"
                  onClick={toggleSidebar}
                >
                  Survey
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

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
          {/* Menu di desktop */}
          <div className="hidden lg:flex space-x-8 font-display text-lg">
            <Link href="#home" className="text-white hover:text-[#e2d8d0] px-4">
              Home
            </Link>
            <Link href="#menu" className="text-white hover:text-[#e2d8d0] px-4">
              Menu
            </Link>
            <Link
              href="/nonmakanan"
              className="text-white hover:text-[#e2d8d0] px-4"
            >
              Non-Makanan
            </Link>
            {/* Dropdown Contact & Survey untuk Desktop */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-[#e2d8d0] border border-white rounded-full px-4 py-1"
              >
                Contact & Survey
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                  <a
                    href="https://wa.me/+6285776130245?text=Hallo%20Kang%20Ubi"
                    className="block px-4 py-2 text-[#333] hover:bg-[#e2d8d0] hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe3RGEuAqJ51_wBIMQTDd9n2CoaOz2AdzqRgko379rFi8NT8g/viewform?usp=sf_link"
                    className="block px-4 py-2 text-[#333] hover:bg-[#e2d8d0] hover:text-white"
                  >
                    Survey
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Tombol menu untuk mobile */}
          <button className="text-white lg:hidden" onClick={toggleSidebar}>
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
        </div>
      </nav>
    </>
  );
}
