import axiosClient from './axiosClient';

const getLatestProducts = () => axiosClient('/products');
const getLatestProductsOffer = () => axiosClient('/products?filters[isOffer][$eq]=true&populate=*');


export default {
  getLatestProducts,
  getLatestProductsOffer
};
