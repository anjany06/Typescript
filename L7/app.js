// type guards
function add(a, b) {
    //adding type guards
    if (typeof a === "string" || typeof b === "string") {
        return +a.toString() + +b.toString();
    }
    return a + b;
}
console.log(add(30, 30));
console.log(add("30", 30));
var emp1 = {
    name: "Subham pandey",
    privilages: ["create post", "delete post"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name: ", emp.name);
    // console.log("Privilages: ", emp.privilages);
    // start adding type guards
    // if(typeof emp === "object"){
    //   console.log(emp.privilages);
    // }
    // above is the wrong code as we do not know which object is this
    // right code
    //use in keyword that build in JS
    // this checks whether it is employee or admin
    //type guards
    if ('privilages' in emp) {
        console.log("Privilages: ", emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
var emp2 = {
    name: "piyush",
    privilages: ["Fun", "enjoy"],
    startDate: new Date(),
};
// printEmployeeInformation(emp1);
printEmployeeInformation(emp2);
//3. typeguards in clasess
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck..");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargoo : ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    // toh abhi iss vehicle ko pta hi ni ki woh truck ya car toh isilye jb hm vehicle.load krenge woh error ayega
    // toh isliye hum use type guard use krenge
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
    // another method
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//Type casting / type assertion
// const userInput = <HTMLInputElement>document.getElementById("user-input")!; //exclaim mark isiliye kyuki m sure hu iski value h null toh ni hai
//second method
var userInput = document.getElementById("user-input");
userInput.value = "Hello"; //toh input ki value h ni isliye phle yeh error dega
