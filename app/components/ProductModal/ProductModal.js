"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter} from 'next/navigation';
import {useGlobalContext} from '../Context-Api/Context-Api';
import { useUser } from '@clerk/nextjs';
import CartApis from '../../_utils/cartApis';
import React from 'react'

const ProductModal = ({product,onClose}) => {
    const router = useRouter()
        const {cart , setCart , setLoader} = useGlobalContext()
    const {user} = useUser()
const getUserCart = async (userEmail) => {
  const res = await CartApis.getCart(userEmail);
  if (res.data.data.length > 0) {
    return res.data.data[0];
  } else {
    const createRes = await axiosClient.post(`/carts`, {
      data: {
        user_email: userEmail,
        items: [],
      },
    });
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
                className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50" onClick={onClose}>
                    <div className="flex justify-center items-center font-extrabold rounded-xl cursor-pointer mb-[40px] text-[20px]  w-[35px] h-[35px] text-[#393f52] bg-[white]"><p>×</p></div>
                <motion.div 
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0.8 }} 
                        transition={{ duration: 0.3 }} 
                className="bg-[#f1f3f6]  rounded-xl  relative rounded-tl-[40px] rounded-tr-[40px]  rounded-bl-[40px] rounded-br-[40px] h-[77vh] overflow-hidden" onClick={(e)=> e.stopPropagation()}>
                    <div className="bg-[white] text-center text-[18px] font-bold text-[#393f52] rounded-tl-[40px] rounded-tr-[40px] shadow-head relative z-10"> <p className="p-[20px]">Customize Your Meal</p></div>
                        <div className="flex h-full">
                        <div className="bg-[white] max-w-[230px] pr-[15px] rounded-bl-[40px] relative z-20">
                            <ul>
                                {
                                    product.optionGroup.map((option, index) =>{
                                        return(
                                <li key={index} className="p-[12px] text-end">{option.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="bg-[#f1f3f6] min-w-[390px] max-w-[550px]  pt-[15px] pr-[20px] pl-[40px] overflow-auto">
                                <h3>Select your Favorite Sandwich</h3>
                            <div className="bg-[white] rounded-xl">
                                <ul className="flex flex-col">
                                    <li className="flex relative w-full items-center pt-[8px] pr-[48px] pb-[8px] pl-[16px]">
                                        <img className="w-[60px] h-[60px] mr-[10px] " src="https://kfcprodimages-ehcsdud6a5a5eqcm.z01.azurefd.net/cmsimages/kfc/egy/imagestemp/110004.png"/>
                                    <div><span>Crunch Mix</span></div>
                                    <div className="absolute right-[20px]"><input type="radio" checked="checked"/></div>
                                    </li>
                                    
                                </ul>
                            </div>
                                {
                                    product.optionGroup.map((option, index) =>{
                                        return(
                                            <div key={index}>

                                    <h3 >{option.title}</h3>
                                        <div  className="bg-[white] rounded-xl">
                                            {
                                                option.options.map((option, index) =>{
                                                    return(
                                            <ul className="flex flex-col" key={index}>
                                                <li className="flex relative w-full items-center pt-[8px] pr-[48px] pb-[8px] pl-[16px]">
                                                    <img className="w-[60px] h-[60px] mr-[10px] " src={option.image.url}/>
                                                <div><span>{option.title}</span></div>
                                                <div className="absolute right-[20px]"><input type="radio"/></div>
                                                </li>
                                            </ul>
                                                    )
                                                })
                                            }
                                        </div>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                        <div className="bg-[#f1f3f6] rounded-br-[40px]">
                            <div className="pt-[90px] px-[10px] pb-[20px] mt-[135px] mr-[40px]  relative bg-white min-w-[333px] max-w-[333px] cart-radius shadow-card">
                                <img className="w-[210px] absolute top-[-115px] right-[60px]" src={product.image[0].url}/>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="font-bold text-[18px] relative mb-[30px]">{product.title} <span></span></h3>
                                <button className="border border-[#d7d9dc] rounded-md text-[#e4002b] text-[14px] py-[3px] px-[14px] ">RESET</button>
                                <p className="text-[14px] mb-[10px]">{product.description}</p>
                                <div className="absolute bottom-[-30px] bg-linear rounded-md text-[white]">
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
                        </div>
                </motion.div>
            </motion.div>
        
    </AnimatePresence>
)
}

export default ProductModal