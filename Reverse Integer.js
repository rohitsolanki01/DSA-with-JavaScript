// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//  exapli me a prpprer and witea code with proper expalination with dry run the code



function reversInteger(x){
    let xCompy = x;  // to check that number is postive or nagative
    x = Math.abs(x);  //to find last digits convert to posiive number
    let rev =0 ;  //strore revesred value

    while(x >0) {
        let lastDigit = x %10; // last digits
        rev = (rev * 10) + lastDigit;  // store lastDigit as a reversed
        x = Math.floor(x / 10) ; // revoved last digit
    }

    // fid the limit of the int

    let limit = Math.pow(2,31);

    if(rev < -limit || rev > limit) return 0;

    return (xCompy < 0) ? -rev : rev;
}


console.log(reversInteger(1234));
    