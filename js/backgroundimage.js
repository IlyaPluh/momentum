let bgNum = Math.floor(Math.random() * (21 - 10)) + 10;
const setBg = () => {
    let hour = new Date().getHours();
    let timeOfDay = ''
    if (hour >= 6 && hour < 12) timeOfDay = "morning"
    if (hour >= 12 && hour < 18) timeOfDay = "afternoon"
    if (hour >= 18) timeOfDay = "evening"
    if (hour < 6) timeOfDay = "night"
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {      
    document.body.style.backgroundImage = `url(${img.src})`;
}}
setBg()

const slideNext = document.querySelector('.slide-next');
const getSlideNext = () => {
    bgNum +=1
    if (bgNum > 20) bgNum = 10
    setBg()
}
slideNext.addEventListener('click', getSlideNext)

const slidePrev = document.querySelector('.slide-prev');
const getSlidePrev = () => {
    bgNum -=1
    if (bgNum < 10) bgNum = 20
    setBg()
}
slidePrev.addEventListener('click', getSlidePrev)