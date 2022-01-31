const liters=document.getElementById("liters")
const percentage=document.getElementById("percentage")
const remained=document.getElementById("remained")
const smallCups=document.querySelectorAll(".cup-small")

smallCups.forEach((cup,index)=>{
    cup.addEventListener("click",()=>highlightCups(index))
})

updateBigCup()

function highlightCups(index){

    if(index===(smallCups.length-1) && smallCups[index].classList.contains("full")){
        index--;
    }

    else if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index--;
    }

    smallCups.forEach((cup, localIndex)=>{
        if(localIndex<=index){
            cup.classList.add("full")

        }
        else{
            cup.classList.remove("full")
        }
    })
    updateBigCup()
}


function updateBigCup(){

    const fullcups= document.querySelectorAll(".cup-small.full").length

    const totalCups = smallCups.length

    if(fullcups===0){
        percentage.style.visibility='hidden'
        percentage.style.height=0
    }else{
        percentage.style.visibility='visible'
        percentage.innerText= `${fullcups/totalCups * 100}%`
        percentage.style.height=`${fullcups/totalCups*330}px`
    }

    if(fullcups===totalCups){
        remained.style.visibility='hidden'
        remained.style.height=0
    }else{
        remained.style.visibility='visible'
        liters.innerText=`${2-(250*fullcups/1000)}L`
    }

}