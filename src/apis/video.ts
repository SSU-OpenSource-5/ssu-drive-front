import { API } from './API';

// memberId는 전역적으로 관리
export const uploadVideoAsync = async (formData: FormData) => {
  try {
    const response = await API.post('/video/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { isSuccess: true, result: response.data };
  } catch (error) {
    return { isSuccess: false, error };
  }
};
