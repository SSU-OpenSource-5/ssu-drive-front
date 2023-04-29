import * as styles from './DegreeBox.css';
import happyFace from '../../assets/icons/happyFace.svg';
import sadFace from '../../assets/icons/sadFace.svg';

import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';
import { COLORS } from '../../constants/styles/color';

import { useState } from 'react';

export interface DegreeProps {
  type: string;
  degree: number;
}

//100% -> 온도 변환( 100% -> 73도)=
const value = 100 / 73;

const DegreeBox = ({ type, degree }: DegreeProps) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.type}>{type}</div>
        <div className={styles.degree}>
          {' '}
          {degree}
          <img src={degree > 36.5 ? happyFace : sadFace}></img>
        </div>
      </div>
      <ProgressBar percent={degree * value} filledBackground={COLORS.accent} />
    </div>
  );
};

export default DegreeBox;
