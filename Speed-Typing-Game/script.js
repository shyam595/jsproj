const random_quote_API = 'https://type.fit/api/quotes'

const quoteDisplay = document.getElementById("quoteDisplay")
const quoteInput = document.getElementById("quoteInput")
const timer = document.getElementById("timer")
const start = document.getElementById("start")

start.addEventListener("click", ()=>{
    document.querySelector(".home").style.display = 'none'
    timer.style.display = 'flex'
    document.querySelector(".container").style.display = 'block'
    getNextQuote()
})

quoteInput.addEventListener('input', ()=>{
    const arrOfQuote = quoteDisplay.querySelectorAll("span")
    const arrOfInput = quoteInput.value.split('')

    let correct = true
    arrOfQuote.forEach((charSpan , index) =>{
        const charachter = arrOfInput[index]
        if(charachter == null){
            charSpan.classList.remove("correct")
            charSpan.classList.remove("incorrect")
            correct = false
        }else if(charachter === charSpan.innerText){
            charSpan.classList.add("correct")
            charSpan.classList.remove("incorrect")
            correct = true
        }else{
            charSpan.classList.remove("correct")
            charSpan.classList.add("incorrect")
            correct = false
        }
    })

    if(correct) getNextQuote()
})

async function getRandomQuote(){
    const response = await fetch(random_quote_API)
    apiQuotes = await response.json()
    return apiQuotes[Math.floor(Math.random()*apiQuotes.length)].text
}

async function getNextQuote(){
    const quote = await getRandomQuote()
    quoteDisplay.innerHTML = ''
    quote.split('').forEach(charachter => {   
        const charSpan = document.createElement("span")
        charSpan.innerText = charachter
        quoteDisplay.appendChild(charSpan)
    })
    quoteInput.value = null
    startTimer()

} 

let startTime
function startTimer(){
    timer.innerText = 0
    startTime = new Date
    setInterval(()=> {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime(){
    return Math.floor((new Date() - startTime )/1000)
}

