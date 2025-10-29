// function checkEligibleForVote (age){
//     if(age >=18){
//         console.log("You are Eligible for the vote");
//     }else{
//         console.log("yu are not Elegible for the vote");
        
//     }
// }


// checkEligibleForVote(18);
// checkEligibleForVote(17);




function checkVadidForVote(age){
    if(age < 0) {
        console.log("Invalid input");
        
    }else if(age < 17){
        console.log("You are not Eligble for vote");
        
    }else{
        console.log("you are Eligible for vote");
        
    }
}


checkVadidForVote(10)
checkVadidForVote(18)
checkVadidForVote(-1)


// write a funtion to check the number is even or odd


function checkNumberIsEvenOrOdd(n){
    if(n%2 == 0){ // when the number is dived  by 2 an given remender 0 so is a even number
        console.log("Number is Even");
        
    }else{ ///Nither is a odd number
        console.log("Number is Odd");
        
    }
}

checkNumberIsEvenOrOdd(3) // odd number 
checkNumberIsEvenOrOdd(10) //even number