// type guards

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a:Combinable, b:Combinable){
  //adding type guards
  if(typeof a === "string" || typeof b === "string"){
    return +a.toString() + +b.toString();
  }
  return a + b;
}

console.log(add(30,30));
console.log(add("30", 30));

//2. example ( type guards with function)

type Admin = {
  name: string,
  privilages: string[]
}

type Employee = {
  name: string,
  startDate: Date
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1 : ElevatedEmployee = {
  name : "Subham pandey",
  privilages : ["create post", "delete post"],
  startDate: new Date(),
}

function printEmployeeInformation(emp: UnknownEmployee){
  console.log("Name: ",emp.name);

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
  if('privilages' in emp){
    console.log("Privilages: ", emp.privilages);
  }
  if('startDate' in emp){
    console.log(emp.startDate);
  }
}

const emp2 : UnknownEmployee ={
  name : "piyush",
  privilages : ["Fun", "enjoy"],
  startDate: new Date(),
}

// printEmployeeInformation(emp1);
printEmployeeInformation(emp2);


//3. typeguards in clasess

class Car{
  drive(){
    console.log("Driving a car...");
  }
}

class Truck{
  drive(){
    console.log("Driving a truck..");
  }

  loadCargo(amount : number){
    console.log("Loading cargoo : ",amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle){
  // toh abhi iss vehicle ko pta hi ni ki woh truck ya car toh isilye jb hm vehicle.load krenge woh error ayega
  // toh isliye hum use type guard use krenge
  if('loadCargo' in vehicle){
    vehicle.loadCargo(1000);
  }
  // another method
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
