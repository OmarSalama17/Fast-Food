"use client";

import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="bg-gray-800 p-4 absolute top-0 left-0 w-full z-50">
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
