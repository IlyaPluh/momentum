const setting = document.querySelector('.settings');
const languageshow = document.querySelector('.selectlanguage');
const backimgshow = document.querySelector('.selectbackimg');
const playershow = document.querySelector('.playershow');
const playershows = document.querySelector('.playershows');
const player = document.querySelector('.player');
const weathershow = document.querySelector('.weathershow');
const weathershows = document.querySelector('.weathershows');
const weather = document.querySelector('.weather');
const timeshow = document.querySelector('.timeshow');
const timeshows = document.querySelector('.timeshows');
const times = document.querySelector('.time');
const dateshow = document.querySelector('.dateshow');
const dateshows = document.querySelector('.dateshows');
const dates = document.querySelector('.date');
const helloshow = document.querySelector('.helloshow');
const helloshows = document.querySelector('.helloshows');
const hello = document.querySelector('.greeting-container');
const citatashow = document.querySelector('.citatashow');
const citatashows = document.querySelector('.citatashows');
const citats = document.querySelector('.quoteauthor');
const lang = document.querySelector('.selectlanguage');
const langset = document.querySelector('.langset');
const langplayer = document.querySelector('.langplayer');
const langweather = document.querySelector('.langweather');
const langtime = document.querySelector('.langtime');
const langdate = document.querySelector('.langdate');
const langhello = document.querySelector('.langhello');
const langcitata = document.querySelector('.langcitata');


setting.addEventListener('change', function() {
    if (this.checked) {
        languageshow.style.visibility = 'visible';
        languageshow.style.opacity = '0.7';
        backimgshow.style.visibility = 'visible';
        backimgshow.style.opacity = '0.7';
        playershow.style.visibility = 'visible';
        playershow.style.opacity = '0.8';
        weathershow.style.visibility = 'visible';
        weathershow.style.opacity = '0.8';
        timeshow.style.visibility = 'visible';
        timeshow.style.opacity = '0.8';
        dateshow.style.visibility = 'visible';
        dateshow.style.opacity = '0.8';
        helloshow.style.visibility = 'visible';
        helloshow.style.opacity = '0.8';
        citatashow.style.visibility = 'visible';
        citatashow.style.opacity = '0.8';
    } else {
        languageshow.style.visibility = 'hidden';
        languageshow.style.opacity = '0';
        backimgshow.style.visibility = 'hidden';
        backimgshow.style.opacity = '0';
        playershow.style.visibility = 'hidden';
        playershow.style.opacity = '0';
        weathershow.style.visibility = 'hidden';
        weathershow.style.opacity = '0';
        timeshow.style.visibility = 'hidden';
        timeshow.style.opacity = '0';
        dateshow.style.visibility = 'hidden';
        dateshow.style.opacity = '0';
        helloshow.style.visibility = 'hidden';
        helloshow.style.opacity = '0';
        citatashow.style.visibility = 'hidden';
        citatashow.style.opacity = '0';
    }
})

playershows.addEventListener('change', function() {
    if (this.checked) {
        player.style.visibility = 'visible';
        player.style.opacity = '1';
    } else {
        player.style.visibility = 'hidden';
        player.style.opacity = '0';
    }
})

weathershows.addEventListener('change', function() {
    if (this.checked) {
        weather.style.visibility = 'visible';
        weather.style.opacity = '1';
    } else {
        weather.style.visibility = 'hidden';
        weather.style.opacity = '0';
    }
})

timeshows.addEventListener('change', function() {
    if (this.checked) {
        times.style.visibility = 'visible';
        times.style.opacity = '1';
    } else {
        times.style.visibility = 'hidden';
        times.style.opacity = '0';
    }
})

dateshows.addEventListener('change', function() {
    if (this.checked) {
        dates.style.visibility = 'visible';
        dates.style.opacity = '1';
    } else {
        dates.style.visibility = 'hidden';
        dates.style.opacity = '0';
    }
})

helloshows.addEventListener('change', function() {
    if (this.checked) {
        hello.style.visibility = 'visible';
        hello.style.opacity = '1';
    } else {
        hello.style.visibility = 'hidden';
        hello.style.opacity = '0';
    }
})

citatashows.addEventListener('change', function() {
    if (this.checked) {
        citats.style.visibility = 'visible';
        citats.style.opacity = '1';
    } else {
        citats.style.visibility = 'hidden';
        citats.style.opacity = '0';
    }
})

lang.addEventListener('change', (event) => {
    if (event.target.value === 'ru') {
        langset.textContent = 'Настройки'
        langplayer.textContent = 'Плеер'
        langweather.textContent = 'Погода'
        langhello.textContent = 'Привет'
        langcitata.textContent = 'Цитата'
        langdate.textContent = 'Дата'
        langtime.textContent = 'Время'
    } if (event.target.value === 'en') {
        langset.textContent = 'Settings'
        langplayer.textContent = 'Player'
        langweather.textContent = 'Weather'
        langhello.textContent = 'Hello'
        langcitata.textContent = 'Quote'
        langdate.textContent = 'Date'
        langtime.textContent = 'Time'
    }
  })

function setLocalStorage() {
    localStorage.setItem('playershows', playershows.checked);
    localStorage.setItem('weathershows', weathershows.checked);
    localStorage.setItem('dateshows', dateshows.checked);
    localStorage.setItem('helloshows', helloshows.checked);
    localStorage.setItem('citatashows', citatashows.checked);
    localStorage.setItem('timeshows', timeshows.checked);
    localStorage.setItem('lang', lang.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if (localStorage.getItem('playershows') === 'false' ) {
        playershows.checked = false
        player.style.visibility = 'hidden';
        player.style.opacity = '0';
    } if (localStorage.getItem('weathershows') === 'false' ) {
        weathershows.checked = false
        weather.style.visibility = 'hidden';
        weather.style.opacity = '0';
    } if (localStorage.getItem('dateshows') === 'false' ) {
        dateshows.checked = false
        dates.style.visibility = 'hidden';
        dates.style.opacity = '0';
    } if (localStorage.getItem('helloshows') === 'false' ) {
        helloshows.checked = false
        hello.style.visibility = 'hidden';
        hello.style.opacity = '0';
    } if (localStorage.getItem('citatashows') === 'false' ) {
        citatashows.checked = false
        citats.style.visibility = 'hidden';
        citats.style.opacity = '0';
    } if (localStorage.getItem('timeshows') === 'false' ) {
        timeshows.checked = false
        times.style.visibility = 'hidden';
        times.style.opacity = '0';
    } if (localStorage.getItem('lang') === 'en') {
        langset.textContent = 'Settings'
        langplayer.textContent = 'Player'
        langweather.textContent = 'Weather'
        langhello.textContent = 'Hello'
        langcitata.textContent = 'Quote'
        langdate.textContent = 'Date'
        langtime.textContent = 'Time'
    }
}
  window.addEventListener('load', getLocalStorage)