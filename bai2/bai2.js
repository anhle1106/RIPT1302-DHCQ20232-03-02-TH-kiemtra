const minuteInput = document.getElementById('minuteInput');
const secondInput = document.getElementById('secondInput');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const audio = new Audio('baothuc.mp3');

let sukien;
let tongsogiay;

function startClock() {
  const minutes = parseInt(minuteInput.value) || 0;
  const seconds = parseInt(secondInput.value) || 0;
  tongsogiay = minutes * 60 + seconds;

  sukien = setInterval(() => {
    tongsogiay--;
    if (tongsogiay < 0) {
      clearInterval(sukien);
      audio.play();
    } else {
      const minutesLeft = Math.floor(tongsogiay / 60);
      const secondsLeft = tongsogiay % 60;
      minuteInput.value = String(minutesLeft).padStart(2, '0');
      secondInput.value = String(secondsLeft).padStart(2, '0');
    }
  }, 1000);
}

function stopClock() {
  clearInterval(sukien);
  audio.pause()
}

function resetClock() {
  minuteInput.value = '';
  secondInput.value = '';
  clearInterval(sukien);
  audio.pause()
}
