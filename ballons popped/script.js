const container = document.querySelector(".balloon-container")
const numBalloons = 25
let popped = 0
for(let i=1; i<=numBalloons;i++){
    const divE1 = document.createElement("div")

    divE1.classList.add("balloon")
    divE1.innerText= "POP!"
    const randomColor = getColor()
    divE1.style.backgroundColor = `${randomColor}`
    divE1.style.color = `${randomColor}`

    divE1.addEventListener("mouseenter", function(){
        if(divE1.style.backgroundColor != "transparent"){
            popped++
        }
        divE1.style.backgroundColor = "transparent"
        checkAllPopped()
    })
    container.appendChild(divE1)
}

function checkAllPopped(){
    if(popped===25){
        document.querySelector(".zero-balloon").style.display = "block"
       
        container.innerHTML = ''
    }
}


function getColor(){
    return `rgb(${random(255)},${random(255)},${random()})`
}

function random(num){
    let val= Math.floor(Math.random()*255)
    return val
}

