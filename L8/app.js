// Generics Intro
//one type is connected to another type that is called generic
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Boy = {
    name: "Subham",
    age: 56,
};
var Boy2 = {
    name: "Rohan",
    age: 19,
};
var fruits = [{ name: "Piyush", age: 12 }];
fruits.push(Boy);
fruits.push(Boy2);
// console.log(fruits);
//3exp of generics example with function
function merge(objectA, objectB, objectC) {
    return __assign(__assign(__assign({}, objectA), objectB), objectC);
}
var res = merge({ name: "subham" }, { role: "student" }, { address: "New Delhi" });
// console.log(res);
//2. Generics Contraints
//like hm ek param me sirf joh extends me likha hoga woh type hi pass kr skte hai
//example
// ager hm T ko aese hi pass krde bina kuch extends kre toh hm usne koi bhi value pass kr skte hai
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("subham", 4, true); //arguments ko parameter k hi order me hi pass krna hai
var numberBox = {
    value: 10,
};
var stringBox = {
    value: "Dummy"
};
console.log(numberBox);
console.log(stringBox);
var respone = { data: "Success", status: 200 }; //default to string
var jsonRes = { data: { name: "value", age: 67 }, status: 200 };
// console.log(respone);
// console.log(jsonRes);
//Generic with class
// T ka mtlb yehi h ki isme hm joh bhi dataType bhejenge usko yeh accept krlegaaa
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
console.log(stringContainer.getContent());
var numContainer = new Container(7);
console.log(numContainer.getContent());
//Generics with array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
console.log(firstNumber);
var firstString = getFirst(['a', 'b', 'c', 'd']);
console.log(firstString);
// generic keyof usage
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Subhanm", age: 21 };
var name1 = getProperty(person, "name");
console.log(name1);
