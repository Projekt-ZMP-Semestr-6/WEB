import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://gamepricetracer.herokuapp.com/api/auth',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const authClient = axios.create(axiosConfig);
