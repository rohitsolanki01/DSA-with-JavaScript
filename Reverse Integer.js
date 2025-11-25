



function reverseInteger(n){
    let  nCopy = n;
    n = Math.abs(n);
    let rev = 0;


    while(n > 0){
        let lastDigit = n % 10;
        rev = (rev * 10) + lastDigit;

        n = Math.floor(n /10);
    }
    let limit = Math.pow(2,31);

    if(rev < - limit || rev > limit){
        return 0
    }

    if(nCopy < 0){
        return -rev
    }
    else {
        return rev
    }
}


console.log(reverseInteger(123));
console.log(reverseInteger(-12345));
