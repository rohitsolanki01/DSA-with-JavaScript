



// function reverseInteger(n){
//     let  nCopy = n;
//     n = Math.abs(n);
//     let rev = 0;


//     while(n > 0){
//         let lastDigit = n % 10;
//         rev = (rev * 10) + lastDigit;

//         n = Math.floor(n /10);
//     }
//     let limit = Math.pow(2,31);

//     if(rev < - limit || rev > limit){
//         return 0
//     }

//     if(nCopy < 0){
//         return -rev
//     }
//     else {
//         return rev
//     }
// }


// console.log(reverseInteger(123));
// console.log(reverseInteger(-12345));


const reversedInteger = (n) => {
    const nCompy = n ;

    n = Math.abs(n);


    let res = 0;


    while(n > 0){
        let lastDigit = n %10;
        res = (res *10) + lastDigit;

        n = Math.floor(n/10); //removes lastDigit fromt  the number
    }
    let limit = Math.pow(2,31) //for the limit of the integer number 

    if(res < -limit || res > limit) return null

    if(nCompy < 0){
        return -res
    }else{
        return res
    }
}


console.log(reversedInteger(-12345));




const reversedIntegerOfNumber = (n) => {
    const nCompy = 0;

    n = Math.floor(n);

    let rev = 0 ;

    while(n > 0) {
        let lastDigit = n%10;
        rev = (rev * 10) + lastDigit;

        n = Math.floor(n /10);
        
    }
}


