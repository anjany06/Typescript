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
console.log(obj);
