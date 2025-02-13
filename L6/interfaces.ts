//! Interfaces
//kisi bhi object ka respresentation hm interface k under likhte hai
//iske under object dikhega kaise uska blueprint define krte hai

// diff btw interfaces and structure defination in class

interface Person{
  name: string;
  age : number,
  greet(text: string) : void
}

let user: Person;
//interfaces k under hm members ko initailize ni kr skte like aese name:string = "patel";

// ab is user obj me wohi members dene h joh interface me h koi aur diya toh error ayega
user = {
  name:"subham",
  age:98,
  greet(text): void{
    console.log(`${text} ${this.name}`);
  },
}

console.log(user);
user.greet("hello");


// ab type alias aur interfaces dono same hi hote hai
// but jb hme object ka bnaana hota hai toh hm mostly prefer krte hai interfaces ka use krna 
// and jb union bnana hota h tb hm use krta hai type alias


// how to use interfaces with classes

interface Greetable{
  name: string,
  greet(text: string): void;
}

interface Greetable2{
  name: string;
  greet(text: string): void;
}

class Person implements Greetable, Greetable2{
  name: string;
  constructor(n: string){
    this.name = n;
  }
  greet(text: string): void{
    console.log(`${text}, ${this.name}`);
    
  }
}

const p1 = new Person("Aman");
p1.greet("Hello");