let word;
let lives = 10;
let didWin = false;

//current lives DOM
const currentlives = document.querySelector("#currentlives");
currentlives.innerHTML = `You have ${lives} lives left `;

//word generate button DOM
const generateBtn = document.querySelector("#generatebtn");
generateBtn.addEventListener("click", loadTheWord);

//cubuks DOM
const cubuks = document.querySelector("#cubuks");
cubuks.innerHTML = "-";

function loadTheWord() {
  return fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    .then((response) => response.json())
    .then((response) => {
      word = response[0];
      console.log(word);
    })
    .catch((err) => console.error(err));
}
console.log(word);
cubuks.innerHTML = [...word].map((x) => "_");
//Aymans part
function buttons() {
  const alphabetButtons = document.getElementById("buttons");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alphabet.length; i++) {
    const letterButton = document.createElement("button");
    letterButton.innerText = alphabet[i];
    letterButton.classList.add("buttons");
    letterButton.addEventListener("click", function () {
      ButtonClick(this.innerText);
    });
    alphabetButtons.appendChild(letterButton);
  }
}
buttons();

function ButtonClick(letter) {
  let lowercaseLetter = letter.toLowerCase();
  console.log(word);
  if (word.includes(lowercaseLetter)) {
    console.log("letter is in");
    //show letters on cubuks
  } else {
    if (lives == 1) {
      //game over
    } else {
      lives = lives--;
      //show one more man part
      //function
      console.log("letter not here")`kol-${lives}`;
    }
  }
}
