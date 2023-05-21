// 초 단위의 시간을 hh:mm:ss 형식으로 변환해주는 함수
export function formatSecondsToHms(second: number) {
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
export function getTimeRangeAroundTimestamp(timestamp: number) {
  const startTime = timestamp < 30 ? 0 : timestamp - 30;
  const endTime = timestamp + 30;

  return [formatSecondsToHms(startTime), formatSecondsToHms(endTime)];
}
