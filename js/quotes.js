import { getRandomNum } from "./script.js";
const textQuotes = document.querySelector(".quote");
const authorQuotes = document.querySelector(".author");
const buttonQuotes = document.querySelector(".change-quote");

let randomQuotes;
let isEN = true;

export async function getQuotes() {
  const quotes = "assets/quotes.json";
  const res = await fetch(quotes);
  const data = await res.json();

  if (isEN) {
    randomQuotes = getRandomNum(0, 19);
  } else {
    randomQuotes = getRandomNum(20, 39);
  }

  textQuotes.textContent = `"${data[randomQuotes].text}"`;
  authorQuotes.textContent = `${data[randomQuotes].author}`;
}
getQuotes();

export function getRandomQuotes() {
  if (isEN) {
    randomQuotes += 1;
    if (randomQuotes > 19) {
      randomQuotes = 0;
    }
  } else {
    randomQuotes -= 1;
    if (randomQuotes < 20) {
      randomQuotes = 39;
    }
  }
  getQuotes();
}

buttonQuotes.addEventListener("click", getRandomQuotes);
