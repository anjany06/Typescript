// Generics Intro
//one type is connected to another type that is called generic

// const fruits : Array<string> = [];
// fruits.push("Mango");
// // fruits.push(45);//invalid
// console.log(fruits);

//2nd Example
type Person = {
  name : string;
  age: number;
}

const Boy: Person = {
  name: "Subham",
  age: 56,
}
const Boy2: Person = {
  name: "Rohan",
  age: 19,
}


const fruits : Array<Person> = [{name: "Piyush", age:12}];
fruits.push(Boy)
fruits.push(Boy2)
// console.log(fruits);

//3exp of generics example with function

function merge<T, U, V>(objectA: T, objectB: U, objectC: V){
  return { ...objectA, ...objectB , ...objectC};
}

const res = merge({name:"subham"},{role:"student"},{address:"New Delhi"});
// console.log(res);


//2. Generics Contraints
//like hm ek param me sirf joh extends me likha hoga woh type hi pass kr skte hai
//example

// ager hm T ko aese hi pass krde bina kuch extends kre toh hm usne koi bhi value pass kr skte hai
function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive : V
) : //return type
{key: T, value: U, isActive: V}{
  return {key, value, isActive}
}

const obj = createObject("subham",4,true);//arguments ko parameter k hi order me hi pass krna hai
console.log(obj);



