import greetingTranslation from './greetingTranslation.js';
console.log(greetingTranslation);
const greetingtext = document.querySelector('.greeting');
const name = document.querySelector('.name');
const selectlanguage = document.querySelector('.selectlanguage');

const getTimeOfDay = (lang) => {
    let hour = new Date().getHours();
    let timeOfDay = ''
    if (hour >= 6 && hour < 12 && lang === 'ru') timeOfDay = greetingTranslation[0].ru + ', '
    if (hour >= 6 && hour < 12 && lang === 'en') timeOfDay = greetingTranslation[0].en + ', '
    if (hour >= 12 && hour < 18 && lang === 'ru') timeOfDay = greetingTranslation[1].ru + ', '
    if (hour >= 12 && hour < 18 && lang === 'en') timeOfDay = greetingTranslation[1].en + ', '
    if (hour >= 18 && lang === 'ru') timeOfDay = greetingTranslation[2].ru + ', '
    if (hour >= 18 && lang === 'en') timeOfDay = greetingTranslation[2].en + ', '
    if (hour < 6 && lang === 'ru') timeOfDay = greetingTranslation[3].ru + ', '
    if (hour < 6 && lang === 'en') timeOfDay = greetingTranslation[3].en + ', '
    greetingtext.textContent = timeOfDay;
    //setTimeout(getTimeOfDay, 1000, lang);
  }

  getTimeOfDay('ru')
  localStorage.getItem('selectlanguage') === 'en' ? getTimeOfDay('en') : getTimeOfDay('ru')
  
  selectlanguage.addEventListener('change', (event) => {
    if (event.target.value === 'ru') {
      getTimeOfDay('ru')
    } if (event.target.value === 'en') {
      getTimeOfDay('en')
    }
  })
  
  name.addEventListener('click', () => {
    name.value = ''
  })

  function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('selectlanguage', selectlanguage.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    //if(localStorage.getItem('selectlanguage')) {
      selectlanguage.value = localStorage.getItem('selectlanguage');
    //}
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)