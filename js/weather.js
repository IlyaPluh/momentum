window.addEventListener('load', getLocalStorage)
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=64ce87003c2eeed860b02b93f2accf60&units=metric`;
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
setTimeout(getWeather, 400)

city.addEventListener('change', getWeather)

function setLocalStorage() {
    localStorage.setItem('city', city.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
  }
