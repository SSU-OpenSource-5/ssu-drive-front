// TODO Worker가 Util 모듈에서 함수를 import 하지 못하여 임시로 함수 중복 명시
// 초 단위의 시간을 hh:mm:ss 형식으로 변환해주는 함수
function formatSecondsToHms(second: number) {
  let sec, min, hour;
  // 초
  sec = Math.floor(second % 60);
  second = Math.floor(second / 60);
  // 분
  min = Math.floor(second % 60);
  second = Math.floor(second / 60);
  // 시
  hour = second % 24;

  return [hour, min, sec].map((t) => `${t}`.padStart(2, '0')).join(':');
}

// 타임스탬프를 기준으로 전후 30초 시점을 반환해주는 함수
function getTimeRangeAroundTimestamp(timestamp: number) {
  const startTime = timestamp < 30 ? 0 : timestamp - 30;
  const endTime = timestamp + 30;

  return [formatSecondsToHms(startTime), formatSecondsToHms(endTime)];
}

// ffmpeg에 비디오의 일정 구간을 요청하는 함수
async function fetchVideoToFFmpeg(blob: Blob, timestamp: number) {
  const VIDEO_INPUT_NAME = 'drive-input';
  const VIDEO_OUTPUT_NAME = 'drive-output';

  const { createFFmpeg, fetchFile } = (await import('@ffmpeg/ffmpeg')).default;

  const ffmpeg = createFFmpeg({
    mainName: 'main',
    //log: true,
    corePath: 'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js',
  });
  await ffmpeg.load();

  // 추출할 영상의 시작, 종료 시간
  const [startTime, endTime] = formatSecondsToHms(timestamp);

  const str = `[timestamp: ${formatSecondsToHms(
    timestamp,
  )}] 영상을 ${startTime}부터 ${endTime}까지 추출합니다.`;
  console.time(str);

  ffmpeg.FS('writeFile', VIDEO_INPUT_NAME, await fetchFile(blob));
  await ffmpeg.run(
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

  const data = ffmpeg.FS('readFile', VIDEO_OUTPUT_NAME);
  const videoURL = URL.createObjectURL(
    new Blob([data.buffer], { type: 'video/mp4' }),
  );
  console.timeEnd(str);

  return videoURL;
}

// funciton normally in workers
const ctx: Worker = self as unknown as Worker;

async function sliceVideoAroundTimestamp(blob: Blob, timestamp: number) {
  const slicedVideoURL = await fetchVideoToFFmpeg(blob, timestamp);

  // ffmpeg이 성공적으로 영상을 추출한 경우 메인 스레드에게 해당 영상의 url을 반환
  if (slicedVideoURL) {
    ctx.postMessage({
      type: 'response-sliced-video',
      videoURL: slicedVideoURL,
    });
  }
}

ctx.addEventListener('message', (event) => {
  const { type, blob, timestamp } = event.data;
  if (type === 'request-sliced-video') {
    sliceVideoAroundTimestamp(blob, timestamp);
  }
});
