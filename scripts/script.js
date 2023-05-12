const word = []
async function getRandomWord() {
    const resp = await fetch("https://random-word-api.herokuapp.com/word?number=1")
    const array = await resp.json()
    word.push(array[0])
    console.log(word)
    wordLength(word)
    replacLitters(word)
    // checkletters(word)
}
function wordLength(word) {
    let length = word.length
    console.log(length)
}

const blank = document.querySelector("#blanks")
const pargraph = document.createElement("p")
const blankInd=[]
function replacLitters(word) {

    for (let i = 0; i < word[0].length; i++) {
        
        
        blankInd[i] =' _ '
    }
    pargraph.textContent += blankInd.join('')
        blank.appendChild(pargraph)
}
console.log(blankInd)
const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = btn.getAttribute('value')
        checkletters(value)
    })
})

function checkletters(value) {
    let letter = word[0]
    let indices = [];
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === value) {
            indices.push(i);
            blankInd[i] = value
            pargraph.textContent = blankInd.join('')
    
        }
    }
}
getRandomWord()
