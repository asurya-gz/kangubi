"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function NonMakanan() {
  const [searchTerm, setSearchTerm] = useState("");

  const product = {
    id: 1,
    name: "Jasa Pembuatan Website Usaha / UMKM / lainnya",
    description: "Membangun website profesional untuk bisnis atau UMKM Anda.",
    image: "/web.png", // Ganti dengan URL gambar yang sesuai
  };

  // Fungsi untuk membuat URL WhatsApp
  const createWhatsAppURL = (productName) => {
    const phoneNumber = "+6285776130245";
    const message = `Hallo, saya tertarik dengan ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Fungsi untuk memfilter produk berdasarkan pencarian
  const isProductVisible = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col font-display">
      {/* Tombol Back di kiri atas */}
      <div className="flex items-center p-4">
        <button
          onClick={() => window.history.back()} // Aksi untuk kembali ke halaman sebelumnya
          className="flex items-center text-[#d7a98c] hover:text-[#8f6246] transition duration-300"
        >
          <IoIosArrowBack className="mr-2" />
          Back
        </button>
      </div>

      {/* Container utama untuk konten dengan margin atas untuk jarak dari navbar */}
      <div className="flex flex-col items-center p-6 md:p-12 lg:p-16 mt-12 w-full">
        <h1 className="text-3xl font-display font-bold mb-6 text-[#d7a98c]">
          Layanan Kami
        </h1>

        {/* Kotak Pencarian */}
        <div className="w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Cari layanan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d7a98c] transition duration-300"
          />
        </div>

        {/* Deskripsi Produk */}
        {isProductVisible && (
          <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center w-full max-w-md bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-[#d7a98c]">
              {product.name}
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              {product.description}
            </p>

            {/* Tombol Order */}
            <a
              href={createWhatsAppURL(product.name)}
              className="mt-4 px-4 py-2 bg-[#d7a98c] text-white rounded-full flex items-center hover:bg-[#8f6246] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order
              <IoIosArrowForward className="ml-2" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
