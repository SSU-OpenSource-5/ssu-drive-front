import axios from 'axios';

const memberInstance = axios.create({
  baseURL: 'http://15.165.190.227:8080',
});

const getMember = async (memberId: number) => {
  const { data } = await memberInstance.get(`/member/${memberId}`);
  return data;
};

export const memberApis = {
  getMember,
};
