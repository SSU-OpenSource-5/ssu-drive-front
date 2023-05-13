import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

import * as styles from './DrivingCam.css';
import CalculatorUtils from '../../utils/calculator';

const ffmpeg = createFFmpeg();

const DrivingCam = () => {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder>();

  const [ffmpegLoaded, setFFmpegLoaded] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Array<BlobPart>>([]);
  const [timestmaps, setTimestamps] = useState<Array<string>>([]);
  const [videoStartTime, setVideoStartTime] = useState<Date>();

  useEffect(() => {
    ffmpeg.load().then(() => {
      setFFmpegLoaded(true);
    });
  }, []);

  const handleDataAvailable = useCallback(
    (e: BlobEvent) => {
      if (e.data.size > 0) {
        setRecordedChunks((prev) => [...prev, e.data]);
      }
    },
    [setRecordedChunks],
  );

  // 타임 스탬프를 저장하는 함수
  const addTimestamp = () => {
    const elapsedTime = CalculatorUtils.getElapsedTime(
      new Date(),
      videoStartTime,
    );
    setTimestamps((prev) => [...prev, elapsedTime]);
  };

  // 녹화를 시작하는 함수
  const onStartRecording = useCallback(() => {
    if (webcamRef?.current?.stream) {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });

      mediaRecorderRef.current.addEventListener(
        'dataavailable',
        handleDataAvailable,
      );
      mediaRecorderRef.current.start();
      setVideoStartTime(new Date());
    }
  }, [webcamRef, mediaRecorderRef, handleDataAvailable]);

  // 녹화를 중지하는 함수
  const onStopRecording = useCallback(() => {
    mediaRecorderRef?.current?.stop();
    onDownloadVideo();
  }, [mediaRecorderRef]);

  // 녹화 데이터를 저장하는 함수
  const onDownloadVideo = async () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });

      // 비디오 슬라이스
      const videoInputName = 'drive-input';
      const videoOutputName = 'drive-output';

      const [startTime, endTime] = CalculatorUtils.getIntervalTime(
        timestmaps[0],
      );

      console.log(
        `timestamp: ${timestmaps[0]} : 영상을 ${startTime}부터 ${endTime}까지 추출합니다.`,
      );

      ffmpeg.FS('writeFile', videoInputName, await fetchFile(blob));
      await ffmpeg.run(
        '-i',
        videoInputName,
        '-ss',
        startTime,
        '-to',
        endTime,
        '-f',
        'mp4',
        videoOutputName,
      );

      const data = ffmpeg.FS('readFile', videoOutputName);
      const videoURL = URL.createObjectURL(
        new Blob([data.buffer], { type: 'video/mp4' }),
      );

      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = videoURL;
      a.download = `${videoOutputName}.mp4`;
      a.click();
      window.URL.revokeObjectURL(videoURL);
      setRecordedChunks([]);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <Webcam audio={false} ref={webcamRef} />
      <button onClick={onStartRecording}>운전 시작</button>
      <button onClick={onStopRecording}>운전 종료</button>
      {recordedChunks.length > 0 && ffmpegLoaded && (
        <button onClick={onDownloadVideo}>Download</button>
      )}
      <button onClick={addTimestamp}>타임 스탬프 찍기</button>
    </div>
  );
};

export default DrivingCam;
