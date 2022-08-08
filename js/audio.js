import playList from './playList.js';
console.log(playList);
let isPlay = false;
const playListContainer = document.querySelector('.play-list');
const playbutton = document.querySelector('.play');
const audio = new Audio();
let playNum = 0
const nextbutton = document.querySelector('.play-next');
const prevbutton = document.querySelector('.play-prev');


playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = el.title;
    playListContainer.append(li)
  })
const playitem = document.querySelectorAll('.play-item');

  const play = () => {
    playbutton.classList.toggle('pause');
    playitem.forEach(el => {
      if (el.classList.contains('playitem')) el.classList.toggle('playitem');
    })
    playitem[playNum].classList.toggle('playitem');
    if(!isPlay) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true
    } else {
        audio.pause();
        isPlay = false
    }
  }

const playNext = () => {
  playitem.forEach(el => {
    if (el.classList.contains('playitem')) el.classList.toggle('playitem');
  })
  playNum +=1
  if (playNum > playList.length - 1) playNum = 0;
  playitem[playNum].classList.toggle('playitem');
  if(!isPlay) { 
    playbutton.classList.toggle('pause')
    isPlay = true
  }
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
}

const playPrev = () => {
  playitem.forEach(el => {
    if (el.classList.contains('playitem')) el.classList.toggle('playitem');
  })
  playNum -=1
  if (playNum < 0) playNum = playList.length - 1
  playitem[playNum].classList.toggle('playitem');
  if(!isPlay) { 
    playbutton.classList.toggle('pause')
    isPlay = true
  }
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
}

playbutton.addEventListener('click', play)
nextbutton.addEventListener('click', playNext)
prevbutton.addEventListener('click', playPrev)
playitem.forEach(el => {
  el.addEventListener('click', () => {
    playNum = Array.prototype.slice.call(playitem).indexOf(el)
    isPlay = false
    if (playbutton.classList.contains('pause')) playbutton.classList.toggle('pause');
    play()
  })
})