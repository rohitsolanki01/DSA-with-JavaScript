// write a funtion that check the number is palifrome or not is palidrome so return trun nighter flase



function isPalidrome(n){
    let orignal = n;
    let revers = 0;

    while(n > 0){
        let lastDigit = n % 10 ; // to get the remender of last digit;
        revers = revers * 10 + lastDigit;
        n = Math.floor( n / 10); // for removed last  elements
    }
    if(revers === orignal){
        return true
    }else{
        return false
    }
}

console.log(isPalidrome(121));
