const wordLetters = document.getElementById("word-letters");
const alphabet = document.getElementById("alphabet");
const letterButtons = document.querySelectorAll(".button");
const deadMessage = document.getElementById("dead-message");
const winMessage = document.getElementById("win-message");
deadMessage.style.display = "none";
winMessage.style.display = "none";

async function fetchData() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await response.json();
  let word = data[0];

  console.log(word); //SELECTED WORD

  const wordLength = word.length;

  let line;

  for (let i = 0; i < word.length; i++) {
    line = document.createElement("p");
    line.textContent = "_";
    wordLetters.appendChild(line);
    line.id = i;
    line.classList.add("line");
  }

  let counter = 10;
  let lines = document.querySelectorAll(".line");
  let counterCue = [];

  for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", function () {
      letterButtons[i].disabled = true;
      let checkLetter = letterButtons[i].textContent;
      
      for (let j = 0; j < word.length; j++) {
        const wordLetter = word[j];

        console.log(wordLetter); //THE CURRENT LETTER OF SELECTED WORD

        if (checkLetter === wordLetter) {

          console.log(checkLetter); // THE CURRENT CLICKED LETTER

          for (m = 0; m < lines.length; m++) {
            if (lines[m].id == j) {
              lines[m].textContent = checkLetter;
              counterCue.push(1);
            }
          }
        }
        else {
            counterCue.push(0);
        }
      }

      if(!counterCue.includes(1)) {
        counter--;
      }
      counterCue = [];
      let correctLines = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].textContent != "_") {
          correctLines++;
        }
      }
      console.log(correctLines); // NUMBER OF CORRECT LETTERS
      console.log(counter);
      if (counter == 0 && correctLines != lines.length) {
        deadMessage.style.display = "block";
        console.log("here");
      } else if (counter == 10 && correctLines == lines.length) {
        winMessage.style.display = "block";
      }
    });
  }
}

fetchData();
