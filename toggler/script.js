const good=document.querySelector("#good")
const cheap=document.querySelector("#cheap")
const fast=document.querySelector("#fast")
const toggles=document.querySelectorAll(".toggle")

toggles.forEach((toggle)=>
    toggle.addEventListener("change",(e)=>{
        //console.log(e)
        transitionfunc(e.target)
    })
)
function transitionfunc(clickedone){
    if(good.checked && fast.checked && cheap.checked){
        if(good==clickedone){
            fast.checked =  false
        }
        if(fast==clickedone){
            cheap.checked=false
        }
        if(cheap==clickedone){
            good.checked=false
        }

    }
}