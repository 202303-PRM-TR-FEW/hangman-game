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
//const cubuks = document.getElementById("cubuks");

//Man display DOM
//const mandrawing = document.getElementsByClassName("gallows").lastChild;
//mandrawing.style.display = "none";

function loadTheWord() {
  return fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    .then((response) => response.json())
    .then((response) => {
      word = response[0];
      console.log(word);
    })
    .catch((err) => console.error(err));
}
//[...word].map((x) => "_");

//Aymans alphabet part
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
  if (word.includes(lowercaseLetter)) {
    console.log("letter is in");
    //show letters on cubuks
  } else {
    if (lives == 1) {
      //game over
      console.log("game over");
    } else {
      lives--;
      currentlives.innerHTML = `You have ${lives} lives left `;
      document.getElementById(`arm-${lives}`).style.display = "block";
      //show one more man part
      //function
      // console.log("letter not here")`kol-${lives}`;
    }
  }
}
