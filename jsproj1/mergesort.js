function divide(arr, left, right){
    
    if(left>=right){
        return ;
    }
    let mid=Math.floor(arr.length/2)
    divide(arr, left, mid)
    
    divide(arr,mid+1,right)
    

}

function merge(arr, left, right, mid){

}


function mergesort(arr){
    
    return divide(arr,0, arr.length-1)

}


let arr=[54,67,34,52,87,21,23,11,3,4]
mergesort(arr)