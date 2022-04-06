import axios from 'axios';
import Cookies from 'js-cookie';

const axiosConfig = {
  baseURL: 'https://gamepricetracer.herokuapp.com/api/auth',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const authClient = axios.create(axiosConfig);

authClient.interceptors.request.use((config) => {
  const token = Cookies.get('token');

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers
    };
  }

  return config;
});
