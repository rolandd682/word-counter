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
textInput.addEventListener("input", findletterDensity);

function findletterDensity() {
  const letterObject = {};
  // const upperCaseLetters = textInput.value.toUpperCase();
  // for (let i = 0; i < upperCaseLetters.length; i++) {
  //   char = upperCaseLetters[i];
  //   if (char >= "A" && char <= "Z") {
  //     letterObject[char] = (letterObject[char] || 0) + 1;
  //   }
  //   // console.log(letterObject);
  //   const totalLetters = Object.values(letterObject).reduce(
  //     (sum, count) => sum + count,
  //     0
  //   );

  //   const letterPercentages = {};
  //   for (const char in letterObject) {
  //     letterPercentages[char] = (letterObject[char] / totalLetters) * 100;
  //   }
  //   // console.log(letterPercentages);
  //   progressBarUpdate(letterPercentages, totalLetters);
  // }
  const userInput = textInput.value.toUpperCase();
  const letterArray = userInput
    .split("")
    .filter((letter) => /^[A-Z]+$/.test(letter));
  for (const letter of letterArray) {
    if (letterObject.hasOwnProperty(letter)) {
      letterObject[letter].count = letterObject[letter].count + ~1;
    } else {
      letterObject[letter] = { count: 1 };
    }
  }
  console.log(letterObject);
}

function progressBarUpdate(percentages, total) {
  // console.log(percentages);
  // console.log(total);
  // console.log(percentagesSortedByValue);
  const percentageValues = Object.entries(percentages);
  percentageValues.sort((a, b) => b[1] - a[1]);
  const sortedPercentages = Object.fromEntries(percentageValues);
  console.log(sortedPercentages);

  // for (){

  // }
}
