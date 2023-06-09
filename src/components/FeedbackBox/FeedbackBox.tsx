import * as styles from './FeedbackBox.css';
import ThumbsUpIcon from '../../assets/icons/thumbsUp.svg';
import ThumbsDownIcon from '../../assets/icons/thumbsDown.svg';
import ArrowDown from '../../assets/icons/ArrowDown.svg';
import { useEffect, useState } from 'react';
import { memberApis } from '../../apis/memberApis';

export interface FeedbackBoxProps {
  isPositive: boolean;
  createdAt?: any;
  content: string;
  video?: any;
}

const FeedbackBox = ({
  isPositive,
  createdAt,
  content,
  video,
}: FeedbackBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickBox = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.wrapper} onClick={onClickBox}>
      <div className={styles.feedbackDateText}>1일 전</div>
      <div className={styles.boxWrapper}>
        <img
          src={isPositive ? ThumbsUpIcon : ThumbsDownIcon}
          alt="feedback-icon"
          className={styles.thumbIcon}
        />
        <img
          src={ArrowDown}
          className={styles[isOpen ? 'arrowUpIcon' : 'arrowDownIcon']}
        />
        <div className={styles[isOpen ? 'contentWrap' : 'closedContentWrap']}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
