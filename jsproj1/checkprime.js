function checkprime(num){
    let count=0

    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
        if(count>2){
            return false
        }
    }
    if(count==2){
        return true
    }

}

let a=5
console.log(checkprime(a))