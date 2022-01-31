const stopwatch=document.getElementById("display")

const playButton= document.getElementById("playButton")
const pauseButton= document.getElementById("pauseButton")
const resetButton= document.getElementById("resetButton")


let startTime;
let elapsedTime = 0;
let stopwatchnterval;


function timeToString(time){

    let diffinHours = time/(3600000)
    let hh=Math.floor(diffinHours)

    let diffinMin = (diffinHours-hh)*60
    let mm=Math.floor(diffinMin)

    let diffinSec = (diffinMin-mm)*60
    let ss=Math.floor(diffinSec)

    let diffinms = (diffinSec-ss)*1000
    let ms=Math.floor(diffinms)

    let formattedHH = hh.toString().padStart(2,"0")
    let formattedMM = mm.toString().padStart(2,"0")
    let formattedSS = ss.toString().padStart(2,"0")
    let formattesMS = ms.toString().padStart(3,"0")

    stopwatch.innerHTML = `${formattedHH}:${formattedMM}:${formattedSS}:${formattesMS}`

}


function startStopwatch(){
startTime=Date.now()-elapsedTime

stopwatchnterval=setInterval(function printTime(){
    elapsedTime=Date.now()-startTime
    timeToString(elapsedTime)
},1)
showButton("PAUSE")
}

function stopStopwatch(){
clearInterval(stopwatchnterval)
showButton("PLAY")
}

function resetStopwatch(){
clearInterval(stopwatchnterval)
stopwatch.innerHTML=`00:00:00:000`
elapsedTime=0
showButton("PLAY")
}

function showButton(buttonKey){

    if(buttonKey==="PLAY"){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        playButton.style.display="none"
        pauseButton.style.display="block"
    }
}


playButton.addEventListener("click", startStopwatch)
pauseButton.addEventListener("click", stopStopwatch)
resetButton.addEventListener("click", resetStopwatch)