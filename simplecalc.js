    var num1=document.getElementById("num1")
    var num2=document.getElementById("num2")
    var op=document.getElementById("operator")
    var button=document.getElementById("button")
    var result=document.getElementById("result")
   


function calculate(){
     if(num1.value==="" || num2.value===""){
        alert("Please make sure you have entered both the operands")
        result.value = "Number not Entered"
    }
    num1=Number(num1.value)
    num2=Number(num2.value)
    
    
if( op.value === '+' )
{
    result.value = num1 + num2
}else if( op.value === '-' ){
    result.value = num1 - num2
}else if( op.value === '*' ){
    result.value = num1 * num2
}else{
    result.value = num1 / num2
}
    
}