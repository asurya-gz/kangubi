"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Pengumuman() {
  const [isVisible, setIsVisible] = useState(true);

  const closeAnnouncement = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed top-0 left-0 w-full bg-yellow-300 text-black text-center py-3 px-4 z-50">
        <div className="relative flex justify-between items-center max-w-5xl mx-auto">
          <p className="text-sm md:text-base">
            Menu <strong>Strawberry</strong> telah dihapus. Menu baru{" "}
            <strong>Nasi Goreng + Telur</strong> telah tersedia!
          </p>
          <button
            className="absolute right-0 mr-4 text-xl hover:text-gray-600"
            onClick={closeAnnouncement}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    )
  );
}
