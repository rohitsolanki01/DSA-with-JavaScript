//wite a funtion that  retunr the second largest number in array 

function secondLargest(arr){
    let firstLargest = -Infinity;
    let secondLArgest = -Infinity;

    for(let i = 0 ;i <arr.length ; i++){
        if(arr[i] > firstLargest){
            secondLArgest = firstLargest;
        firstLargest = arr[i];
        }else if(arr[i] > secondLArgest && arr[i] < firstLargest){
            secondLArgest = arr[i];
        }
        
    }
    return secondLArgest;
}


const arr = [20,40,80,30,70,90];
console.log(secondLargest(arr));

//also with the fin the third largest in the aray 

function thirdLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest){
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } 
        else if(arr[i] > secondLargest && arr[i] < firstLargest){
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } 
        else if(arr[i] > thirdLargest && arr[i] < secondLargest){
            thirdLargest = arr[i];
        }
    }

    return thirdLargest;
}

const arr1 = [10, 20, 30];
let res1 = thirdLargest(arr1);
console.log(res1);



//find the second largfest number in array



// function findSecondLargestNumber(arr){
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;


//     for(let i = 0 ; i<arr.length;i++){
//         if(arr[i] > firstLargest){
//             secondLargest = firstLargest;
//             firstLargest = arr[i]
//         }
//         else if(arr[i] > secondLargest && arr[i] < firstLargest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest
// }

// let arr = [10,30,20,50,80,90]

// console.log(findSecondLargestNumber(arr));


