const arr = [1,2,3,4,5,6,7]

console.log(arr[0]); //it prnt 1 Array index starting with 0 


const sum = arr[2] + arr[4] //// it return index 2 value + index 4 value return sum of that is 8

console.log(sum);



//ou can make a mixed data type array


const arr1 = ["rohit" , 20,true,"Student",false];

console.log(arr1[0]); //retun ROhit 


//try to sum index 1 and  index 2 


const sum1 = arr1[1] + arr1[2];   // retun the 21 becuase in js true boolen value is 1 and flase 
// boolen value is 0 so any you calculate 20 + 1 it return 21 a a result 
console.log(sum1);



// you can make a array of array also in Aray

const ArrayOfArray = [12,"Rohit",true,["Student" ,20]];


console.log(ArrayOfArray[3][1]); // you can access the value of the Arr of array uing fist go throu the index when
//  the array was store adn same rule apkay for array of array also you can acess uing the index like[3][0] you can access the first key of the Array


// Objects

const obj1 = {
    name : "Rohit Solalanki",
    age : 21,
    city : "Wadhwan",
    Married : false,
    hobbies : ["Cricket","Singing","Vollyball"],
    personalInfo:{
        phineNo : 24224253,
        email:"rohit@gmail.com",
        document:["AdharCard" , "Living Celtifiate", "Licence"]
    }
}



console.log(obj1.name); //uding . you canaccess the key and get the vlaue of the keys 


console.log(obj1.hobbies[0]);


console.log(obj1.personalInfo.phineNo);
console.log(obj1.personalInfo.email);



console.log(obj1.personalInfo.document[0]);
console.log(obj1.personalInfo.document[1]);
console.log(obj1.personalInfo.document);

console.log(obj1["name"]); // you can get key uing like that but mosty people using like . then key name 

