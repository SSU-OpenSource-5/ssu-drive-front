import { API } from './API';

// memberId는 전역적으로 관리
export const uploadVideoAsync = async (timestamp: string, file: string) => {
  try {
    const response = await API.post('/video/upload', {
      data: { info: { memberId: 1, timestamp }, file },
    });
    return { isSuccess: true, result: response.data };
  } catch (error) {
    return { isSuccess: false, error };
  }
};
