"use client";

import Link from "next/link";
import { useState } from "react";
import { useGlobalContext } from "../Context-Api/Context-Api";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

const {count,setCount}= useGlobalContext()
const Handel= ()=>{
  setCount(count + 1)
}
const ctx = useGlobalContext();
console.log(ctx);

  return (
    <>
    <header className="bg-white py-[14px] fixed top-0 left-0 w-full z-30 shadow-nav  ">
      <div className="container mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="2.68318" fill="#393F52"></rect>
      <rect x="4" y="14.6582" width="24" height="2.68318" fill="#393F52"></rect>
      <rect x="15.9961" y="21.3164" width="12.0051" height="2.68318" fill="#393F52"></rect>
    </svg>
        </button>
        <a href="/" className="text-white text-xl font-bold">    
        <svg width="66" height="22" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g className="layer">
        <title>Layer 1</title>
        <path
          d="m43.26,6.72c-0.3,0 -0.54,-0.26 -0.49,-0.56l0,-0.07c0.08,-1.26 -0.35,-1.99 -1.76,-1.99l-4.37,0l-1.16,5.3l6.25,0c0.32,0 0.57,0.31 0.48,0.61l-0.6,2.73c-0.06,0.24 -0.25,0.39 -0.49,0.39l-6.46,0c0,0 -0.72,3.26 -0.75,3.39c-0.23,1.05 0.48,1.59 0.95,1.83c0.03,0.01 0.06,0.02 0.07,0.02c0.21,0.1 0.32,0.32 0.28,0.54l-0.33,1.49c-0.06,0.24 -0.25,0.39 -0.49,0.39l-7.6,0c-0.31,0 -0.55,-0.29 -0.48,-0.61l3.31,-14.99c0.34,-1.32 -0.44,-1.86 -0.99,-2.07c-0.01,-0.01 -0.04,-0.01 -0.06,-0.01c-0.24,-0.08 -0.38,-0.35 -0.33,-0.61l0.29,-1.32c0.06,-0.25 0.28,-0.43 0.54,-0.43l16.9,0c0.32,0 0.55,0.3 0.49,0.61l-1.09,4.91c-0.06,0.23 -0.25,0.39 -0.49,0.39l-1.62,0"
          fill="#E4002B"
          id="svg_1"
          transform="matrix(1 0 0 1 0 0)"
        />
        <path
          d="m65.26,1.22c0.31,0.08 0.49,0.38 0.42,0.69l-1.07,4.81c-0.05,0.24 -0.25,0.39 -0.48,0.39l-1.52,0c-0.29,0 -0.51,-0.23 -0.5,-0.52l0,-0.09c0.07,-1.57 -0.92,-2.74 -3.16,-2.74c-3.73,0 -6.45,3.06 -6.8,7.08c-0.37,4.15 2.54,6.55 6.55,6.55c2.06,0 3.69,-0.4 4.6,-0.69c0.36,-0.11 0.72,0.2 0.65,0.58l-0.47,2.49c-0.04,0.21 -0.19,0.38 -0.4,0.45c-0.83,0.27 -3.14,0.89 -6.67,0.89c-8.42,0 -11.83,-4.83 -11.31,-9.76c0.47,-4.39 3.37,-10.85 14.84,-10.85c2.19,-0.01 3.94,0.33 5.32,0.72z"
          fill="#E4002B"
          id="svg_3"
        />
        <rect
          fill="#E4002B"
          height="0"
          id="svg_5"
          transform="matrix(1 0 0 1 0 0)"
          width="0"
          x="11.39"
          y="6.45"
        />
        <path
          d="m-30.17,5.08c1,0 1.83,0.28 2.64,0.58c0.82,0.31 1.65,0.62 2.46,0.95c0.82,0.33 1.92,0.68 1.94,1.45c0.02,0.81 -0.63,1.55 -0.95,2.36l-0.46,0.75l-0.45,0.76"
          fill="none"
          id="svg_6"
          transform="matrix(1 0 0 1 0 0)"
        />
        <path
          d="m-12.82,6.02c2.23,0 3.91,0.33 5.62,0.63c1.85,0.34 3.47,0.73 5.06,1.21c1.46,0.44 2.21,1.19 2.38,2.06c0.17,0.89 0.22,1.8 -0.29,2.66c-0.5,0.82 -1.25,1.59 -2.17,2.39l-1.22,0.68l-24.3,1.93"
          fill="none"
          id="svg_7"
        />
        <line fill="none" id="svg_8" x1="-24.39" x2="-23.76" y1="4.46" y2="7.9" />
        <path
          d="m-29.7,1.02c6.25,-4.53 1.56,-8.12 10.47,-8.75c8.91,-0.62 -16.72,13.28 -10.47,8.75z"
          fill="none"
          id="svg_9"
        />
        <rect
          fill="none"
          height="0"
          id="svg_11"
          transform="rotate(-84.447 -34.6979 9.45833)"
          width="0"
          x="-34.7"
          y="9.46"
        />
        <text
          fill="#e4002b"
          fontFamily="Serif"
          fontSize="25"
          fontWeight="bold"
          id="svg_12"
          letterSpacing="0"
          strokeWidth="0"
          textAnchor="middle"
          textLength="0"
          transform="matrix(1.48951 0 0 1.21626 15.1429 0.551509)"
          wordSpacing="1"
          x="-1.1"
          xmlSpace="preserve"
          y="16.79"
        >
          D
        </text>
      </g>
    </svg>
    </a>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
          <svg
          className="text-[1.7rem] text-[red]"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
      </g>
          </svg>
          <div className="absolute grid text-xs h-[18px] w-[18px] font-bold right-[-5px] place-items-center top-[-5px] bg-red-500 rounded-[27px]">
            0
          </div>
          </div>
          <div className="flex justify-center items-center bg-[#fef7f8] border border-color rounded-md h-[43px] hover:bg-[#e4002b] text-[#e4002b] hover:text-white transition duration-300 ">
          <a href="#" className="px-[16px] py-[6px] font-bold">عربي</a>
          </div>
          <div className="flex rounded-md h-[43px] bg-[#e4002b] justify-center items-center shadow-hover hover:bg-[#9f001e] transition duration-300 ">
            <a href="#" className="px-[16px] text-[11px]  text-white py-[6px] font-extrabold">LOGIN</a>
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
