import axios from 'axios';

const memberInstance = axios.create({
  baseURL: 'api.honggildong.monster',
});

const getMember = async (memberId: number) => {
  const { data } = await memberInstance.get(`/member/${memberId}`);
  return data;
};

export const memberApis = {
  getMember,
};
