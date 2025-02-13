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
// class Department {
//   name: string; // we can initialize this name:string ="subham"
//   private employee: string[];
//   constructor(n: string){
//     this.name = n;
//     this.employee = [];
//   }
//   // yha pe this:Department ensures ki isme dep class ka hi ek obj hona chaiye
//   describe( this:Department){
//     console.log("Department", this.name);
//   }
//   addEmployee(emp: string){
//     this.employee.push(emp);
//   }
//   printEmployee( this:Department){
//     console.log("Number of emplpyee : ", this.employee.length);
//     console.log(this.employee);
//   }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// accounting.addEmployee("subham");
// accounting.addEmployee("rohan");
// // accounting.employee = ["mac"];// yeh directly accessible hai so isko aesa ni chahte hm and isko ab hm pvt kr denge
// accounting.printEmployee();
//readonly Access Modifiers
// readonly lagane se sirf woh ek bar initialize ho skti hai and hm usko baad me change bhi ni kr skte
// class Department {
//   name: string; // we can initialize this name:string ="subham"
//   private employee: string[];
//   private readonly id: string;
//   constructor(n: string){
//     this.name = n;
//     this.id ="d1"; // only once you can initialize
//     this.employee = [];
//   }
//   // yha pe this:Department ensures ki isme dep class ka hi ek obj hona chaiye
//   describe( this:Department){
//     console.log("Department", this.name);
//   }
//   addEmployee(emp: string){
//     this.employee.push(emp);
//   }
//   printEmployee( this:Department){
//     console.log("Number of emplpyee : ", this.employee.length);
//     console.log(this.employee);
//   }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// accounting.addEmployee("subham");
// accounting.addEmployee("rohan");
// // accounting.employee = ["mac"];// yeh directly accessible hai so isko aesa ni chahte hm and isko ab hm pvt kr denge
// accounting.printEmployee();
//! Inheritence
//->overidde and protected
class Department {
    constructor(id, n) {
        this.name = n;
        this.id = id;
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
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting"); // child class k constructor se phle parent class k constructor ko call lgane k super ka use
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(emp) {
        if (emp == "Patel") {
            return;
        }
        this.employee.push(emp);
    }
    // getter method
    get getReports() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Report not found..");
    }
    // setter method
    set setReports(value) {
        if (!value) {
            throw new Error("Please pass valid value.");
        }
        this.reports.push(value);
    }
}
const accDep = new AccountingDepartment("c1", ["bugs"]);
accDep.describe();
accDep.addReports("complier issue");
accDep.printReports();
accDep.addEmployee("varun");
accDep.printEmployee();
//setter and getter use in ts
// As there invoke is diff from normal methods
accDep.setReports = "new report";
console.log("Print through getter method -> ", accDep.getReports);
//!Static method 
class Department2 {
    constructor(id, n) {
        this.name = n;
        this.id = id;
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
    static getSalary() {
        return { salary: 500000 };
    }
}
// static methods ko access krne k liye object bnanane ki jarurat ni pdti directly class k name likh k access kr skte hai..
const salary = Department2.getSalary;
console.log(salary);
//! abstract classess
// yeh woh classess hoti h jiska hm sirf declaration krte hai impplemenatation ni
// abstract class ka implementation unki sub class me hogaa
// abstract class se object bhi ni bna skte
class Department3 {
    constructor(id, n) {
        this.employee = [];
        this.name = n;
        this.id = id;
    }
}
class subclass extends Department3 {
    constructor(id, reports) {
        super(id, 'Sales');
        this.reports = reports;
    }
    describe() {
        console.log("Department ", this.id);
    }
    displayName() {
        console.log("Department name: ", this.name);
    }
}
const subClass = new subclass("D1", []);
subClass.describe();
