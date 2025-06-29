const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = '${process.env.NEXT_PUBLIC_API_URL}/api';

const axiosClient = axios.create({
    baseURL: apiURL,
    headers: {
        Authorization:`Bearer ${apiKey}`
    }
});
export default axiosClient;
