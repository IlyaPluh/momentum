import playList from './playList.js';
console.log(playList);
let isPlay = false;
const playListContainer = document.querySelector('.play-list');
const playbutton = document.querySelector('.play');
const audio = new Audio();
let playNum = 0
const nextbutton = document.querySelector('.play-next');
const prevbutton = document.querySelector('.play-prev');
const audioPlayer = document.querySelector(".audio-player");

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

audio.addEventListener('ended', playNext)

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

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".timesound .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
  },
  false
);

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".timesound .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);
