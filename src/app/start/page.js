import React from "react";
import Link from "next/link";

export default function Start() {
  return (
    <div className="pt-20 px-4 md:px-6 lg:px-12 xl:px-24 flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:items-start w-full max-w-5xl lg:justify-between">
        <img
          src="/ubi-utama.jpg" // Ganti dengan path ke gambar Anda
          alt="Deskripsi Foto"
          className="w-full md:w-1/2 lg:w-5/12 rounded-tr-3xl rounded-bl-3xl shadow-lg"
        />
        <div className="mt-4 md:mt-0 md:ml-4 lg:ml-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-[#d7a98c] font-display">
            Produk Jastip
          </h1>
          <p className="text-gray-900 mt-2 font-body">
            Kang Ubi adalah layanan jasa titip (jastip) makanan yang
            mengutamakan keandalan dan ongkir ekonomis. Kami menawarkan produk
            unggulan seperti ubi cilembu yang lezat, peyeum Bandung yang khas,
            serta strawberry segar. Dengan Kang Ubi, nikmati kemudahan
            mendapatkan berbagai makanan berkualitas dengan harga pengiriman
            yang bersahabat.
          </p>
          <Link href="#menu">
            <button className="font-display mt-4 px-6 py-2 max-w-xs bg-[#d7a98c] text-white font-semibold rounded-full shadow-md hover:bg-[#b88a71] transition duration-300 ease-in-out">
              Explore Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
