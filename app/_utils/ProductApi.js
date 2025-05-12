import fetchClient from './fetchClient';

const getLatestProducts = () => fetchClient('/products');

export default {
  getLatestProducts,
};
