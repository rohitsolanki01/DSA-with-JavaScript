// In JavaScript, loops are used to repeatedly run a block of code until a specific condition is met.


for(let i=0 ; i<=5;i++){
    console.log("Number" + i);
    
}



const num = 5;

for(let i =1; i<=num ; i++){
    console.log("Number" + ":" + i);
}
// how for loop works 


//  fit inittization a valrile a simple variabe like i =1
// make a cndition when the condition is true loop exucated 
// i++ mens increment i by +1



// first i = 1  i<5  log(Number:1)
//i++

//i=2 2<5 log(Number:2)
//i ++

//i=3 3<5 log(Number:3)
//i++

//i=4 4<5 log(Number:4)
//i++

//i=5 5<=5 long(Number:5)
//i++

//i=6 6<5 false  condition faild loop break stop executions




for(let i=3;i<5;i++){
    console.log("Number: "+ i);
    
}



for(let i = 2 ; i < 9 ; i = i+2){
    console.log("Hellow world" + i);
    
}


for(let i = 5 ; i >0 ; i--){
    console.log("Hii how are you" + i);
    
}

for(let i =1 ; i> 0 ; i++){ //its called infanet loop the loop never ends 
    console.log("Infanate Lopp0" + i);
    
}
 

// make a fusntion of greet  and into a for loop print in multiple time 



function greet(i){
    console.log("NamasteL:" + i);
    
}

for(let i = 0 ; i<=10 ; i++){
    greet(i)
}


let arr = [1,3,5,6,7,8,9];


for(let i = 0 ; i<arr.length;i++){
    console.log(arr[i]);
}


//while loop in javaScript


let i = 0;

while(i < 5){
    console.log("Hellow world" + i);
    i++;
    
}



const arr1 = [10,3040,50,60];


// console.log(arr1[0]);


//acess using a for loop 


for(let i = 0; i<arr1.length;i++){
    console.log(arr1[i]);
}


// Using while loop to access the array value


// let i = 0;

// while(i<arr1.length){
//     console.log(arr1[i]);
//     i++;
    
// }
