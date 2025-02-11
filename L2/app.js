//array object enum tuple
// const person: {
//   name: string;
//   age: number;
//   skills: number[];// number array
// } = {
//   name: 'John',
//   age: 30,
//   skills: [89, 89,45],
// };
// let favorites : any[];
// favorites = [1,2,"3",4,true];
//! Tuple fixed size of array with prior defined elements data type order
// const person: {
//   product: [number, string];
// } = {
//   product: [1, 'apple'],
// }
// console.log(person); 
///enum
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
var person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("ADmin");
}
else if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else {
    console.log("USer");
}
