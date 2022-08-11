window.addEventListener('load', getLocalStorage)
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const selectlanguage = document.querySelector('.selectlanguage');

async function getWeather(lang) {
try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=64ce87003c2eeed860b02b93f2accf60&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
} catch (err) {
    alert("Город введен неверно")
    city.value = localStorage.getItem('city')
    getWeather()
}
  }

//getWeather()
setTimeout(getWeather, 400, 'ru')
localStorage.getItem('selectlanguage') === 'en' ? setTimeout(getWeather, 400, 'en') : setTimeout(getWeather, 400, 'ru')

city.addEventListener('change', () => {
  localStorage.getItem('selectlanguage') === 'en' ? getWeather('en') : getWeather('ru')
})

selectlanguage.addEventListener('change', (event) => {
  if (event.target.value === 'ru') {
    getWeather('ru')
  } if (event.target.value === 'en') {
    getWeather('en')
  }
})

function setLocalStorage() {
    localStorage.setItem('city', city.value);
    localStorage.setItem('selectlanguage', selectlanguage.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    selectlanguage.value = localStorage.getItem('selectlanguage');
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
  }
