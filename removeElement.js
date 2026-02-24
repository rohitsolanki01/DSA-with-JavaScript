// LeetCode 27 — Remove Element (Full Explanation)
// 📌 Question (Explained in Simple Words)

// You are given:

// An array of numbers → nums

// A value → val

// Your task:
// 👉 Remove every occurrence of val from the array
// 👉 Do it in-place (means don’t make a new array)
// 👉 Return the new length of the array after removing val
// 👉 Anything after the new length doesn’t matter

// ❗ Very important

// You are not allowed to use filter() or create a new array

// You can only modify the original array


let removeElements = (arr,val) => {
    let x = 0 ; //for the track the postins  of the pointer for swaps 

    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] !== val){ //check that val is not equl o number
            arr[x] = arr[i]; //chage the positin of x
            x++ //and with an done +x so x value be chaged to the next element 
        }
    }
    return x; //return the x meas the index of the last element 
}


let arr = [1,3,2,5,6,7,3,6,5,3,5,3,7,3];


console.log(removeElements(arr,3));



