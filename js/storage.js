import { yourName } from "./greeting.js";
import { getWeather, translateWeather } from "./weather.js";
import { showDate, showTime } from "./time-n-date.js";
import { getRandomQuotes } from "./quotes.js";
import { changeButton } from "./translation.js";
import {
  settingsTranslate,
  stateTime,
  stateDate,
  stateGreeting,
  statePlayer,
  stateQuotes,
  stateWeather,
} from "./settings.js";

const city = document.querySelector(".city");
let state = {
  time: true,
  date: true,
  greeting: true,
  quotes: true,
  player: true,
  weather: true,
};
let isEN = true;

export function getSettings() {
  const localStorageName = localStorage.getItem("name");
  const localStorageCity = localStorage.getItem("city");
  const localStorageLanguage = localStorage.getItem("language");
  const localStorageStateData = localStorage.getItem("state");

  if (localStorageName) {
    yourName.value = localStorageName;
  }
  if (localStorageCity) {
    city.value = localStorageCity;
    getWeather();
  } else {
    city.value = "Minsk";
    getWeather();
  }
  if (localStorageLanguage) {
    isEN = JSON.parse(localStorageLanguage);
    translateWeather();
    showDate();
    showTime();
    getRandomQuotes();
    changeButton();
    settingsTranslate();
  }

  if (localStorageStateData) {
    state = JSON.parse(localStorageStateData);
    stateTime();
    stateDate();
    stateGreeting();
    stateQuotes();
    statePlayer();
    stateWeather();
  }
}
getSettings();
