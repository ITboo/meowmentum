import { getLinkToImageFlickr, getLinkToImageUnsplash, setBg } from "./background.js";

const settingsBtn = document.querySelector('.settings__btn');
const settingsPopup = document.querySelector('.settings__popup');
const settingTitle = document.querySelector('.setting__title');
const settingItems = document.querySelectorAll('.setting__item');

const settingItemTime = document.querySelector('.setting__item_time');
const itemCheckboxTime = document.querySelector('.item__checkbox_time');
const itemNameTime = document.querySelector('.item__name_time');

const settingItemDate = document.querySelector('.setting__item_date');
const itemCheckboxDate = document.querySelector('.item__checkbox_date');
const itemNameDate = document.querySelector('.item__name_date');

const settingItemGreeting = document.querySelector('.setting__item_greeting');
const itemCheckboxGreeting = document.querySelector('.item__checkbox_greeting');
const itemNameGreeting = document.querySelector('.item__name_greeting');

const settingItemQuotes = document.querySelector('.setting__item_quotes');
const itemCheckboxQuotes = document.querySelector('.item__checkbox_quotes');
const itemNameQuotes = document.querySelector('.item__name_quotes');

const settingItemPlayer = document.querySelector('.setting__item_player');
const itemCheckboxPlayer = document.querySelector('.item__checkbox_player');
const itemNamePlayer = document.querySelector('.item__name_player');

const settingItemWeather = document.querySelector('.setting__item_weather');
const itemCheckboxWeather = document.querySelector('.item__checkbox_weather');
const itemNameWeather = document.querySelector('.item__name_weather');

const btnGh = document.querySelector('.btn__gh');
const btnFlickr = document.querySelector('.btn__flickr');
const btnUnsplash = document.querySelector('.btn__unsplash');

const itemТameЕag = document.querySelector('.item__name_tag');
const quotesContainer = document.querySelector('.footer__center');

const itemNameLanguage = document.querySelector('.item__name_language');
const itemNameBg = document.querySelector('.item__name_bg');

const tagPhoto = document.querySelector('.tag');
const time = document.querySelector('.time');
const dateNow = document.querySelector('.date');
const greetingContainer = document.querySelector('.greeting-container');
const player = document.querySelector('.player');
const weather = document.querySelector('.weather');

let state = {
    time: true,
    date: true,
    greeting: true,
    quotes: true,
    player: true,
    weather: true,
}

let isEN = true;

let isGhImage = true;
let isFlickrAPI = false;
let isUnsplashAPI = false;

settingsBtn.addEventListener('click', function() {  // открываю настройки на кнопку 
    settingsPopup.classList.toggle('settings__popup_active');
    settingItems.forEach(el => {
        el.classList.toggle('setting__item_active');
    })
    settingTitle.classList.toggle('setting__item_active');
    settingsBtn.classList.toggle('settings__btn_active');
}); 

document.addEventListener( 'click', (e) => {  // скрываю настройки т к клик был за его пределами
	const withinBoundaries = e.composedPath().includes(settingsPopup);
    const withinBoundaries2 = e.composedPath().includes(settingsBtn);

	if ( ! withinBoundaries && ! withinBoundaries2 ) {
		settingsPopup.classList.remove('settings__popup_active');
        settingItems.forEach(el => {
            el.classList.remove('setting__item_active');
        })
        settingTitle.classList.remove('setting__item_active');
        settingsBtn.classList.remove('settings__btn_active');
	}
})

export function stateTime() {
    if (state.time) {
        itemCheckboxTime.classList.remove('item__checkbox_deactive');
        time.style.visibility = 'visible';
        time.style.opacity = '1';
    } else {
        itemCheckboxTime.classList.add('item__checkbox_deactive');
        time.style.visibility = 'hidden';
        time.style.opacity = '0';
    }
}

settingItemTime.addEventListener('click', function() {
    time.style.transition = '0.8s';
    if (state.time) {
        state.time = false;
        stateTime()
    } else {
        state.time = true;
        stateTime()
    }
    localStorage.setItem('state', JSON.stringify(state));

})

// дата
export function stateDate() {
    if (state.date) {
        itemCheckboxDate.classList.remove('item__checkbox_deactive');
        dateNow.style.visibility = 'visible';
        dateNow.style.opacity = '1';
    } else {
        itemCheckboxDate.classList.add('item__checkbox_deactive');
        dateNow.style.visibility = 'hidden';
        dateNow.style.opacity = '0';
    }
}

settingItemDate.addEventListener('click', function() {
    dateNow.style.transition = '0.8s';
    if (state.date) {
        state.date = false;
        stateDate()
    } else {
        state.date = true;
        stateDate()
    }
    localStorage.setItem('state', JSON.stringify(state));

})

// приветсвие
export function stateGreeting() {
    if (state.greeting) {
        itemCheckboxGreeting.classList.remove('item__checkbox_deactive');
        greetingContainer.style.visibility = 'visible';
        greetingContainer.style.opacity = '1';
    } else {
        itemCheckboxGreeting.classList.add('item__checkbox_deactive');
        greetingContainer.style.visibility = 'hidden';
        greetingContainer.style.opacity = '0';
    }
}

