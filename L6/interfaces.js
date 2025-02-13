"use strict";
//! Interfaces
//kisi bhi object ka respresentation hm interface k under likhte hai
//iske under object dikhega kaise uska blueprint define krte hai
let user;
//interfaces k under hm members ko initailize ni kr skte like aese name:string = "patel";
// ab is user obj me wohi members dene h joh interface me h koi aur diya toh error ayega
user = {
    name: "subham",
    age: 98,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
};
console.log(user);
user.greet("hello");
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text},${this.name}`);
    }
}
let user1;
user1 = new Person("Patel");
user1 = new Person("subham");
user1.greet("Hello");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(3, 4));
