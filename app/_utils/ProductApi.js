import axiosClient from './axiosClient';

const getLatestProducts = () => axiosClient('/products');


export default {
  getLatestProducts,
};
