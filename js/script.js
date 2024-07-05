import './time-n-date.js'
import './greeting.js'
import './weather.js'
import './player.js'
import './background.js'
import './quotes.js'
import './storage.js'
import './settings.js'

export function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}