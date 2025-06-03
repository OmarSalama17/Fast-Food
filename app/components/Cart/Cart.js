"use client";
import { useGlobalContext } from "../Context-Api/Context-Api";
import { useUser } from "@clerk/nextjs";
import React from "react";

import cartApis from "../../_utils/cartApis";

const Cart = () => {
  const { user } = useUser();
const userEmail = user?.primaryEmailAddress?.emailAddress;
  const { cart, setCart , setLoader} = useGlobalContext();

  const updateQuantity = async (item, newQuantity) => {
    setLoader(true)
    const cartId = cart?.documentId;
    if (!cartId) return;
    let updatedItems;
    if (newQuantity < 1) {
      updatedItems = cart.items
        .filter((i) => i.id !== item.id)
        .map((i) => ({
          product: { connect: [i.product?.documentId] },
          quantity: i.quantity,
        }));
    } else {
      updatedItems = cart.items.map((i) => ({
        product: { connect: [i.product?.documentId] },
        quantity: i.id === item.id ? newQuantity : i.quantity,
      }));
    }
    await cartApis.updateCart(cartId, updatedItems);
    const updatedCartRes = await cartApis.getCart(userEmail);
    const updatedCart = updatedCartRes.data.data[0];
    setCart(updatedCart);
    setLoader(false)
  };

const removeFromCart = async (productId, userId, setCart, axiosClient) => {
  const cartRes = await axiosClient.get(`/carts?filters[clerk_user_id][$eq]=${userId}&populate[items][populate]=product`);
  const cart = cartRes.data.data[0];
  if (!cart) return;
  const filteredItems = cart.items.filter(item => item.product?.documentId !== productId);
  const newItems = filteredItems.map(item => ({
    product: { connect: [item.product.documentId] },
    quantity: item.quantity,
  }));
  await axiosClient.put(`/carts/${cart.documentId}`, {
    data: {
      items: newItems,
    },
  });
  const updatedCartRes = await axiosClient.get(`/carts?filters[clerk_user_id][$eq]=${userId}&populate[items][populate]=product`);
  const updatedCart = updatedCartRes.data.data[0];

  setCart(updatedCart);
};

  return (
    <div className=" sticky top-[100px] overflow-auto w-[400px] bg-white mt-[70px] bg-height rounded-xl">
      <div className="bg-[#f5faff] py-[14px] px-[20px] rounded-xl">
        {cart?.items?.length > 0 ? (
          <h1 className="font-bold text-[18px] text-[#333333]">
            {cart?.items?.reduce((total, item) => total + item.quantity, 0)} Item Added
          </h1>
        ) : (
          <h1 className="font-bold text-[18px] text-[#333333]">Your Cart is Empty</h1>
        )}
      </div>

      <div className="flex flex-col gap-4 p-[20px] ">
        {cart?.items ? (
          cart?.items?.map((item) => (
            <div key={item.id} className="shadow-custom p-[20px]">
              <div className="flex justify-between mb-[8px] ">
                <h1 className="font-bold text-[#393f52] text-[16px]">{item.product.title}</h1>
                <span className="font-bold text-[#393f52]">{item.product.price * item.quantity}.00EGP</span>
              </div>
              <div className="flex justify-end items-center gap-[10px]">
                <button
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  className="w-[36px] h-[36px] bg-white border rounded-md shadow-custom font-bold"
                >
                  -
                </button>
                <div className="font-bold">{item.quantity}</div>
                <button
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                  className="w-[36px] h-[36px] bg-[red] border rounded-md shadow-custom font-bold text-white"
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col p-[20px]">
            <div>
              <img src="/burger-fast-food-concept-hand-drawn-sketch-vector-illustration.png" />
            </div>
            <p className="text-center font-bold text-[#333333]">
              Explore our menu to add some delicious items to your cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
