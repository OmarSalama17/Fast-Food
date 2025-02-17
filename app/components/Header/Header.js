"use client";

import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="bg-white py-[14px] fixed top-0 left-0 w-full z-50 shadow-nav">
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
        <a href="#" className="text-white text-xl font-bold">    <svg width="66" height="22" viewBox="0 0 66 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.2635 6.72416C42.9595 6.72416 42.7246 6.46331 42.7675 6.1583V6.08929C42.849 4.83334 42.422 4.10323 41.0112 4.10323H36.6446L35.4839 9.40168H41.7311C42.0475 9.40168 42.2976 9.70532 42.2134 10.009L41.6067 12.7417C41.5515 12.9763 41.3566 13.1281 41.1217 13.1281H34.6562C34.6562 13.1281 33.9362 16.3853 33.9086 16.5247C33.6751 17.5723 34.3922 18.1105 34.8621 18.3452C34.8897 18.359 34.9173 18.3728 34.9325 18.3728C35.1384 18.4694 35.249 18.6902 35.2075 18.911L34.8773 20.4016C34.822 20.6362 34.6271 20.788 34.3922 20.788H26.7922C26.4758 20.788 26.2409 20.4982 26.3086 20.1808L29.6249 5.19218C29.9566 3.86722 29.1841 3.32896 28.63 3.12193C28.6162 3.10813 28.5886 3.10813 28.5748 3.10813C28.326 3.02532 28.1878 2.76309 28.2431 2.50086L28.5333 1.1759C28.5886 0.927468 28.8097 0.748047 29.0722 0.748047H45.9719C46.2897 0.748047 46.5246 1.05168 46.4569 1.35532L45.3653 6.26871C45.3086 6.50334 45.1152 6.65515 44.8803 6.65515H43.2635"
        fill="#E4002B"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8509 1.23236C17.9062 0.982545 18.1287 0.803124 18.376 0.803124H26.6407C26.9571 0.803124 27.2059 1.10676 27.1368 1.4104L26.8604 2.68015C26.8203 2.90098 26.6407 3.05279 26.4196 3.06798H26.3643C25.7411 3.14941 24.6232 3.35781 23.696 4.07412L16.8284 9.7742L22.1208 16.9235C23.1433 18.2346 23.656 18.4844 24.6785 18.4968C25.0088 18.4968 25.2589 18.8143 25.1884 19.1455L24.8982 20.4291C24.843 20.6499 24.6495 20.8155 24.4146 20.8155H20.2691C15.7105 20.8155 14.4516 18.8143 10.6516 11.8859L9.54617 16.9373C9.38035 17.724 10.0436 18.1394 10.5134 18.3312C10.5411 18.345 10.5549 18.345 10.5687 18.3588C10.8036 18.4554 10.928 18.6901 10.8741 18.9399L10.5411 20.4153C10.4858 20.6361 10.2924 20.8017 10.0574 20.8017H0.522861C0.191223 20.8017 -0.0575049 20.4981 0.0115863 20.1668L0.287951 18.8971C0.343224 18.6625 0.536679 18.4968 0.757771 18.4692H0.785408C1.65596 18.3726 2.58316 17.8206 3.14833 15.1154L5.31917 5.21965C5.59415 3.9085 4.93088 3.39783 4.36433 3.17701C4.36433 3.17701 4.32288 3.16321 4.2676 3.1494C4.00506 3.06798 3.85306 2.79056 3.90971 2.51453L4.19851 1.18957C4.25517 0.94252 4.47488 0.761719 4.73742 0.761719H13.816C14.1338 0.761719 14.3687 1.05155 14.301 1.36899L14.0095 2.66773C13.968 2.85957 13.8298 3.01277 13.6378 3.06798C13.6101 3.0804 13.5949 3.0804 13.5673 3.0942C13.1389 3.23221 12.4756 3.57726 12.2684 4.41916L11.0662 9.92602L18.101 4.08792C18.528 3.74288 18.4189 3.27362 17.9338 3.0942C17.6575 3.01277 17.4917 2.73536 17.5607 2.44552L17.8509 1.23236Z"
        fill="#E4002B"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.2618 1.21809C65.5672 1.3009 65.7469 1.60453 65.6778 1.90817L64.6124 6.72495C64.5571 6.95957 64.365 7.11139 64.1301 7.11139H62.6087C62.3185 7.11139 62.0975 6.87676 62.1127 6.58693V6.50412C62.1804 4.93073 61.1868 3.75897 58.9483 3.75897C55.216 3.75897 52.4952 6.82156 52.1497 10.8378C51.7752 14.9921 54.6923 17.3936 58.6982 17.3936C60.7571 17.3936 62.3876 16.9934 63.2996 16.7035C63.6603 16.5931 64.0196 16.8968 63.9505 17.2832L63.4793 19.7675C63.4392 19.9759 63.2858 20.154 63.0786 20.223C62.2495 20.4852 59.9418 21.1063 56.4057 21.1063C47.989 21.1063 44.5759 16.2757 45.101 11.3499C45.5708 6.95957 48.4741 0.5004 59.9418 0.5004C62.1251 0.486599 63.88 0.83164 65.2618 1.21809Z"
        fill="#E4002B"
      ></path>
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
