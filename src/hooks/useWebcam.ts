import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

// react-webcam을 이용해 영상을 녹화하는 hook 함수
export const useWebcam = () => {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder>();
  const recordDataRequestRef = useRef<number>();
  const intervalRef = useRef<number>();

  // 녹화된 영상의 Blob 배열
  const [recordedChunks, setRecordedChunks] = useState<Array<BlobPart>>([]);
  // 녹화 경과 시간
  const [recordElapsedTime, setRecordElapsedTime] = useState(0);

  // 녹화 데이터를 recordedChunks에 저장
  const handleDataAvailable = (e: BlobEvent) => {
    if (e.data.size > 0) {
      setRecordedChunks((prev) => [...prev, e.data]);
    }
  };

  // 영상 녹화를 시작하는 함수
  const onStartRecord = useCallback(() => {
    // 기존 녹화 데이터를 비우고 녹화 시작
    setRecordedChunks([]);
    if (webcamRef?.current?.stream) {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });

      mediaRecorderRef.current.addEventListener(
        'dataavailable',
        handleDataAvailable,
      );
      mediaRecorderRef.current.start();

      // 녹화 경과 시간을 측정하기 시작
      intervalRef.current = setInterval(() => {
        setRecordElapsedTime((prev) => prev + 1);
      }, 1000);
    }
  }, []);

  // 영상 녹화를 중지하는 함수
  const onStopRecord = useCallback(() => {
    mediaRecorderRef?.current?.stop();
    // 녹화 경과 시간 측정 중지
    clearInterval(intervalRef.current);
    clearInterval(recordDataRequestRef.current);
  }, []);

  return {
    webcamRef,
    recordedChunks,
    recordElapsedTime,
    onStartRecord,
    onStopRecord,
  };
};
