interface StartTimer {
  (
    time: number,
    onTime: (min: number, sec: number) => void,
    onAfterTime: () => void,
  ): ReturnType<typeof setInterval>;
}

export const startTimer: StartTimer = (time, onTime, onAfterTime) => {
  let leftTime = time;
  let min = 0;
  let sec = 0;
  const x = setInterval(() => {
    min = parseInt(String(leftTime / 60), 10);
    sec = leftTime % 60;
    onTime(min, sec);
    leftTime -= 1;
    if (leftTime < 0) {
      clearInterval(x);
      onAfterTime();
    }
  }, 1000);
  return x;
};

export default {
  startTimer,
};
