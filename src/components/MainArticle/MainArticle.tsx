import { useNavigate } from 'react-router-dom';

import * as styles from './MainArticle.css';

export interface MainArticleProps {
  userInfo?: any; // todo
}

const MainArticle = ({ userInfo }: MainArticleProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.Wrapper}>
      <div>홍길동님,</div>
      <div className={styles.Title}>안전운전 하세요!</div>
      <img src="/article-image.svg" className={styles.Image} />
      <button onClick={() => navigate('/drive')} className={styles.Button}>
        운전 시작하기
      </button>
    </div>
  );
};

export default MainArticle;
