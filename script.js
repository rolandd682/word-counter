const modeButton = document.getElementById("mode-button");
const backgroundTheme = document.getElementById("background-black");
const titleTheme = document.getElementById("title");
const textInput = document.getElementById("text-area");
const totalCharCount = document.getElementById("total-char-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const progressBars = document.querySelector(".progress-bars");

function themeChange() {
  if (backgroundTheme.id === "background-white") {
    backgroundTheme.id = "background-black";
    titleTheme.id = "title-dark";
  } else {
    backgroundTheme.id = "background-white";
    titleTheme.id = "title";
  }
}

function counter() {
  //character count
  const textString = textInput.value;
  const charCount = textString.length;
  totalCharCount.textContent = charCount;
  //word count
  const wordCountArray = textInput.value.split(/\s+/);
  wordCount.textContent = wordCountArray.length - 1;
  //sentence count
  const sentenceCountArray = textInput.value.split(/[!?.]/);
  sentenceCount.textContent = sentenceCountArray.length - 1;
}

modeButton.addEventListener("click", themeChange);

textInput.addEventListener("input", counter);
textInput.addEventListener("input", renderLetterDensities);

function findletterDensities() {
  const letterDensities = [];

  const userInput = textInput.value.toUpperCase();

  const letterArray = userInput
    .split("")
    .filter((letter) => /^[A-Z]+$/.test(letter));

  const letterSet = new Set(letterArray);

  for (const uniqueLetter of letterSet) {
    const letterCount = letterArray.filter(
      (letter) => letter === uniqueLetter
    ).length;

    const letterPercentage = ((letterCount / letterArray.length) * 100).toFixed(
      2
    );

    const letterDensity = {
      [uniqueLetter]: {
        count: letterCount,
        percentage: letterPercentage,
      },
    };

    letterDensities.push(letterDensity);
  }
  return letterDensities;
}
function renderLetterDensities() {
  const letterDensities = findletterDensities();

  progressBars.innerHTML = "";

  letterDensities.sort((a, b) => {
    `const key1 = Object.keys(a)[0];`;
    const key2 = Object.keys(b)[0];
    console.log(key2);
    return a[key1].count - b[key2].count;
  });

  for (const letterDensity of letterDensities) {
    const letter = Object.keys(letterDensity)[0];
    const { count, percentage } = letterDensity[letter];

    progressBars.insertAdjacentHTML(
      "afterbegin",
      `<div class="progress-bar-container">
      <p class="progress-letter">${letter}</p>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percentage}% "></div>
      </div>
      <p class="progress-stat">${count}(${percentage})</p>
    </div>`
    );
  }
}
