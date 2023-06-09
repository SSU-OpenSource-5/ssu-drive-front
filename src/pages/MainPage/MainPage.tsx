import { useNavigate } from 'react-router-dom';
import MainArticle from '../../components/MainArticle';
import FeedbackBox from '../../components/FeedbackBox';
import DegreeBox from '../../components/DegreeBox';
import BottomNavbar from '../../components/BottomNavbar';

import * as styles from './MainPage.css';
import { useEffect, useState } from 'react';
import { memberApis } from '../../apis/memberApis';

const dummyFeedBack = [
  {
    itemId: 1,
    isPositive: true,
    createdAt: '',
    content:
      '피드백 문장 한줄로 보이기 피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기',
  },
  {
    itemId: 2,
    isPositive: false,
    createdAt: '',
    content:
      '피드백 문장 한줄로 보이기 피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기',
  },
  {
    itemId: 3,
    isPositive: false,
    createdAt: '',
    content:
      '피드백 문장 한줄로 보이기 피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기피드백 문장 한줄로 보이기',
  },
];

const dummyDegree = [{ type: ' ', degree: 50 }];

// TODO 운전 지수 컴포넌트 교체
const MainTemplate = () => {
  const navigate = useNavigate();
  const [degree, setDegree] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await memberApis.getMember(1);
        console.log(response);
        console.log(response.nickname);
        setItems(response.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchMember();
  }, []);

  return (
    <div className={styles.wrapper}>
      <MainArticle />
      <div className={styles.DegreeBoxWrapper}>
        운전 온도
        <DegreeBox key={1} type={''} degree={degree} />
      </div>
      <div className={styles.feedboxsWrapper}>
        {items.map((item: any) => (
          <FeedbackBox
            key={item.itemId}
            isPositive={true}
            content={item.comment}
          />
        ))}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default MainTemplate;
