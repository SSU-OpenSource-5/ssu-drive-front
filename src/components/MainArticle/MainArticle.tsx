import { useNavigate } from 'react-router-dom';

import * as styles from './MainArticle.css';
import { useEffect, useState } from 'react';
import { memberApis } from '../../apis/memberApis';
import { Typography } from '@mui/material';

const MainArticle = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await memberApis.getMember(1);
        // console.log(response);
        // setDegree(response.drivingDegree);
        setNickname(response.nickname);
        // console.log(response.nickname);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchMember();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Typography>{`${nickname}님, `}</Typography>
      <div className={styles.Title}>안전운전 하세요!</div>
      <img src="/article-image.svg" className={styles.Image} />
      <button onClick={() => navigate('/drive')} className={styles.Button}>
        운전 시작하기
      </button>
    </div>
  );
};

export default MainArticle;
