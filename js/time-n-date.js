const time = document.querySelector('.time');
const dateNow = document.querySelector('.date');
import {showGreeting} from "./greeting.js";

let isEN = true;

export function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    if (!isEN) {
        showGreeting('ru');
    } else {
        showGreeting('en');
    } 
}

export function showDate() {
    const date = new Date();
    if (isEN) {
        let options = {weekday: 'long', month: 'long', day: 'numeric'};
        let currentDate = date.toLocaleDateString('en-US', options);
        dateNow.textContent = currentDate;
    } else {
        let options = {weekday: 'long', day: 'numeric', month: 'long',};
        let currentDate = date.toLocaleDateString('ru-RU', options);
        dateNow.textContent = currentDate;
    }
}

showTime();

