const languageBtns = document.querySelectorAll('.language__btn');

let isEN = true
export function changeButton() {
    if (isEN) {
        languageBtns.forEach(btn => btn.textContent = 'EN');
    } else {
        languageBtns.forEach(btn => btn.textContent = 'РУС');
    }
}

languageBtns.forEach(el => {
    el.addEventListener('click', function() {
        if (isEN){
            isEN = false;
            
            showGreeting('ru'); 
            getWeather('ru');
        } else {
            isEN = true;
            showGreeting('en');
            getWeather('en');
        }
        changeButton()
        showDate();
        getRandomQuotes();
        settingsTranslate();
        localStorage.setItem('language', JSON.stringify(isEN));
    })

})
