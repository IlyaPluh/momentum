const time = document.querySelector('.time');
const date = document.querySelector('.date');
const options = {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'};
const language = document.querySelector('.selectlanguage');

const Time = () => {
  time.textContent = new Date().toLocaleTimeString();
  setTimeout(Time, 1000);
}
Time()

const showTime = (lang) => {
    date.textContent = new Date().toLocaleDateString(lang, options);
  }
  showTime('ru-RU');
  localStorage.getItem('language') === 'en-EN' ? showTime('en-EN') : showTime('ru-RU')

  language.addEventListener('change', (event) => {
    if (event.target.value === 'ru') {
      showTime('ru-RU');
    } if (event.target.value === 'en') {
      showTime('en-EN');
    }
  })

  function setLocalStorage() {
    localStorage.setItem('language', language.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
      language.value = localStorage.getItem('language');
  }
  window.addEventListener('load', getLocalStorage)