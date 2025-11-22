// write funtion that retun the count of digits in a nyumber


function countDigits(n){
    let count = 0;

    while(n > 0){
        n = Math.floor(n / 10); // to delea a  last number 
        count++; //  incress the count 
    }
    return count ;
}



// console.log(countDigits(123456));


// // function countDigits(n){
// //     let count = 0;

// //     while(n >0){
// //         n = (Math.floor(n / 10));
// //         count ++;
// //     }
// //     return count
// // }

// console.log(countDigits(123456789))



// write a funtion that count a digt and return the count


function countDigit(n){
 let count = 0 ;
    while(n > 0){
        n = Math.floor(n /10);
        count++
    }
    return count;
}


console.log(countDigit(1234));
