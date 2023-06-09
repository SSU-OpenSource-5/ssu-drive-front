import axios from 'axios';

const videoInstance = axios.create({
  baseURL: 'https://api.honggildong.monster',
  headers: {
    AccessControlAllowOrigin: '*',
  },
});

const getVideos = async (memberId: number) => {
  const { data } = await videoInstance.get('/video', { params: { memberId } });
  return data;
};

const healthCheck = async () => {
  const { data } = await videoInstance.get('/health');
  return data;
};

export const videoApis = {
  getVideos,
  healthCheck,
};
