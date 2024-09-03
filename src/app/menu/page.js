"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Menu() {
  const products = [
    {
      id: 1,
      name: "Ubi Cilembu Matang 1Kg",
      price: "Rp 23.000",
      image: "/ubi.jpg",
    },
    {
      id: 2,
      name: "Ubi Cilembu Matang 1/2 Kg",
      price: "Rp 12.000",
      image: "/ubi.jpg",
    },
    {
      id: 5,
      name: "Ubi Cilembu Mentah 1 Kg",
      price: "Rp 17.000",
      image: "/mentah.png",
    },
    {
      id: 6,
      name: "Ubi Cilembu Mentah 1/2 Kg",
      price: "Rp 9.000",
      image: "/mentah.png",
    },
    {
      id: 3,
      name: "Peyeum Bandung 1 kg",
      price: "Rp 17.000",
      image: "/peyeum.jpg",
    },
    {
      id: 7,
      name: "Peyeum Bandung 1/2 kg",
      price: "Rp 9.000",
      image: "/peyeum.jpg",
    },
    {
      id: 4,
      name: "Strawberry Segar",
      price: "Coming Soon",
      image: "/stbry.jpeg",
    },
    // Tambahkan produk lainnya di sini
  ];

  // State untuk menyimpan nilai pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi untuk memfilter produk berdasarkan nama
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fungsi untuk membuat URL WhatsApp
  const createWhatsAppURL = (productName) => {
    const phoneNumber = "+6285776130245";
    const message = `Hallo kang ubi saya mau jastip ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="p-6 md:p-12 lg:p-16 flex flex-col items-center font-display">
      <h1 className="text-3xl font-display font-bold mb-6 text-[#d7a98c]">
        Menu Jastip
      </h1>

      {/* Kotak Pencarian */}
      <div className="w-full max-w-md mb-8 font-display">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d7a98c] transition duration-300"
        />
      </div>

      {/* Catatan Menarik */}
      <div className="bg-[#f5f5f5] p-4 rounded-lg shadow-md max-w-md mb-8">
        <p className="text-sm font-display font-semibold text-[#d7a98c]">
          Ongkir Jastip seluruh area Tembalang Banyumanik hanya Rp 6.000
        </p>
      </div>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-[#d7a98c]">
              {product.name}
            </h2>
            <p className="text-gray-700">{product.price}</p>
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
        ))}
      </div>
    </div>
  );
}
