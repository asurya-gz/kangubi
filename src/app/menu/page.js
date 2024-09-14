"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Menu() {
  // Produk yang dikelompokkan berdasarkan nama dengan pilihan ukuran
  const products = [
    {
      id: 1,
      name: "Ubi Cilembu Matang",
      schedule: "Buka Setiap Hari",
      sizes: [
        { size: "1 Kg", price: "Rp 23.000", image: "/ubi.jpg" },
        { size: "1/2 Kg", price: "Rp 12.000", image: "/ubi.jpg" },
      ],
      feeJastip: "Rp 6.000",
    },
    {
      id: 2,
      name: "Ubi Cilembu Mentah",
      schedule: "Buka Setiap Hari",
      sizes: [
        { size: "1 Kg", price: "Rp 17.000", image: "/mentah.png" },
        { size: "1/2 Kg", price: "Rp 9.000", image: "/mentah.png" },
      ],
      feeJastip: "Rp 6.000",
    },
    {
      id: 3,
      name: "Peyeum Bandung",
      schedule: "Buka Setiap Hari",
      sizes: [
        { size: "1 Kg", price: "Rp 17.000", image: "/peyeum.jpg" },
        { size: "1/2 Kg", price: "Rp 9.000", image: "/peyeum.jpg" },
      ],
      feeJastip: "Rp 6.000",
    },
    {
      id: 4,
      name: "Nasi Goreng + Telur",
      schedule: "Buka Setiap Hari",
      sizes: [{ size: "1 Porsi", price: "Rp 13.000", image: "/nasgor.jpg" }],
      feeJastip: "Rp 0",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState({});
  const [showSizeOptions, setShowSizeOptions] = useState({});

  // Fungsi untuk memfilter produk berdasarkan nama
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fungsi untuk membuat URL WhatsApp
  const createWhatsAppURL = (productName, productSize) => {
    const phoneNumber = "+6285776130245";
    const message = `Hallo kang ubi saya mau jastip ${productName} ukuran ${productSize}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Fungsi untuk menangani klik tombol order
  const handleOrderClick = (productId) => {
    setShowSizeOptions((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  // Fungsi untuk mengatur ukuran yang dipilih dan membuka WhatsApp
  const handleSizeSelect = (productId, productName, size) => {
    setSelectedSize({ ...selectedSize, [productId]: size });
    window.open(createWhatsAppURL(productName, size.size), "_blank");
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

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.sizes[0].image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-[#d7a98c]">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm">
              Fee Jastip: {product.feeJastip}
            </p>
            {product.sizes.map((size) => (
              <div key={size.size} className="text-center">
                <p className="text-gray-700">
                  {size.size}: {size.price}
                </p>
              </div>
            ))}

            {/* Tombol Order */}
            <button
              onClick={() => handleOrderClick(product.id)}
              className="mt-4 px-4 py-2 bg-[#d7a98c] text-white rounded-full flex items-center hover:bg-[#8f6246] transition duration-300"
            >
              Pilih Ukuran
              <IoIosArrowForward className="ml-2" />
            </button>

            {/* Opsi Ukuran */}
            {showSizeOptions[product.id] && (
              <div className="mt-2 flex flex-col items-center">
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() =>
                      handleSizeSelect(product.id, product.name, size)
                    }
                    className="mt-1 px-2 py-1 bg-white border border-[#d7a98c] text-[#d7a98c] rounded-md hover:bg-[#d7a98c] hover:text-white transition duration-300"
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
