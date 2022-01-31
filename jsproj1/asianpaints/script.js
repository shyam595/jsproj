const reset=document.getElementById("reset-button")
const change=document.getElementById("change-button")

reset.addEventListener("click",resetGrid)
change.addEventListener("click",changeColor)


function resetGrid(){
    for(let i=1;i<=9;i++){
        const griditem=document.getElementById(i)
        griditem.style.backgroundColor = "transparent"
    }


}

function changeColor(){
    const blockid= document.getElementById("block_id")
    const colorid= document.getElementById("colour_id")
    if(!blockid.value){
        alert("please enter the block ID")
    }
    if(!colorid.value){
        alert("please enter the color ID")
    }

    resetGrid()

    const griditem=document.getElementById(blockid.value)
    griditem.style.backgroundColor = colorid.value
    blockid.value=''
    colorid.value=''
}