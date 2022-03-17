import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: 'https://gamepricetracer.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(function (config) {
  const token = Cookies.get('token');

  if (token) {
    config.headers = {
      Authorization: `Baerer ${token}`,
      ...config.headers
    };
  }

  return config;
});

export default apiClient;
