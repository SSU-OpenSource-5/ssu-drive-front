import { useNavigate } from 'react-router-dom';

import * as styles from './EndDrivingPage.style';
import CheckIcon from '../../assets/icons/check.svg';
import BottomNavbar from '../../components/BottomNavbar';

const EndDrivingPage = () => {
  const navigate = useNavigate();
  return (
    <styles.pageWrapper>
      <styles.checkIconWrapper>
        <img src={CheckIcon} alt="check-icon" />
      </styles.checkIconWrapper>
      <styles.Title>운전 기록을 완료했습니다!</styles.Title>
      <styles.EditButton onClick={() => navigate('/edit')}>
        지금 편집하기
      </styles.EditButton>
      <styles.HomeButton onClick={() => navigate('/')}>
        홈으로 가기
      </styles.HomeButton>
      <BottomNavbar />
    </styles.pageWrapper>
  );
};

export default EndDrivingPage;
