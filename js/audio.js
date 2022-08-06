import playList from './playList.js';
console.log(playList);
let isPlay = false;
const playListContainer = document.querySelector('.play-list');
const playbutton = document.querySelector('.play');
const audio = new Audio();

playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = el.title;
    playListContainer.append(li)
  })

  const play = () => {
    playbutton.classList.toggle('pause');
    if(!isPlay) {
        audio.src = playList[0].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true
    } else {
        audio.pause();
        isPlay = false
    }
  }

  playbutton.addEventListener('click', play)