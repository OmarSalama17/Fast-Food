"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../Context-Api/Context-Api";
import cartApis from "../../_utils/cartApis";
import { PhoneCall } from "lucide-react";
import Order from "../Order/Order";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [order , setOrder] = useState(false);
  const pathname = usePathname();
  const isSignInPage =
    pathname.includes("sign-in") || pathname.includes("sign-up");
  const { cart, setCart } = useGlobalContext();
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    const fetchCart = async () => {
      if (!userEmail) return;

      const res = await cartApis.getCart(userEmail);
      const userCart = res?.data?.data[0];

      setCart(userCart);
    };

    fetchCart();
  }, [userEmail]);
  if (isSignInPage) return null;
  return (
    <>
      <header className="bg-white py-[14px] fixed top-0 left-0 w-full z-30 shadow-nav  z-1000">
        <div className="container mx-auto flex justify-between items-center relative z-50">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="8"
                  width="24"
                  height="2.68318"
                  fill="#393F52"
                ></rect>
                <rect
                  x="4"
                  y="14.6582"
                  width="24"
                  height="2.68318"
                  fill="#393F52"
                ></rect>
                <rect
                  x="15.9961"
                  y="21.3164"
                  width="12.0051"
                  height="2.68318"
                  fill="#393F52"
                ></rect>
              </svg>
            </button>
            <Link href={"/"} className="text-white text-xl font-bold">
              <svg
                width="66"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
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
                  <line
                    fill="none"
                    id="svg_8"
                    x1="-24.39"
                    x2="-23.76"
                    y1="4.46"
                    y2="7.9"
                  />
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
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/cart" className="relative">
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
              <div className="absolute text-[white] grid text-xs h-[18px] w-[18px] font-bold right-[-5px] place-items-center top-[-5px] bg-red-500 rounded-[27px]">
                {cart?.items
                  ? cart?.items?.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )
                  : 0}
              </div>
            </Link>
            <div className="flex justify-center items-center bg-[#fef7f8] border border-color rounded-md h-[43px] hover:bg-[#e4002b] text-[#e4002b] hover:text-white transition duration-300 ">
              <a href="#" className="px-[16px] py-[6px] font-bold">
                عربي
              </a>
            </div>
            {!user ? (
              <div className="flex rounded-md h-[43px] bg-[#e4002b] justify-center items-center shadow-hover hover:bg-[#9f001e] transition duration-300 ">
                <Link
                  href="/sign-in"
                  className="px-[16px] text-[11px]  text-white py-[6px] font-extrabold"
                >
                  LOGIN
                </Link>
              </div>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transition-transform transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative mt-[85px]">
          {!user ? (
            <div className="flex justify-around items-center p-[10px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#e4002b] flex justify-center items-center">
                <svg
                  className="text-white"
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
                    <path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
                  </g>
                </svg>
              </div>
              <div className="text-[11px] flex justify-center items-center">
                <p>Login to unlock exclusive</p>
              </div>
              <div className="border-[#e4002b] border-2 h-[100%] px-[15px] rounded-md">
                <Link
                  href={"/sign-in"}
                  className="text-[10px] font-bold text-[#e4002b]"
                >
                  LOGIN
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center p-[10px]">
              <div className="w-[40px] h-[40px] rounded-full  flex justify-center items-center mr-[10px]">
              <UserButton/>
              </div>
              <div className=" text-[18px] flex flex-col justify-center items-center">
                <h2>{user?.fullName}</h2>
                <p className="text-[10px]">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          )}
          <ul className="mt-4 space-y-2 p-[20px]">
            <li className="flex py-[10px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8749 2.50005V0.809555C13.8746 0.639687 13.9727 0.485015 14.1265 0.412821C14.2802 0.340627 14.4619 0.363964 14.5924 0.47268L18.1974 3.47655C18.3389 3.59458 18.3913 3.78865 18.3284 3.96188C18.2655 4.13511 18.1008 4.25034 17.9165 4.25005H0.749908V2.50005H13.8749ZM0.749953 14.7501H18.25V16.5001H0.749953V14.7501ZM18.25 8.6251H0.749953V10.3751H18.25V8.6251Z"
                  fill="#393F52"
                ></path>
              </svg>
              <Link onClick={()=> setOrder(true)} href="" className="block text-gray-700">
                Order History
              </Link>
            </li>
            <li className="flex py-[10px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className=" mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.7463 9.43785L17.2674 6.95879V3.4535C17.2674 3.03341 16.9269 2.69286 16.5068 2.69286H13.0013L10.5224 0.214014C10.2371 -0.0713379 9.73201 -0.0713379 9.44687 0.214014L6.96781 2.69286H3.46231C3.04221 2.69286 2.70166 3.03341 2.70166 3.4535V6.95879L0.222816 9.43785C-0.0742719 9.73472 -0.0742719 10.2165 0.222816 10.5134L2.70166 12.9925V16.4977C2.70166 16.9178 3.04221 17.2584 3.46231 17.2584H6.96781L9.44666 19.7372C9.58922 19.8798 9.78264 19.96 9.98454 19.96C10.1864 19.96 10.3796 19.8798 10.5224 19.7372L13.0013 17.2584H16.5068C16.9269 17.2584 17.2674 16.9178 17.2674 16.4977V12.9927L19.7463 10.5136C20.0434 10.2165 20.0434 9.73493 19.7463 9.43785ZM15.9688 12.1397C15.8263 12.2823 15.7461 12.4757 15.7461 12.6776V15.7373H12.6861C12.4842 15.7373 12.291 15.8175 12.1482 15.9601L9.98449 18.1238L7.82077 15.9601C7.67821 15.8175 7.48478 15.7373 7.28289 15.7373H4.22291V12.6776C4.22291 12.4757 4.14271 12.2825 4.00014 12.1397L1.83643 9.97576L4.00014 7.81183C4.14271 7.66926 4.22291 7.47584 4.22291 7.27394V4.21418H7.28289C7.48478 4.21418 7.67799 4.13398 7.82077 3.99142L9.98449 1.8277L12.1482 3.99142C12.2908 4.13398 12.4842 4.21418 12.6861 4.21418H15.7461V7.27394C15.7461 7.47584 15.8263 7.66904 15.9688 7.81183L18.1326 9.97576L15.9688 12.1397ZM6.07402 12.036L12.9651 6.71148C13.2971 6.45482 13.775 6.51611 14.0319 6.8484C14.2888 7.1807 14.2275 7.65838 13.895 7.91526L7.00397 13.2398C6.86553 13.3467 6.70188 13.3985 6.53954 13.3985C6.31221 13.3985 6.08685 13.297 5.93711 13.1029C5.68022 12.7706 5.74151 12.2929 6.07402 12.036ZM8.52278 9.1116C9.05762 9.1116 9.5603 8.90318 9.93824 8.52503C10.3164 8.14709 10.5246 7.6442 10.5248 7.10979C10.5248 6.57473 10.3164 6.07205 9.93846 5.69433C9.56052 5.31596 9.05762 5.10754 8.52278 5.10754C7.98815 5.10754 7.48547 5.31596 7.1071 5.6939C6.72874 6.07183 6.52075 6.57473 6.52075 7.10957C6.52075 7.64441 6.72895 8.14709 7.10689 8.52503C7.48526 8.90318 7.98794 9.1116 8.52278 9.1116ZM10.0309 11.4264C10.4088 11.0482 10.9115 10.8398 11.4464 10.8398C11.9812 10.8398 12.4839 11.0482 12.862 11.4261C13.24 11.8041 13.4482 12.3067 13.4482 12.8416C13.4482 13.3762 13.24 13.8791 12.8618 14.2571C12.4839 14.6352 11.9812 14.8438 11.4464 14.8438C10.9115 14.8438 10.4086 14.6354 10.0307 14.2571C9.65276 13.8793 9.44434 13.3767 9.44434 12.8416C9.44456 12.3072 9.65276 11.8043 10.0309 11.4264Z"
                  fill="#393F52"
                ></path>
              </svg>
              <Link href="/product?type=exclusive-offers" className="block text-gray-700">
                Offers
              </Link>
            </li>
            <li className="flex py-[10px]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                className=" mr-[10px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4896 0.974365H1.929C0.8359 0.974365 0 1.87457 0 2.90337V18.3354C0 19.4285 0.8359 20.2644 1.929 20.2644H17.5539C18.647 20.2644 19.4829 19.4285 19.4829 18.3354V2.90337C19.4186 1.87457 18.5827 0.974365 17.4896 0.974365ZM1.28599 18.3354V2.90336C1.28599 2.58186 1.60749 2.26036 1.92899 2.26036H9.06629V18.9784H1.92899C1.54319 18.9784 1.28599 18.7212 1.28599 18.3354ZM17.4896 18.9784C17.8111 18.9784 18.1326 18.7212 18.1326 18.3354V2.90336C18.1326 2.58186 17.8111 2.26036 17.4896 2.26036H10.3523V18.9784H17.4896Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M7.13729 5.411H3.15069C2.76489 5.411 2.50769 5.1538 2.50769 4.768C2.50769 4.3822 2.76489 4.125 3.15069 4.125H7.20159C7.58739 4.125 7.84459 4.3822 7.84459 4.768C7.84459 5.1538 7.52309 5.411 7.13729 5.411Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M7.13729 11.8411H3.15069C2.76489 11.8411 2.50769 11.5839 2.50769 11.1981C2.50769 10.8123 2.76489 10.5551 3.15069 10.5551H7.20159C7.58739 10.5551 7.84459 10.8123 7.84459 11.1981C7.84459 11.5839 7.52309 11.8411 7.13729 11.8411Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M7.13729 14.4131H3.15069C2.76489 14.4131 2.50769 14.1559 2.50769 13.7701C2.50769 13.3843 2.76489 13.1271 3.15069 13.1271H7.20159C7.58739 13.1271 7.84459 13.3843 7.84459 13.7701C7.84459 14.1559 7.52309 14.4131 7.13729 14.4131Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M7.13729 16.9851H3.15069C2.76489 16.9851 2.50769 16.7279 2.50769 16.3421C2.50769 15.9563 2.76489 15.6991 3.15069 15.6991H7.20159C7.58739 15.6991 7.84459 15.9563 7.84459 16.3421C7.84459 16.7279 7.52309 16.9851 7.13729 16.9851Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M16.3965 5.411H12.3456C11.9598 5.411 11.7026 5.1538 11.7026 4.768C11.7026 4.3822 11.9598 4.125 12.3456 4.125H16.3965C16.7823 4.125 17.0395 4.3822 17.0395 4.768C17.0395 5.1538 16.718 5.411 16.3965 5.411Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M16.3965 11.8411H12.3456C11.9598 11.8411 11.7026 11.5839 11.7026 11.1981C11.7026 10.8123 11.9598 10.5551 12.3456 10.5551H16.3965C16.7823 10.5551 17.0395 10.8123 17.0395 11.1981C17.0395 11.5839 16.718 11.8411 16.3965 11.8411Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M16.3965 14.4131H12.3456C11.9598 14.4131 11.7026 14.1559 11.7026 13.7701C11.7026 13.3843 11.9598 13.1271 12.3456 13.1271H16.3965C16.7823 13.1271 17.0395 13.3843 17.0395 13.7701C17.0395 14.1559 16.718 14.4131 16.3965 14.4131Z"
                  fill="#393F52"
                ></path>
                <path
                  d="M16.3965 16.9851H12.3456C11.9598 16.9851 11.7026 16.7279 11.7026 16.3421C11.7026 15.9563 11.9598 15.6991 12.3456 15.6991H16.3965C16.7823 15.6991 17.0395 15.9563 17.0395 16.3421C17.0395 16.7279 16.718 16.9851 16.3965 16.9851Z"
                  fill="#393F52"
                ></path>
              </svg>
              <Link href="/product" className="block text-gray-700">
                Explore Menu
              </Link>
            </li>
            <li className="flex py-[10px]">
              <PhoneCall className="w-[20px] text-gray-700 mr-[10px]" />
              <Link className="block text-gray-700" href={"./contactUs"}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {
        order ?
        <Order setOrder={setOrder}/>
        :""
      }
    </>
  );
}

export default Header;
