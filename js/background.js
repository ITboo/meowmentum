import { getRandomNum } from "./script.js";
import { getTimeOfDay } from "./greeting.js";

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const timeOfDay = getTimeOfDay();

const tagPhoto = document.querySelector('.tag');
let tag = timeOfDay[0];

let randomNum;
let isGhImage = true;
let isFlickrAPI = false;
let isUnsplashAPI = false;

randomNum = getRandomNum(1, 20);


export function setBg() {
    const bgNum = String(randomNum).padStart(2, "0");
    const img = new Image();
    img.src = `assets/img/${bgNum}.jpg`; 
    img.onload = () => {      
        body.style.backgroundImage = `url('assets/img/${bgNum}.jpg')`;
    }; 
}
if (isGhImage) {
    setBg();
}


function getSlideNext() {
    randomNum += 1;
    if (randomNum == 21) {
        randomNum = 1;
    }
    if (isGhImage) {
        setBg();
    } 
    if (isFlickrAPI) {
        getLinkToImageFlickr();
    }
    if (isUnsplashAPI) {
        getLinkToImageUnsplash();
    }
}

function getSlidePrev() {
    randomNum -= 1;
    if (randomNum == 0) {
        randomNum = 20;
    }
    if (isGhImage) {
        setBg();
    }
    if (isFlickrAPI) {
        getLinkToImageFlickr();
    }
    if (isUnsplashAPI) {
        getLinkToImageUnsplash();
    }
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

function getTag() {
    if (tagPhoto.value.length == 0) {
        tag = timeOfDay[0];
    } else {
        tag = tagPhoto.value
    }
    console.log(tag)
    getSlideNext()
}
tagPhoto.addEventListener('change', getTag)

// Unsplash API https://api.unsplash.com/photos/random?orientation=landscape&query=&client_id=i0loA9VONbSbVFv87EsQPmz41RI9e1igQdJ3x85IhpA

export async function getLinkToImageUnsplash() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=i0loA9VONbSbVFv87EsQPmz41RI9e1igQdJ3x85IhpA`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.urls.regular)

    const img = new Image();
    img.src = data.urls.regular;
    console.log(img.src)
    img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`
    };
}
if (isFlickrAPI) {
    getLinkToImageUnsplash();
};

//Flickr API   https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=74dacc74d86aaf8661c6a4d8d58e92e1&tags=night&extras=url_l&format=json&nojsoncallback=1

export async function getLinkToImageFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=74dacc74d86aaf8661c6a4d8d58e92e1&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    
    const img = new Image();
    img.src = data.photos.photo[randomNum].url_l;
    img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`
    };
    console.log(randomNum)
}
if (isFlickrAPI) {
    getLinkToImageFlickr();
};
