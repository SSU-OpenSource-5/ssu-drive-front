import { useEffect, useRef, useState } from 'react';
import { useWebcam } from '../../hooks';

import * as styles from './DrivingPage.style';
import BottomNavbar from '../../components/BottomNavbar';
import DrivingCam from '../../components/DrivingCam';

import { uploadVideoAsync } from '../../apis/video';
import { useNavigate } from 'react-router-dom';

const DrivingPage = () => {
  const navigate = useNavigate();
  const VideoSlicerWorkerRef = useRef<Worker | null>();
  const feedbackRef = useRef<HTMLDivElement>(null);
  const [currentTimestamp, setCurrentTimestamp] = useState<number | null>(null);
  const timestampDate = useRef<Date>();

  const {
    webcamRef,
    recordedChunks,
    recordElapsedTime,
    onStartRecord,
    onStopRecord,
  } = useWebcam();

  useEffect(() => {
    // 페이지 진입 3초 후 자동으로 운전 시작하기
    setTimeout(() => {
      onStartRecord();
      alert('운전을 시작합니다 🚙');
    }, 4000);

    VideoSlicerWorkerRef.current = new Worker(
      new URL('../../workers/VideoSlicer.worker.ts', import.meta.url),
      { type: 'classic' },
    );
    VideoSlicerWorkerRef.current.addEventListener('message', (event) => {
      const { type, videoBlob } = event.data;
      // Worker로부터 타임스탬프를 기준으로 잘려진 영상을 전달 받은 경우
      if (type === 'response-sliced-video') {
        uploadSlicedVideo(videoBlob);
        // 타임 스탬프를 다시 찍을 수 있는 상태로 초기화
        setCurrentTimestamp(null);
      }
    });
  }, []);

  useEffect(() => {
    // 타임 스탬프를 찍은 시점으로부터 30초가 지났을 경우
    if (currentTimestamp && currentTimestamp + 30 === recordElapsedTime) {
      requestSlicedVideo();
    }
  }, [recordElapsedTime]);

  // 타임스탬프를 눌렀을 때 실행되는 함수
  const addTimestamp = async () => {
    const targetDate = new Date();
    timestampDate.current = targetDate;

    setCurrentTimestamp(recordElapsedTime);
    feedbackRef.current!.innerText = `${targetDate.getHours()}:${targetDate.getMinutes()} 에 타임스탬프가 찍혔어요`;
  };

  // 워커에게 녹화 데이터와 타임스탬프를 전달하여 1분 영상 추출을 요청하는 함수
  const requestSlicedVideo = () => {
    if (recordedChunks.length < 0 || !VideoSlicerWorkerRef.current) {
      return;
    }
    VideoSlicerWorkerRef.current?.postMessage({
      type: 'request-sliced-video',
      blob: new Blob(recordedChunks, { type: 'video/webm' }),
      timestamp: currentTimestamp,
    });
  };

  // 타임스탬프를 기준으로 잘려진 영상을 다운받는 함수
  const uploadSlicedVideo = async (videoBlob: Blob) => {
    //const a = document.createElement('a');
    //document.body.appendChild(a);
    //a.href = videoURL;
    //a.download = `video-${new Date()}.mp4`;
    //a.click();
    //window.URL.revokeObjectURL(videoURL);

    if (timestampDate.current !== undefined) {
      const formData = new FormData();
      formData.append('file', videoBlob);
      formData.append('memberId', '1');
      formData.append(
        'timestamp',
        timestampDate.current.toISOString().split('.')[0],
      );

      const response = await uploadVideoAsync(formData);
      console.log(response);
    } else {
      alert('비디오를 추출할 수 없어요😅');
    }
  };

  const onEndDrive = () => {
    // 녹화 종료
    onStopRecord();
    // 녹화 종료 후에 타임스탬프가 남아있는 경우, 해당 스탬프를 기준으로 영상 추출 (timestamp-30 ~ endTime)
    if (currentTimestamp) requestSlicedVideo();
    // 운전 종료 페이지로 이동
    navigate('/finish-drive');
  };

  return (
    <styles.PageWrapper>
      <DrivingCam
        feedbackRef={feedbackRef}
        webcamRef={webcamRef}
        onStartDrive={onStartRecord}
        onEndDrive={onEndDrive}
        addTimestamp={addTimestamp}
        recordElapsedTime={recordElapsedTime}
      />
      <BottomNavbar />
    </styles.PageWrapper>
  );
};

export default DrivingPage;
