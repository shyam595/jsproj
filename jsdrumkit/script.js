const keys = document.querySelectorAll(".key")


function removeTransition(e){
    if(e.propertyName != 'transform'){
        return
    }

    e.target.classList.remove("playing")
}

keys.forEach(key=>key.addEventListener("transitionend",removeTransition))


window.addEventListener("keydown",playSound)


function playSound(e){
    console.log(e)
    const code = e.keyCode
    console.log(code)
    const audio= document.querySelector(`audio[data-key="${code}"]`)
    const key = document.querySelector(`div[data-key="${code}"]`)

    if(!audio){
        return
    }
    key.classList.add("playing")
    audio.currentTime=0
    audio.play()
}