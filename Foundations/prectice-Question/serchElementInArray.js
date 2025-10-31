// // ✅ A function that searches for a value in an array
// // ✅ If found → return index
// // ✅ If not found → return -1

function searchElement(arr,taget){
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] === taget){
            return  i
        }
    }
    return -1
}

const arr = [20,30,40,50,10];
console.log(searchElement(arr,40));


// // take a array of strinn and make a funtion that search a string and if the streing is match retrn the index of the string and not math return the -1


function searchTheString(arr,str){
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] == str){
            return i
        }
    }
    return -1
}


const strings = ["Rohit" , "Priya" , "Sahdev" , "Diya"];

console.log(searchTheString(strings,"Priya"));



//write a  funtion that returns the numbers of negative numbers in an array





// const arr1 = [20,-10,30,-5,-6,90,-3,89,-5,-6];

// console.log(findNagativeNumber(arr1));


// // ✅ Function to Find Largest Number in an Array

function findLargestNumberInArray(arr){
    let largest = arr[0];
    for(let i=0 ; i<arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}


const arr2 = [-4,-6,-7-2];

// console.log(findLargestNumberInArray(arr2));


function findLargest(arr){
    let largest = -1;
    for(let i = 0 ; i< arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

const elm = [10,40,20,90,40,100];
console.log(findLargest(elm));





function findSmallestNumber(arr){
    let smallest = arr[0];
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] < smallest){
             smallest = arr[i]
        }
    }
    return smallest;
}


const smllArry = [3,10,5,3,1,-2];
console.log(findSmallestNumber(smllArry));



function findLargestNumberAnArray(arr){
    let lar = arr[0];
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i] > lar){
            lar = arr[i]
        }
    }
    return lar
}

const largArray = [30,40,10,100,300,200,500];

console.log(findLargestNumberAnArray(largArray));

