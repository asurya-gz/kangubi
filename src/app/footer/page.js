import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d7a98c] text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Bagian Kiri */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Kang Ubi</h2>
          <p className="mt-2">
            Jasa Titip (Jastip) Ubi Cilembu dan Produk Lokal
          </p>
          <p className="mt-1">Tembalang, Banyumanik, Semarang, Indonesia</p>
        </div>

        {/* Tautan Navigasi */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <Link href="#home" className="hover:underline">
            Home
          </Link>
          <Link href="#menu" className="hover:underline">
            Menu
          </Link>
          <a
            href="https://wa.me/+6285776130245?text=Hallo%20Kang%20Ubi"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>

        {/* Ikon Media Sosial */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Informasi Tambahan */}
      <div className="container mx-auto px-4 mt-8 border-t border-white pt-4 text-center">
        <p>&copy; 2024 Kang Ubi. All rights reserved.</p>
      </div>
    </footer>
  );
}
