"use client";

import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="bg-white py-[15px] fixed top-0 left-0 w-full z-50 shadow-nav">
      <div className="container mx-auto flex justify-between items-center relative z-50">
        <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
        <a href="#" className="text-white text-xl font-bold">Navbar Offcanvas</a>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            cart
          </div>
          <div className="flex justify-center items-center bg-[#fef7f8] border border-color rounded-md h-[43px] hover:bg-[#e4002b] text-[#e4002b] hover:text-white ">
          <a href="#" className="px-[16px] py-[6px] font-bold">عربي</a>
          </div>
          <div className="flex rounded-md h-[43px] bg-[#e4002b] justify-center items-center shadow-hover hover:bg-[#9f001e]  ">
            <a href="#" className="px-[16px] text-white py-[6px] font-bold">Login</a>
            </div>
        </div>
      </div>
    </header>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transition-transform transform z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-5 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 text-xl focus:outline-none"
          >
            ✕
          </button>
          <h2 className="mt-4 text-lg font-bold">Offcanvas</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="block text-gray-700">Party Order</a></li>
            <li><a href="#" className="block text-gray-700">Store Locations</a></li>
            <li><a href="#" className="block text-gray-700">Track Order</a></li>
            <li><a href="#" className="block text-gray-700">Order History</a></li>
            <li><a href="#" className="block text-gray-700">Offers</a></li>
            <li><a href="#" className="block text-gray-700">Explore Menu</a></li>
          </ul>
        </div>
      </div>
      </>
  );
}

export default Header;
