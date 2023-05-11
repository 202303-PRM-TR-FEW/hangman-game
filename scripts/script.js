let word;
let lives = 10;

const generateBtn = document.querySelector("#generatebtn");
generateBtn.addEventListener("click", loadTheWord);

function loadTheWord() {
  return fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    .then((response) => response.json())
    .then((response) => {
      word = response[0];
      console.log(word);
    })
    .catch((err) => console.error(err));
}

function letterChecker(letter) {
  if (word.includes(letter)) {
    //blabla
    //show letters on cubuks
  } else {
    if (lives == 1) {
      //game over
    } else {
      lives = lives--;
      //show one more man part
      //function
      `kol-${lives}`;
    }
  }
}

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

function ButtonClick(letter) {
  console.log(`You clicked the ${letter} button!`);
}
buttons();
