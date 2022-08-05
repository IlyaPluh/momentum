const time = document.querySelector('.time');
const date = document.querySelector('.date');
const options = {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'};

const showTime = () => {
    time.textContent = new Date().toLocaleTimeString();
    date.textContent = new Date().toLocaleDateString('ru-RU', options);
    setTimeout(showTime, 1000);
  }
  showTime();
