// function return type
function add(num1 : number, num2: number): number{
  return num1+ num2
}

function greet(name: string) : void{
  console.log(`hi, ${name}`);
}

//Bad practice

// let combineFunction : Function; // valid && ab issh var ka data type bta denge Function but aesa ho skta h but hme krna ni hota h kyuki hme pta ni yeh function kya h aur kitne parameter le rha hai

// combineFunction = 10; invalid
// combineFunction = function(); // valid

// combineFunction = add;// yeh valid h kyuki hme pta add func k bare me 
// combineFunction = greet; // yeh valid h kyuki hme pta greet func k bare me 
// console.log(
//   combineFunction(1,2)
// );

//Good Practice

// toh jabhi bhi hm kisi function ko type assign krenge toh hme function ni dalna hme directly func ka naam dalna hai

let combineFunction : (a : number,b: number) => number;
// ab hm ish combineFunc k under usi ko assign kr skte hai joh ise match kr rha hoga...


// combineFunction = greet;// ab yeh invalid

combineFunction = add; // valid
// console.log(combineFunction(100, 500));


// Function Type && Callbacks

type CB = (n: number) => void; //defined the callback function data structure(aug data and return type)

function addHandle(num1: number, num2: number, cb:CB){
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result: number)=>{
  console.log(result);
})
