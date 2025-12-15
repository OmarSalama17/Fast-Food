const { default: axiosClient } = require("./axiosClient");

const getCart = async (userEmail) => {
  try {
    const res = await axiosClient.get(`/carts?user_email=${userEmail}`);
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};

const addCart = async (userEmail) => {
  const res = await axiosClient.post("/carts", {
    user_email: userEmail,
    items: [],
  });

  return res.data;
};

const updateCart = (cartId, updatedItems) =>
  axiosClient.put(`/carts/${cartId}`, {
    items: updatedItems,
  });

export default {
  getCart,
  updateCart,
  addCart,
};
