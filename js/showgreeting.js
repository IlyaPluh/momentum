const greetingtext = document.querySelector('.greeting');
const name = document.querySelector('.name');

const getTimeOfDay = () => {
    let hour = new Date().getHours();
    let timeOfDay = ''
    if (hour >= 6 && hour < 12) timeOfDay = "Доброе утро"
    if (hour >= 12 && hour < 18) timeOfDay = "Добрый день"
    if (hour >= 18) timeOfDay = "Добрый вечер"
    if (hour < 6) timeOfDay = "Доброй ночи"
    greetingtext.textContent = timeOfDay;
    setTimeout(getTimeOfDay, 1000);
  }
  getTimeOfDay();

  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)