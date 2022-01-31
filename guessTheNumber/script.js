const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses") //previous guesses
const remaining = document.querySelector(".lastResult")
const startOver = document.querySelector(".resultParas")
const lowOrHi = document.querySelector(".lowOrHi")


let previousGuesses = []
let numGuesses =0

let randonNumber = parseInt(Math.random()*100+1)
let maxGuesses = 10

submit.addEventListener("click", function(e){
    e.preventDefault()

    const guess = parseInt(userInput.value)
    validateGuess(guess)
})

function validateGuess(guess){
    previousGuesses.push(guess)

    if(previousGuesses.length === maxGuesses){
        displayGuesses(guess)
        displayMsg(`Game Over! Actual Number is ${randonNumber}`)
        endGame()
    }else{
        displayGuesses(guess)
        checkGuess(guess)
    }
}

function displayGuesses(guess){
    guessSlot.innerHTML += `${guess} `
    userInput.value = ''
    numGuesses++

    let remainingGuesses = maxGuesses - numGuesses

    if(remainingGuesses < 0){
        remainingGuesses=0
    }
    remaining.innerHTML = remainingGuesses
}


function displayMsg(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}


function checkGuess(guess){
    if(guess===randonNumber){
        displayMsg(`You are Right!!!`)
        endGame()
    }else if(guess<randonNumber){
        displayMsg(`Too Low! Try another number`)
    }else{
        displayMsg(`Too High! Try another number`)
    }
}


const pE1 = document.createElement("p")
function endGame(){
    userInput.value=""
    pE1.classList.add("button")
    pE1.style.cursor="pointer"
    pE1.innerHTML = `<h1 onClick=newGame()> Start New Game </h1>`
    startOver.append(pE1)
    submit.disabled = true
}

function newGame(){
    location.reload()
}