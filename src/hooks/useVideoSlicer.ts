import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useEffect } from 'react';
import {
  formatSecondsToHms,
  getTimeRangeAroundTimestamp,
} from '../utils/timeUtils';

const FFMPEG = createFFmpeg();

const VIDEO_INPUT_NAME = 'drive-input';
const VIDEO_OUTPUT_NAME = 'drive-output';

// Worker 없이 구현하는 경우 사용되는 hook 함수로, ffmpeg을 이용해 비디오 구간 추출
export const useVideoSlicer = (blob: Blob, timestamp: number) => {
  useEffect(() => {
    FFMPEG.load().then(() => console.log('ffmpeg load'));
  }, []);

  const isFFmpegLoaded = FFMPEG.isLoaded();
  const onSliceVideo = async () => {
    const [startTime, endTime] = getTimeRangeAroundTimestamp(timestamp);

    const str = `[timestamp: ${timestamp}] 영상을 ${startTime}부터 ${endTime}까지 추출합니다.`;
    console.time(str);

    FFMPEG.FS('writeFile', VIDEO_INPUT_NAME, await fetchFile(blob));
    await FFMPEG.run(
      '-i',
      VIDEO_INPUT_NAME,
      '-ss',
      startTime,
      '-to',
      endTime,
      '-f',
      'mp4',
      VIDEO_OUTPUT_NAME,
    );

    const data = FFMPEG.FS('readFile', VIDEO_OUTPUT_NAME);
    const videoURL = URL.createObjectURL(
      new Blob([data.buffer], { type: 'video/mp4' }),
    );

    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = videoURL;
    a.download = `${VIDEO_OUTPUT_NAME}.mp4`;
    a.click();
    window.URL.revokeObjectURL(videoURL);

    console.timeEnd(str);
  };

  return { isFFmpegLoaded, onSliceVideo };
};
