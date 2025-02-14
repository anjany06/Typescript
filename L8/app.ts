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
// console.log(obj);



//3. Generic Interface

//ish T ki data type kuch bhi ho skta hai...
interface Box<T>{
  value: T;
}
const numberBox: Box<number> = {
  value: 10,
}
const stringBox: Box<string> = {
  value: "Dummy"
}
console.log(numberBox);
console.log(stringBox);


// Generic Default

//maanlo hmne interface generic me kuch pass hi ni kiya toh use kaise pta lgega isme kya h..
interface User <T = string>{
  // ager hm kuch pass ni krenge toh iski type by default string ho jayegi
  data: T,
  status: number
}

type person2 = {
  name: string;
  age : number;
}

const respone : User = {data:"Success", status :200}//default to string
const jsonRes: User<person2> = {data:{name:"value", age:67}, status:200}
// console.log(respone);
// console.log(jsonRes);



//Generic with class

// T ka mtlb yehi h ki isme hm joh bhi dataType bhejenge usko yeh accept krlegaaa
class Container<T>{
  private content: T;
  constructor(content : T){
    this.content = content;
  }

  getContent(): T{
    return this.content;
  }
}
const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getContent());

const numContainer = new Container<number>(7);
console.log(numContainer.getContent());



//Generics with array

function getFirst<T>(arr: T[]):T{
  return arr[0];
}
const firstNumber = getFirst([1,2,3,4]);
console.log(firstNumber);
const firstString = getFirst(['a','b','c','d']);
console.log(firstString);


// generic keyof usage
function getProperty<T extends object, K extends keyof T>(obj : T, key: K):T[K]{
  return obj[key];
}

const person = {name: "Subhanm", age:21};
const name1 = getProperty(person, "name");
console.log(name1);

