const greeting = document.querySelector('.greeting');
export const yourName = document.querySelector('.name');

export function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    
    if (hours < 6) {
        return ['night', 'Доброй ночи,']
    } else if (hours < 12) {
        return ['morning', 'Доброе утро,']
    } else if (hours < 18) {
        return ['afternoon', 'Добрый день,']
    } else {
        return ['evening', 'Добрый вечер,']
    }
}

export function showGreeting(lang) {
    const timeOfDay = getTimeOfDay();
    const greetingTranslation = {
        en: `Good ${timeOfDay[0]},`,
        ru: `${timeOfDay[1]}`
    }

    if (lang == 'ru'){
        greeting.textContent = `${greetingTranslation.ru}`
        yourName.placeholder = '[Введите имя]';
    } else {
        greeting.textContent = `${greetingTranslation.en}`;
        yourName.placeholder = '[Enter name]';
    }
}
yourName.addEventListener('change', function(e) {
    localStorage.setItem("name", e.target.value)
})
