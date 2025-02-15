//!UNION , | -> pipe in ts

// function combine(num1: number | string | boolean, num2: number | string | boolean){
//   let result;
//   if (typeof num1 === 'number' && typeof num2 === 'number'){
//     result = num1 + num2;
//   }else{
//     result = num1.toString() + num2.toString();
//   }
//   return result; 
// }

// const sum = combine(10, 20);
// const string = combine("Subham ","pandey");
// console.log(sum, string);


//! LITERAL TYPES

// function combine(num1: number | string | boolean, num2: number | string | boolean, conversionType : "as-number" | "as-string"){
//   let result;
//   if (typeof num1 === 'number' && typeof num2 === 'number' || conversionType === "as-number"){
//     result = +num1 + +num2;
//   }else{
//     result = num1.toString() + num2.toString();
//   }
//   return result; 
// }

// const sum = combine("10", "20", "as-number");
// // const string = combine("Subham ","pandey");
// console.log(sum);



//TYPE ALIAS/ CUSTOM TYPES

type Combinable = number | string | boolean;
type conversionType = "as-number" | "as-string";
function combine(num1: Combinable, num2: Combinable, conversionType : conversionType){
  let result;
  if (typeof num1 === 'number' && typeof num2 === 'number' || conversionType === "as-number"){
    result = +num1 + +num2;
  }else{
    result = num1.toString() + num2.toString();
  }
  return result; 
}

//working with objects
type User ={
  name: string,
  age: number
  skills: string[]
} 

const user : User ={
  name: "Subham",
  age: 25,
  skills : ["react", "node"],
}

function greet(user : User){
  console.log(`hi, ${user.name}`);
  
}
greet(user);


const sum = combine("10", "20", "as-number");
// const string = combine("Subham ","pandey");
console.log(sum);