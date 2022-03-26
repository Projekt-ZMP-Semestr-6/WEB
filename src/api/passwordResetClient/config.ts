import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://gamepricetracer.herokuapp.com/api/forgot-password',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const passwordResetClient = axios.create(axiosConfig);
