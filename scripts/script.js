async function getRandomWord() {
    const resp = await fetch("https://random-word-api.herokuapp.com/word?number=1")
    const array = await resp.json()
    const word = array[0]
    console.log(word)
    wordLength(word)
    replacLitters(word)
    // checkletters(word)
}
function wordLength(word) {
    let length = word.length
    console.log(length)
}
function replacLitters(word) {
    const blank = document.querySelector("#blanks")
    const pargraph = document.createElement("p")
    for (let i of word) {
        pargraph.textContent += ' _ '
        // console.log(i)
        blank.appendChild(pargraph)
    }

}

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click",(e) => {
        let value = btn.getAttribute('value')
        console.log(value)
        checkletters(value)
    })
})
function checkletters(value){
console.log(" value " + value)
}
getRandomWord()