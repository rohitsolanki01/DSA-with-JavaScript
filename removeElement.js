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


// let removeElements = (arr,val) => {
//     let x = 0 ; //for the track the postins  of the pointer for swaps 

//     for(let i =0 ; i < arr.length ; i++){
//         if(arr[i] !== val){
//             arr[x] = arr[i];
//             x++
//         }
//     }
//     return x;
// }


// let arr = [1,3,2,5,6,7,3,6,5,3,5,3,7,3];


// console.log(removeElements(arr,3));



function removeselementsFromAnArray(arr,val){
    let x = 0 ;

    for(let i =0 ; i< arr.length;i++){
        if(arr[i] !== val){
            arr[x] = arr[i];
            x++;
        }
    }
    return x;
}



let arr = [1,2,3,4,5,2,8,2,9,2,10]
console.log(removeselementsFromAnArray(arr,2));





function removesElemt(nums,val){
    let x = 0;

    for(let i = 0 ; i< nums.length ; i++){
        if(nums[i] !== val){
            nums[x] = nums[i];
            x++;
        
        }
    }
    return x;
}

const arr2 = [1,2,3,4,5,2,8,2,9,2,10]
console.log(removesElemt(arr2,2));