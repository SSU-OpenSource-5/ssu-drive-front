import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://api.honggildong.monster'; // TODO 백엔드에서 URL 받을 것!

export const API: AxiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
