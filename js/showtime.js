const time = document.querySelector('.time');
const date = new Date();
const currentTime = date.toLocaleTimeString();

function showTime() {
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
  }
  showTime();