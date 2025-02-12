// unknown Never Any
var userInput; //isme hm kuch bhi daal skte hai
var user;
//diff btw unknown and any
var userName;
// userName = userInput; // unknown me yeh possible me ni
userName: user; // any me possible hai
//function ka return type never bhi hota hai
// jb code me throw krna hota tb 
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
console.log(generateError("Error", 500));
