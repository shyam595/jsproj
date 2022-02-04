const pScore = document.getElementById("playerScore")
const cScore = document.getElementById("computerScore")
const playSelect = document.getElementById("playerSelect")
const comSelect = document.getElementById("computerSelect")

const message = document.getElementById("message")

message.innerHTML = "choose Rock, Paper or Scissors"

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

let playerScore = 0
let computerScore = 0

let gameActive = false



function gameBegins(){
    const start = document.getElementById("start")
    const boards = document.getElementById("boards")
    const select = document.getElementById("select")

    gameActive=true

    

    boards.style.display = 'flex'
    select.style.display = 'flex'


    start.style.display = 'none'
    //message.style.display = 'none'
}

function thisIsRock(x){
  let com = computerPlay()
  playSelect.innerHTML = `<i class="fas fa-hand-${x}"></i>`

  comSelect.innerHTML = `<i class="fas fa-hand-${com}"></i>`
  if(x===com){
      
    comSelect.style.color = "black"
    playSelect.style.color = "black"
    message.innerHTML = 'Draw!'
    message.style.color = 'black'
  }else if(com === 'paper'){
      computerScore++

      comSelect.style.color = "green"
      playSelect.style.color = "red"
      pScore.innerHTML = playerScore
      cScore.innerHTML = computerScore
      message.innerHTML = "Computer Wins!"
      message.style.color = 'red'
      
  }else{
      playerScore++
      comSelect.style.color = "red"
      playSelect.style.color = "green"
      pScore.innerHTML = playerScore
      cScore.innerHTML = computerScore

      message.innerHTML =  "Player wins!"
      message.style.color = 'green'
  }

  winnerIs(playerScore, computerScore)

}

function thisIsPaper(x){
    let com = computerPlay()
    playSelect.innerHTML = `<i class="fas fa-hand-${x}"></i>`
  
    comSelect.innerHTML = `<i class="fas fa-hand-${com}"></i>`
    if(x===com){
        comSelect.style.color = "black"
        playSelect.style.color = "black"
        message.innerHTML = 'Draw!'
        message.style.color = 'black'
        
    }else if(com === 'scissors'){
        computerScore++
  
        comSelect.style.color = "green"
        playSelect.style.color = "red"
        pScore.innerHTML = playerScore
        cScore.innerHTML = computerScore
        message.innerHTML = 'Computer wins!'
        message.style.color = 'red'
        
    }else{
        playerScore++
        comSelect.style.color = "red"
        playSelect.style.color = "green"
        pScore.innerHTML = playerScore
        cScore.innerHTML = computerScore
        message.innerHTML =  "Player wins!"
        message.style.color = 'green'
    }
    winnerIs(playerScore, computerScore)
  
  }

  function thisIsScissors(x){
    let com = computerPlay()
    playSelect.innerHTML = `<i class="fas fa-hand-${x}"></i>`
  
    comSelect.innerHTML = `<i class="fas fa-hand-${com}"></i>`
    if(x===com){
        comSelect.style.color = "black"
        playSelect.style.color = "black"
        message.innerHTML = 'Draw!'
        
    }else if(com === 'rock'){
        computerScore++
  
        comSelect.style.color = "green"
        playSelect.style.color = "red"
        pScore.innerHTML = playerScore
        cScore.innerHTML = computerScore
        message.innerHTML = "Computer Wins!"
        message.style.color = 'red'
        
    }else{
        playerScore++
        comSelect.style.color = "red"
        playSelect.style.color = "green"
        pScore.innerHTML = playerScore
        cScore.innerHTML = computerScore
        message.innerHTML =  "Player wins!"
        message.style.color = 'green'
    }
    winnerIs(playerScore, computerScore)
  }

function computerPlay(){
    let arr = ['rock','paper','scissors']

    let random = arr[Math.floor(Math.random()*arr.length)]
    console.log(random)
    return random;
}

function winnerIs(x,y){
    if(x===5){
        message.innerHTML = `Congratulations! you win`
        reset()
    }else if(y===5){
        message.innerHTML =  `Computer Win, you lost!`
        reset()
    }else{
        return
    }
}



function reset(){
    select.style.display = 'none'
    setTimeout(()=>{
        boards.style.display = 'none'
        start.style.display = 'block'
        message.innerHTML = 'choose Rock, Paper or Scissors'
        message.style.display = 'black'
    },3000)
    
}


// rock.addEventListener("click", thisIsRock("rock"))
// paper.addEventListener("click", thisIsPaper("paper"))
// scissors.addEventListener("click", thisIsScissors("scissors"))

