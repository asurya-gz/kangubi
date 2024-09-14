import React from "react";
import Navbar from "./navbar/page";
import Start from "./start/page";
import Menu from "./menu/page";
import Footer from "./footer/page";
import Pengumuman from "./Pengumuman/page";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Pengumuman />

      <div id="home">
        <Start />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}
