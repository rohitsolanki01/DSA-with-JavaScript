//wite a funtion that  retunr the second largest number in array 


function secondRargest(arr){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i =0 ; i< arr.length;i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


const arr = [20,10,40,30,10,20,90];

let res = secondRargest(arr);

console.log(res);
