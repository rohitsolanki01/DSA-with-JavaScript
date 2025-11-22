// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//  exapli me a prpprer and witea code with proper expalination with dry run the code



// function reverseInteger(n){
//     let nCompy = n ;
//     n = Math.abs(n);
//     let reversed = 0;

//     while(n > 0){
//         let lastDigit = n % 10; // to find the last digit and also a remender
//         reversed = (reversed * 10) + lastDigit; //add last digit in the reversed 
//         n = Math.floor(n/10) // removed last digit in number
//     }

//     //find the limit of the int 

//     let limit = Math.pow(2,31); // 2347434 something limt of int

//     if(reversed < -limit || reversed > limit) return 0;

//     return (nCompy < 0) ? -reversed : reversed;
// }


// console.log(reverseInteger(-12345))







//prectivce of the reversed integer from your side also 

// function revesedInteger(n) {
//     let nCompy = n ;
//     n = Math.abs(n);
//     let reversed = 0;


//     while(n > 0){
//         let lastDigit = n %10 ; //to find the last digit or rimender of the number 
//         reversed = (reversed * 10) + lastDigit ; // store last digi in revered 
//         n = Math.floor(n / 10) ; //removed the number
//     }
//     let limit = Math.pow(2,31) // to find the range of the integer

//     if(reversed < - limit || reversed > limit) return 0;

//     return (nCompy < 0) ? -reversed : reversed
// }


// console.log(revesedInteger(-12345));



//revesred the integer in  the number 


// function reveredInteger(n){
//     let NumberCompy = n;

//     n = Math.abs(n);

//     let rev = 0;

//  while(n > 0) {
//      let lastNumeber = n % 10;

//      rev = (rev * 10) + lastNumeber;

//      n = Math.floor(n /10); // removed the number
//  }


//  let limit = Math.pow(2,31); // to find the limit of the integer

//  if(rev < -limit || rev > limit) return 0;

//  return (NumberCompy < 0) ? -rev : rev;
// }



// console.log(reveredInteger(-12345));





//reverse the integer in the number


function reversedInteger(n){
    let nCompy = n ;
    n = Math.abs(n);

    let rev = 0 ;
      

    while(n > 0){
        let lastDidit = n % 10;
        rev = (rev * 10) + lastDidit;

        n = Math.floor(n / 10); // removed the number
    }

    let limit = Math.pow(2,31);

    if(rev < - limit || rev > limit) return 0;

    return (nCompy < 0) ? -rev : rev;
}


console.log(reversedInteger(-12345));
