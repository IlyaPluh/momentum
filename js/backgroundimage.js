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
setBg()

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

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext)
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev)