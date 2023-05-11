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
  } else {
    if (lives == 1) {
      //game over
    } else {
      lives = lives--;
      //show one more man part
    }
  }
}
