const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const city = document.querySelector('.city');
let isEN=true
//  https://api.openweathermap.org/data/2.5/weather?q=Могилёв&lang=ru&appid=7e173e01f93893334b3111fb67596310&units=metric

export async function getWeather(x) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${x}&appid=7e173e01f93893334b3111fb67596310&units=metric`;
    localStorage.setItem('city', city.value);
    const res = await fetch(url);
    const data = await res.json();
    
    if (x == 'ru') {
        try {
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            weatherIcon.style.display = 'block';
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            humidity.textContent = `Влажность: ${data.main.humidity}%`;
            weatherError.textContent = '';
        } catch {
            weatherError.textContent = 'Нет информации об этом городе';
            weatherIcon.style.display = 'none';
            weatherIcon.textContent = '';
            temperature.textContent = '';
            weatherDescription.textContent = '';
            windSpeed.textContent = '';
            humidity.textContent = '';
        }
    } else {
        try {
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            weatherIcon.style.display = 'block';
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            weatherError.textContent = '';
        } catch {
            weatherError.textContent = 'No information about this city';
            weatherIcon.style.display = 'none';
            weatherIcon.textContent = '';
            temperature.textContent = '';
            weatherDescription.textContent = '';
            windSpeed.textContent = '';
            humidity.textContent = '';
        }
    }
}

export function translateWeather() {
    if (isEN) {
        getWeather('en');
    } else {
        getWeather('ru');
    }
}

city.addEventListener('change', translateWeather)