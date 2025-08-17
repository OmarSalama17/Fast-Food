const { default: axiosClient } = require("./axiosClient");

const getCart = (userEmail) => 
  axiosClient.get(`/carts?filters[user_email][$eq]=${userEmail}&populate[items][populate][product][populate]=image`);


const addCart = (userEmail) =>
  axiosClient.post('/carts', {
    data:{
      user_email: userEmail ,
      items:[]
    }
  });

const updateCart = (cartId, updatedItems) =>
  axiosClient.put(`/carts/${cartId}`, {
    data: {
      items: updatedItems,
    },
  });

export default {
  getCart,
  updateCart,
  addCart,
};