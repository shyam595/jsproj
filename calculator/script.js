 let displayxyz = document.getElementById("display")

 let buttonsxyz = (document.getElementsByClassName("btn"))
console.log(buttonsxyz)
console.log(typeof(buttonsxyz))
// btnxyz

function clickingxyz(btnxyz){
    btnxyz.addEventListener("click",(xyz)=>{
        console.log(xyz)
        switch(xyz.target.innerText){
            case 'C':
                displayxyz.innerText = ""
                break
            case '←':
                displayxyz.innerText = displayxyz.innerText.slice(0,-1)
                break
            case '=':
                try{
                    displayxyz.innerText = eval(displayxyz.innerText)
                    // djfbdj
                    // diuhjdbjh
                }catch{
                    displayxyz.innerText="Error"
                }
                break
            default:
                displayxyz.innerText = display.innerText + xyz.target.innerText
                break
        }
    })
}
console.log(buttonsxyz)
Object.entries(buttonsxyz).map(([k,v])=>clickingxyz(v))

// buttonsxyz.map(abcdxyz=>clickingxyz(abcdxyz));

// function isOpxyz(opxyz){
//     if(opxyz==="+" || opxyz==='-' || opxyz==='/' || opxyz==='*')
//         return true
//     return false
// }
// function clickingxyz(clickedxyz){
//     if(displayxyz.innerText===""){
//         if(clickedxyz!='0'){
//             displayxyz.innerText = displayxyz.innerText+clickedxyz
//         }
//     }else{
//         // Just to make sure that 2 operators don't come in consecutive positions
//         if(isOpxyz(clickedxyz) && isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1])){
//             displayxyz.innerText = displayxyz.innerText.slice(0,-1)
//         }
//         displayxyz.innerText = displayxyz.innerText+clickedxyz
//     }
// }

// function evalxyz(){
//     try{
//         displayxyz.innerText = eval(displayxyz.innerText)
//     }catch(err){
//         displayxyz.innerText="Error"
//     }
// }

// function clearxyz(){
//     displayxyz.innerText = ""
// }

// function backxyz(){
//     displayxyz.innerText = displayxyz.innerText.slice(0,-1)
// }