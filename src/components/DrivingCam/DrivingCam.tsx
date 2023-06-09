import Webcam from 'react-webcam';
import { formatSecondsToHms } from '../../utils/timeUtils';

import * as styles from './DrivingCam.style';

interface DrivingCamProps {
  webcamRef: React.RefObject<Webcam>;
  recordElapsedTime: number;
  onStartDrive: () => void;
  onEndDrive: () => void;
  addTimestamp: () => Promise<void>;
  feedbackRef: React.RefObject<HTMLDivElement>;
}

const DrivingCam = ({
  webcamRef,
  recordElapsedTime,
  onStartDrive,
  onEndDrive,
  addTimestamp,
  feedbackRef,
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
      <styles.FeedbackDiv ref={feedbackRef} />
      <styles.EndDriveButton onClick={onEndDrive}>
        운전 종료
      </styles.EndDriveButton>
      <styles.ElapsedTimeWContainer>
        {formatSecondsToHms(recordElapsedTime)}
      </styles.ElapsedTimeWContainer>
      <styles.CaptureButton onClick={addTimestamp}>
        타임 스탬프 찍기
      </styles.CaptureButton>
    </styles.Wrapper>
  );
};

export default DrivingCam;
