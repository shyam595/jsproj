let a=56
convertBinary(a)

function convertBinary(a){
    let b=""
    while(a!=1){
        b+=a%2
        a=Math.floor(a/2)
    }
    console.log(b)
}