const quote = document.querySelector(".quote");
const author = document.querySelector(".author-name");
const generate = document.querySelector(".generate");
const speach = document.querySelector(".speach");
const copy = document.querySelector(".copy");
const twiter = document.querySelector(".twiter");

const generateQuote = function () {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quote.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${result.content} <i class="fa-solid fa-quote-right"></i>`;
      author.innerHTML = `-${result.author}`

      localStorage.setItem('lastQuote', JSON.stringify(result));
    });
};



document.addEventListener('DOMCOnthentLoaded', generateQuote)

generate.addEventListener("click", generateQuote);


