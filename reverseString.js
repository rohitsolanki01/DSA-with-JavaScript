// 344. Reverse String
// Easy

// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


function reverseString(s){
    let len = s.length;
    let hlafLength = Math.floor(len /2);

    for(let i = 0 ; i< hlafLength ; i++){
        let temp =  s[i];
        s[i] = s[len -1 -i];
        s[len -1 -i] = temp;
    }
    return s;
}

const s = ["h","e","l","l","o"];
console.log(reverseString(s));

const s2 = ["H","a","n","n","a","h"];
console.log(reverseString(s2));

const s3 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(reverseString(s3))





// function revesedStringPrectice(s){
//     let len = s.length;
//     let hlafLength = len /2;    

//     for(let i=0 ; i< hlafLength ; i++){
//         let temp = s[i];
//         s[i] = s[len -1-i];
//         s[len-1-i] = temp;
//     }

//     return s;
// }



// let s1 = ["P" , "r" ,"i" , "i" , "y" , "a" , "a" , "a"];

// console.log(revesedStringPrectice(s1));