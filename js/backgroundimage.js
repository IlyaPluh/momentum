const selectbackimg = document.querySelector('.selectbackimg');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const getRandomNum = () => {
    let RandomNum = Math.floor(Math.random() * (21 - 1)) + 1;
    RandomNum = RandomNum.toString().padStart(2, 0);
    return RandomNum;
}

let bgNum = getRandomNum()

const setBg = () => {
    let hour = new Date().getHours();
    let timeOfDay = ''
    if (hour >= 6 && hour < 12) timeOfDay = "morning"
    if (hour >= 12 && hour < 18) timeOfDay = "afternoon"
    if (hour >= 18) timeOfDay = "evening"
    if (hour < 6) timeOfDay = "night"
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/IlyaPluh/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {      
    document.body.style.backgroundImage = `url(${img.src})`;
}}
//setBg()

const getSlideNext = () => {
    bgNum = +bgNum + 1
    if (bgNum > 20) bgNum = 1
    bgNum = bgNum.toString().padStart(2, 0);
    setBg()
}

const getSlidePrev = () => {
    bgNum = +bgNum - 1
    if (bgNum < 1) bgNum = 20
    bgNum = bgNum.toString().padStart(2, 0);
    setBg()
}

async function getLinkToImage() {
    let hour = new Date().getHours();
    let timeOfDay = ''
    if (hour >= 6 && hour < 12) timeOfDay = "morning"
    if (hour >= 12 && hour < 18) timeOfDay = "afternoon"
    if (hour >= 18) timeOfDay = "evening"
    if (hour < 6) timeOfDay = "night"
    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=6m6qoNspwNKYsAR0LzUrBCkxfOXqcP0OgA0lvmn1GE8`;
    const res = await fetch(url);
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
   }
getLinkToImage()
localStorage.getItem('selectbackimg') === 'Github' ? setBg() : getLinkToImage()

slideNext.addEventListener('click', () => {
    if (selectbackimg.value === 'Github') {
        getSlideNext()
    } else {
        getLinkToImage()
    }
})

slidePrev.addEventListener('click', () => {
    if (selectbackimg.value === 'Github') {
        getSlidePrev()
    } else {
        getLinkToImage()
    }
})

selectbackimg.addEventListener('change', (event) => {
    if (event.target.value === 'API') {
        getLinkToImage()
    } if (event.target.value === 'Github') {
        setBg()
    }
  })

  function setLocalStorage() {
    localStorage.setItem('selectbackimg', selectbackimg.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    selectbackimg.value = localStorage.getItem('selectbackimg');
  }
  window.addEventListener('load', getLocalStorage)