settingItemGreeting.addEventListener('click', function() {
    greetingContainer.style.transition = '0.8s';
    if (state.greeting) {
        state.greeting = false;
        stateGreeting()
    } else {
        state.greeting = true;
        stateGreeting()
    }
    localStorage.setItem('state', JSON.stringify(state));

})

// цитаты
export function stateQuotes() {
    if (state.quotes) {
        itemCheckboxQuotes.classList.remove('item__checkbox_deactive');
        quotesContainer.style.visibility = 'visible';
        quotesContainer.style.opacity = '1';
    } else {
        itemCheckboxQuotes.classList.add('item__checkbox_deactive');
        quotesContainer.style.visibility = 'hidden';
        quotesContainer.style.opacity = '0';
    }
}

settingItemQuotes.addEventListener('click', function() {
    quotesContainer.style.transition = '0.8s';
    if (state.quotes) {
        state.quotes = false;
        stateQuotes()
    } else {
        state.quotes = true;
        stateQuotes()
    }
    localStorage.setItem('state', JSON.stringify(state));

})
// плеер
export function statePlayer() {
    if (state.player) {
        itemCheckboxPlayer.classList.remove('item__checkbox_deactive');
        player.style.visibility = 'visible';
        player.style.opacity = '1';
    } else {
        itemCheckboxPlayer.classList.add('item__checkbox_deactive');
        player.style.visibility = 'hidden';
        player.style.opacity = '0';
    }
}

settingItemPlayer.addEventListener('click', function() {
    player.style.transition = '0.8s';
    if (state.player) {
        state.player = false;
        statePlayer()
    } else {
        state.player = true;
        statePlayer()
    }
    localStorage.setItem('state', JSON.stringify(state));

})

// погода
export function stateWeather() {
    if (state.weather) {
        itemCheckboxWeather.classList.remove('item__checkbox_deactive');
        weather.style.visibility = 'visible';
        weather.style.opacity = '1';
    } else {
        itemCheckboxWeather.classList.add('item__checkbox_deactive');
        weather.style.visibility = 'hidden';
        weather.style.opacity = '0';
    }
    localStorage.setItem('state', JSON.stringify(state));
}

settingItemWeather.addEventListener('click', function() {
    weather.style.transition = '0.8s';
    if (state.weather) {
        state.weather = false;
        stateWeather()
    } else {
        state.weather = true;
        stateWeather()
    }
    localStorage.setItem('state', JSON.stringify(state));
})

// перевожу настройки
export function settingsTranslate() {
    if (isEN) {
        itemNameTime.textContent = 'Time';
        itemNameDate.textContent = 'Date';
        itemNameGreeting.textContent = 'Greeting';
        itemNameQuotes.textContent = 'Quotes';
        itemNamePlayer.textContent = 'Player';
        itemNameWeather.textContent = 'Weather';
        itemNameLanguage.textContent = 'Language:';
        settingTitle.textContent = 'Settings';
        itemNameBg.textContent = 'Photo source:';
        itemТameЕag.textContent = 'Photo tag:';
        tagPhoto.placeholder = 'Enter your tag';
    } else {
        itemNameTime.textContent = 'Время';
        itemNameDate.textContent = 'Дата';
        itemNameGreeting.textContent = 'Приветстие';
        itemNameQuotes.textContent = 'Цитаты';
        itemNamePlayer.textContent = 'Плеер';
        itemNameWeather.textContent = 'Погода';
        itemNameLanguage.textContent = 'Язык:';
        settingTitle.textContent = 'Настройки';
        itemNameBg.textContent = 'Источник фото:';
        itemТameЕag.textContent = 'Тег для фото:';
        tagPhoto.placeholder = 'Введите ваш тег';
    }
}

// выбор фона на кнопки

btnGh.classList.add('item__btn_active');

btnGh.addEventListener('click', function() {
    btnGh.classList.add('item__btn_active');
    btnFlickr.classList.remove('item__btn_active');
    btnUnsplash.classList.remove('item__btn_active');
    if (!isGhImage) {
        isGhImage = true;
        isFlickrAPI = false;
        isUnsplashAPI = false;
    }
    setBg();
})

btnFlickr.addEventListener('click', function() {
    btnFlickr.classList.add('item__btn_active');
    btnGh.classList.remove('item__btn_active');
    btnUnsplash.classList.remove('item__btn_active');
    if (!isFlickrAPI) {
        isFlickrAPI = true;
        isGhImage = false;
        isUnsplashAPI = false;
    }
    getLinkToImageFlickr();
})

btnUnsplash.addEventListener('click', function() {
    btnUnsplash.classList.add('item__btn_active');
    btnGh.classList.remove('item__btn_active');
    btnFlickr.classList.remove('item__btn_active');
    if (!isUnsplashAPI) {
        isUnsplashAPI = true;
        isFlickrAPI = false;
        isGhImage = false;
    }
    getLinkToImageUnsplash();
})

