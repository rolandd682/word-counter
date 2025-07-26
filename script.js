const modeButton = document.getElementById("mode-button");
const backgroundTheme = document.getElementById("background-black");
const titleTheme = document.getElementById("title");
const textInput = document.getElementById("text-area");
const totalCharCount = document.getElementById("total-char-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const progressBarStatus = document.getElementById("progressBars");

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
textInput.addEventListener("input", findletterDensities);

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

    const letterPercentage = letterCount / letterArray.length;

    const letterDensity = {
      [uniqueLetter]: {
        count: letterCount,
        percentage: letterPercentage,
      },
    };

    letterDensities.push(letterDensity);
  }

  // console.log(letterArray);
  // console.log(letterSet);
}

function progressBarUpdate(percentages, total) {
  // console.log(percentages);
  // console.log(total);
  // console.log(percentagesSortedByValue);
  const percentageValues = Object.entries(percentages);
  percentageValues.sort((a, b) => b[1] - a[1]);
  const sortedPercentages = Object.fromEntries(percentageValues);
  console.log(sortedPercentages);
  for (const percentageKey in sortedPercentages) {
    console.log(percentageKey);
  }
}
