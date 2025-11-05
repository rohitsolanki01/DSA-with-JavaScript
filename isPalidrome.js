// write a funtion that check the number is palifrome or not is palidrome so return trun nighter flase

 function isPalidrome(n){

    if(n < 0) return false;
    let orignal = n;
    let reverse = 0;

    while(n > 0){
        let  digit = n % 10 // for remeneder
        reverse = reverse * 10 + digit;
        n = Math.floor( n / 10);
    }
    if(orignal === reverse){
        return true
    }
    return false
 }

//  console.log(isPalidrome(-121));
 console.log(isPalidrome(323));
 