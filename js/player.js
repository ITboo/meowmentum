import playList from './playList.js';

const playBtn = document.querySelector('.play');
const playBtnPrev = document.querySelector('.play-prev');
const playBtnNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const progressContainer = document.querySelector('.player__progress_container');
const progress = document.querySelector('.progress');
const playerTime = document.querySelector('.player__time');
const playerTitle = document.querySelector('.player__title');
const playerVolume = document.querySelector('.player__volume');

const audio = new Audio();

let isPlay = false;
let playNum = 0;

// добавляю трек в плеер
function playAudio() {
    audio.src = playList[playNum].src;
    playerTitle.textContent = playList[playNum].title;
    audio.onended = function(){ // автоматом включаю следующий трек
        playItem[playNum].classList.remove('item-active');// убираю класс включенной
        playNum ++;
        if (playNum > 3) {
            playNum = 0;
        }
        this.src = playList[playNum].src;
        this.play();
        playItem[playNum].classList.add('item-active');// добавляю класс включенной
    }

    playItem.forEach(el => {   // убераю класс со всех
        el.classList.remove('item-active');
    })
    if (!isPlay){ 
        audio.play();
        isPlay = true;
        playBtn.classList.add('pause');
        playItem[playNum].classList.add('item-active');// добавляю класс включенной
    } else {
        audio.pause();
        isPlay = false;
        playBtn.classList.remove('pause');
    }
}
let isValume = true;
playerVolume.addEventListener('click', function() {
    if (isValume) {
        isValume = false;
        playerVolume.classList.add('player__volume_deactive');
        audio.volume = 0;
    } else {
        isValume = true;
        playerVolume.classList.remove('player__volume_deactive');
        audio.volume = 1;
    }
})

// следующий трэк
function playNext() {
    playNum += 1;
    isPlay = false;
    if (playNum > 3) {
        playNum = 0;
    }
    playAudio();
}
// предыдущий трэк
function playPrev() {
    playNum -= 1;
    isPlay = false;
    if (playNum < 0) {
        playNum = 3;
    }
    playAudio();
}


// добавляем плейлист
for (let i = 0; i < playList.length; i++) { // циклом достаем каждый эл из массива плейлист
    const li = document.createElement('li'); // создаем новый ли
    li.classList.add('play-item'); // добовляем ему класс
    li.textContent = `${playList[i]['title']}`; // даем название
    playListContainer.append(li); // добовляем в ул
}
const playItem = document.querySelectorAll('.play-item');

// прогресс
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;

    console.log(duration)
    console.log(currentTime)
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`


    let timeCurrentTime = Math.round(currentTime);
    let timeDuration = playList[playNum].duration;

    if (timeCurrentTime < 10) {
        timeCurrentTime = '0' + timeCurrentTime
    }
    // console.log(timeCurrentTime)
    let hour = '00';
    
    if (timeCurrentTime > 59) {
        hour++
        if (hour < 10){
            hour = '0' + hour
        }
        if ((timeCurrentTime - 60) < 10) {
            timeCurrentTime = hour + ':' + '0' + (timeCurrentTime - 60)
        } else {
            timeCurrentTime = hour + ':' + (timeCurrentTime - 60)
        }
    } else {
        timeCurrentTime = hour + ':' + timeCurrentTime
    }

    
    playerTime.textContent = timeCurrentTime + ' / ' + timeDuration;
} 
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) { // мотаем нажатием
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration
}

progressContainer.addEventListener('click', setProgress)

// playerTime.textContent = 

playBtn.addEventListener('click', playAudio);
playBtnNext.addEventListener('click', playNext);
playBtnPrev.addEventListener('click', playPrev);