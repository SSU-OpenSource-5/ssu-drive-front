import { useNavigate } from 'react-router-dom';
import MainArticle from '../../components/MainArticle';
import FeedbackBox from '../../components/FeedbackBox';

import * as styles from './MainPage.css';

const dummyFeedBack = [
  {
    id: 1,
    isPositive: true,
    createdAt: '',
    content:
      '피드백 문장 한줄로 보이기 피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기',
  },
  {
    id: 2,
    isPositive: false,
    createdAt: '',
    content:
      '피드백 문장 한줄로 보이기 피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기',
  },
  {
    id: 3,
    isPositive: false,
    createdAt: '',
    content:
      '피드백 문장 한줄로 보이기 피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기',
  },
];

// TODO 운전 지수 컴포넌트 교체
const MainTemplate = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <MainArticle />
      <div className={styles.driveDegreeBox}>운전 지수</div>
      <div className={styles.feedboxsWrapper}>
        {dummyFeedBack.map((feedback) => (
          <FeedbackBox
            key={feedback.id}
            isPositive={feedback.isPositive}
            content={feedback.content}
          />
        ))}
      </div>
    </div>
  );
};

export default MainTemplate;
