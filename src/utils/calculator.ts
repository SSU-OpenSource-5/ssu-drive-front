class CalculatorUtils {
  /**
   * 녹화 시작 후 경과된 시간을 반환해주는 함수 (2분 10초가 지났다면 00:02:10)
   * @param currentTime 현재 시각
   * @param videoStartTime 녹화 시작 시각
   * @returns
   */
  static getElapsedTime(currentTime: Date, videoStartTime?: Date) {
    let timeDiff = 0;
    let sec, min, hour;

    // 비디오 시작 시간으로부터 경과된 시간(초)
    if (videoStartTime) {
      timeDiff = (currentTime.getTime() - videoStartTime.getTime()) / 1000;
    }
    // 초
    sec = Math.floor(timeDiff % 60);
    sec = `0${sec}`.slice(-2);
    timeDiff = Math.floor(timeDiff / 60);
    // 분
    min = Math.floor(timeDiff % 60);
    min = `0${min}`.slice(-2);
    timeDiff = Math.floor(timeDiff / 60);
    // 시
    hour = timeDiff % 24;
    hour = `0${hour}`.slice(-2);

    return `${hour}:${min}:${sec}`;
  }

  /**
   * timestamp를 기준으로 전후 30초 추출하여 시작/종료 시간을 반환해주는 함수
   * @param timestamp 영상 녹화 중 기록한 timestamp (형식은 hh:mm:ss)
   * @returns [구간 시작 시간(hh:mm:ss), 구간 종료 시간(hh:mm:ss)]
   */
  static getIntervalTime(timestamp: string) {
    const [hour, min, sec] = timestamp.split(':').map((s) => parseInt(s));

    let startTime, endTime;
    // 시작 시간 구하기
    if (sec >= 30) {
      startTime = `${hour}:${min}:${sec - 30}`;
    } else {
      if (min > 0) {
        startTime = `${hour}:${min - 1}:${sec + 30}`;
      } else if (min < 0 && hour > 0) {
        startTime = `${hour - 1}:59:${sec + 30}`;
      } else {
        startTime = '00:00:00';
      }
    }

    // 종료 시간 구하기
    if (sec >= 30) {
      endTime = `${hour}:${min + 1}:${sec - 30}`;
    } else if (sec >= 30 && min >= 59) {
      endTime = `${hour + 1}:00:${sec - 30}`;
    } else {
      endTime = `${hour}:${min}:${sec + 30}`;
    }

    return [startTime, endTime];
  }
}

export default CalculatorUtils;
