// unknown Never Any
let userInput : unknown; //isme hm kuch bhi daal skte hai
let user: any;

//diff btw unknown and any
let userName : string;
// userName = userInput; // unknown me yeh possible me ni
userName : user; // any me possible hai


//function ka return type never bhi hota hai
// jb code me throw krna hota tb 

function generateError(message: string, code : number): never{
  throw {message: message, statusCode: code}
}
console.log(generateError("Error", 500));

