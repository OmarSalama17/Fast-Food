"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../Context-Api/Context-Api';
import { useUser } from '@clerk/nextjs';
import CartApis from '../../_utils/cartApis';
import React, { useState } from 'react';

const ProductModal = ({ product, onClose }) => {
  const [isChecked, setIsChecked] = useState(true);
  const router = useRouter();
  const { cart, setCart, setLoader } = useGlobalContext();
  const { user } = useUser();
const getUserCart = async (userEmail) => {
  const res = await CartApis.getCart(userEmail);

  if (res.data.data.length > 0) {
    return res.data.data[0];
  } else {
    const createRes = await CartApis.addCart(userEmail);
    return createRes.data.data;
  }
};

const addToCart = async (productId, userEmail) => {
  if (!user) {
    router.push ("/sign-in")
  }
  setLoader(true)
  const cart = await getUserCart(userEmail);
  const oldItems = cart.items || [];

  const existingItem = oldItems.find((item) => {
    const currentDocId = item.product?.documentId;
    return currentDocId === productId;
  });

  let newItems = [];

  if (existingItem) {
    newItems = oldItems.map((item) => {
      const currentDocId = item.product?.documentId;
      return {
        product: { connect: [currentDocId] },
        quantity: currentDocId === productId ? item.quantity + 1 : item.quantity,
      };
    });
  } else {
    newItems = [
      ...oldItems.map((item) => ({
        product: { connect: [item.product?.documentId] },
        quantity: item.quantity,
      })),
      {
        product: { connect: [productId] },
        quantity: 1,
      },
    ];
  }
  await CartApis.updateCart(cart.documentId , newItems);
  const updatedCartRes = await CartApis.getCart(userEmail);
  const updatedCart = updatedCartRes.data.data[0];
  setCart(updatedCart);
  setLoader(false)
};

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50"
        onClick={onClose}
      >
        <div className="flex justify-center items-center font-extrabold rounded-xl mt-[35px] cursor-pointer mb-[40px] text-[20px]  w-[35px] h-[35px] text-[#393f52] bg-[white]">
          <p>×</p>
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#f1f3f6] h-[77vh] rounded-[40px] max-w-6xl w-full mx-2  overflow-hidden flex flex-col md:flex-row"
        >
          <div className="bg-white md:max-w-[230px] p-4 overflow-auto">
            <ul className="!p-0">
              {product.optionGroup.map((option, index) => (
                <li key={index} className="py-2 text-end">
                  {option.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f1f3f6] flex-1 p-4 overflow-auto">
            <h3 className="p-2">Select your Favorite Sandwich</h3>
            <div className="bg-white rounded-xl mb-4">
              <ul className="flex flex-col !p-0">
                <li className="flex items-center py-2 px-4 relative">
                  <img className="w-[60px] h-[60px] mr-4" src="https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/egy/imagestemp/110004.png" />
                  <span>Crunch Mix</span>
                  <div className="absolute right-4">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                  </div>
                </li>
              </ul>
            </div>

            {product.optionGroup.map((option, index) => (
              <div key={index} className="mb-4">
                <h3 className="p-2">{option.title}</h3>
                <div className="bg-white rounded-xl">
                  {option.options.map((opt, i) => (
                    <ul className="flex flex-col !p-0" key={i}>
                      <li className="flex items-center py-2 px-4 relative">
                        <img className="w-[60px] h-[60px] mr-4" src={opt.image[0].url} />
                        <span>{opt.title}</span>
                        <div className="absolute right-4">
                          <input type="checkbox" />
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>

                        <div className="bg-[#f1f3f6] flex h-[270px] lg:!h-[365px] justify-center rounded-br-[40px]">
                            <div className="pt-[90px] px-[10px] pb-[20px] !mt-[0px] lg:!mt-[135px] mx-[10px]  relative bg-white min-w-[333px] max-w-[333px] cart-radius shadow-card">
                                <img className="w-[210px] absolute top-[-115px] right-[60px]" src={product.image[0].url}/>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="font-bold text-[18px] relative mb-[30px]">{product.title} <span></span></h3>
                                <button className="border border-[#d7d9dc] rounded-md text-[#e4002b] text-[14px] py-[3px] px-[14px] ">RESET</button>
                                <p className="text-[14px] mb-[10px]">{product.description}</p>
                                <div className="absolute !bottom-0 lg:!bottom-[-30px] bg-linear rounded-md text-[white]">
                                    <div className="flex justify-between items-center  m-[8px] min-w-[300px] ">
                                    <div>
                                    <p className="font-bold text-[14px] text-start">{product.price}.00 EGP</p>
                                    <p className="text-[8px] font bold">* All prices are VAT Inclusive</p>
                                    </div>
                                    <button onClick={()=> addToCart(product.documentId, user?.primaryEmailAddress?.emailAddress)} className="flex  font-bold ">Add to cart <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="text-[23px] ml-[10px] bg-[white] text-[black] rounded-2xl  _chevron_wyjg5_134" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></p></button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
