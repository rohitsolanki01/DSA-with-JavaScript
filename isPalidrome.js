// // // // write a funtion that check the number is palifrome or not is palidrome so return trun nighter flase



// // // // function isPalidrome(n){
// // // //     let orignal = n;
// // // //     let revers = 0;

// // // //     while(n > 0){
// // // //         let lastDigit = n % 10 ; // to get the remender of last digit;
// // // //         revers = revers * 10 + lastDigit;
// // // //         n = Math.floor( n / 10); // for removed last  elements
// // // //     }
// // // //     if(revers === orignal){
// // // //         return true
// // // //     }else{
// // // //         return false
// // // //     }
// // // // }

// // // // console.log(isPalidrome(121));



// // // function isPalidrome(n){
// // //     let orignal = n;

// // //     if(n < 0) return null;

// // //     let rev = 0 ;



// // //     while(n > 0){
// // //         let lastDigit = n %10; // for the last digit find

// // //         rev = (rev * 10) + lastDigit;
// // //         n = Math.floor(n /10) // to  removed the last digit 
// // //     }

// // //     if (rev === orignal) {
// // //         return true
// // //     }else {
// // //         return false
// // //     }
// // // }


// // // console.log(isPalidrome(12132));



// // //write a funtion that check is number is palidrome or not




// // function isPalidrome(n){
// //     let orignal = n;

// //     if (n < 0) return null;

// //     let rev = 0;

// //     while(n >0){
// //         let  lastDigit = n % 10;
        
// //         rev = (rev * 10) + lastDigit;
// //         n = Math.floor(n / 10); // delete the number 
// //     }
// //     if(rev === orignal){
// //         return true
// //     }else{
// //         return false
// //     }
// // }


// // console.log(isPalidrome(121));
// // console.log(isPalidrome(-121));
// // console.log(isPalidrome(10));
// // console.log(isPalidrome(12321));





// // write a funtion that check the number is palidrome or not 




// function isPalidrome(n){
//     let orignal = n;
//     let rev = 0;

//     if(n < 0) return null;

//     while(n > 0){
//         let lastDidit = n % 10;

//         rev = (rev * 10) + lastDidit;

//         n = Math.floor(n /10); // removed the number
//     }
//     if(rev === orignal){
//         return true
//     }else{
//         return false;
//     }
// }


// console.log(isPalidrome(121));
// console.log(isPalidrome(-121));
// console.log(isPalidrome(10));
// console.log(isPalidrome(12321));

//this is the final code of the solutions 

function isPalidrome(n){
    let orignal = n;

    if(n < 0) return null;

    let rev  = 0;


    while(n > 0){
        let lastDigit = n % 10;
        rev = (rev * 10) + lastDigit;
        n = Math.floor( n / 10);
    }

    if(rev === orignal){
        return true
    }
    else{
        return false
    }
}

console.log(isPalidrome(121));
console.log(isPalidrome(-121));
console.log(isPalidrome(12332133))