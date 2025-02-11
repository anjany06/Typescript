//!UNION , | -> pipe in ts
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number' || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var user = {
    name: "Subham",
    age: 25,
    skills: ["react", "node"],
};
function greet(user) {
    console.log("hi, ".concat(user.name));
}
greet(user);
var sum = combine("10", "20", "as-number");
// const string = combine("Subham ","pandey");
console.log(sum);
