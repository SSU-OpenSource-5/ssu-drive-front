import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_URL = 'http://15.165.190.227:8080/'; // TODO 백엔드에서 URL 받을 것!

export const API: AxiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
