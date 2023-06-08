import { useEffect, useRef, useState } from 'react';
import { useWebcam } from '../../hooks';
import Webcam from 'react-webcam';
import { formatSecondsToHms } from '../../utils/timeUtils';

import * as styles from './DrivingCam.style';

interface DrivingCamProps {
  webcamRef: React.RefObject<Webcam>;
  recordElapsedTime: number;
  onStartDrive: () => void;
  onEndDrive: () => void;
  addTimestamp: () => Promise<void>;
}

const DrivingCam = ({
  webcamRef,
  recordElapsedTime,
  onStartDrive,
  onEndDrive,
  addTimestamp,
}: DrivingCamProps) => {
  return (
    <styles.Wrapper>
      <Webcam
        height={'100%'}
        width={'100%'}
        videoConstraints={{
          facingMode: 'environment',
        }}
        ref={webcamRef}
      />
      <button onClick={onStartDrive}>운전 시작</button>
      <button onClick={onEndDrive}>운전 종료</button>
      <styles.ElapsedTimeWContainer>
        {formatSecondsToHms(recordElapsedTime)}
      </styles.ElapsedTimeWContainer>
      <styles.CaptureButton onClick={addTimestamp}>
        타임 스탬프 찍기
      </styles.CaptureButton>
      {/*<div>타임 스탬프 : {currentTimestamp}</div>
      {currentTimestamp && <div>타임 스탬프를 30초 이내 찍을 수 없어요</div>}*/}
    </styles.Wrapper>
  );
};

export default DrivingCam;
