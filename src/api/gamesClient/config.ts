import axios from 'axios';
import Cookies from 'js-cookie';

const axiosConfig = {
  baseURL: 'https://gamepricetracer.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const gameClient = axios.create(axiosConfig);

gameClient.interceptors.request.use((config) => {
  const token = Cookies.get('token');

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers
    };
  }

  return config;
});
