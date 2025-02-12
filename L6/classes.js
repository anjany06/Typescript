"use strict";
//! Basic Class
// class Department {
//   name: string;
//   constructor(n: string){
//     this.name = n;
//   }
//   // yha pe this:Department ensures ki isme dep class ka hi ek obj hona chaiye
//   describe( this:Department){
//     console.log("Department", this.name);
//   }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// const accountingCopy = {
//   name:"Subham", // it ensures that name is not undefined
//   describe : accounting.describe
// }
// accountingCopy.describe(); // result -> [department undefined] as this object does not have any name property
//Access Modifiers -> public, private
class Department {
    constructor(n) {
        this.name = n;
        this.employee = [];
    }
    // yha pe this:Department ensures ki isme dep class ka hi ek obj hona chaiye
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployee() {
        console.log("Number of emplpyee : ", this.employee.length);
        console.log(this.employee);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("subham");
accounting.addEmployee("rohan");
// accounting.employee = ["mac"];// yeh directly accessible hai so isko aesa ni chahte hm and isko ab hm pvt kr denge
accounting.printEmployee();
//readnly
