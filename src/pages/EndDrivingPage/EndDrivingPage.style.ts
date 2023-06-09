import styled from '@emotion/styled';
import { COLORS } from '../../constants/styles/color';

export const pageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.grayscale.gray0};
  box-shadow: '0px 0px 6px rgba(0, 0, 0, 0.25)';
`;

export const checkIconWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: #87cb6c;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

export const Title = styled.div`
  color: ${COLORS.grayscale.black};
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 65px;
`;

export const EditButton = styled.div`
  width: 358px;
  height: 40px;
  background-color: ${COLORS.accent};
  color: ${COLORS.grayscale.gray0};
  border-radius: 10px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeButton = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${COLORS.grayscale.gray4};
`;
