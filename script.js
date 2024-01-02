const quote = document.querySelector(".quote");
const author = document.querySelector(".author-name");
const generateBtn = document.querySelector(".generate");
const speakBtn = document.querySelector(".speach");
const copyBtn = document.querySelector(".copy");
const twiterBTn = document.querySelector(".twiter");

let speech = null;

const generateQuote = function () {
  QuoteReader();
  copyBtn.classList.remove("copyBtn");
  generateBtn.classList.add("loading");
  generateBtn.innerHTML = "Loading...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quote.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${result.content} <i class="fa-solid fa-quote-right"></i>`;
      author.innerHTML = `-${result.author}`;
      generateBtn.classList.remove("loading");
      generateBtn.innerHTML = "NEW QUOTE";

      //   localStorage.setItem("lastQuote", JSON.stringify(result));
    });
};

// window.addEventListener("DOMcontentLoaded", generateQuote);

const QuoteReader = function () {
  if (speech && speechSynthesis) {
    speechSynthesis.cancel();
    speech = null;
    return;
  }
  speech = new SpeechSynthesisUtterance(
    `${quote.innerText} by ${author.innerText}`
  );
  speech.rate = 0.5;
  speechSynthesis.speak(speech);
};

speakBtn.addEventListener("click", QuoteReader);

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(`"${quote.innerText}"`);
  copyBtn.classList.add("copyBtn");
});

generateBtn.addEventListener("click", generateQuote);
