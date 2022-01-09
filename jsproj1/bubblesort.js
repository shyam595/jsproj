
function bubblesort(arr){

    for(let i=0;i<arr.length;i++){

        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
            
        }



    }

    return arr

}
let arr=[7,8,9,3,6,2,1,4]
console.log(bubblesort(arr))