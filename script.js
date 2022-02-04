console.log("Hello world");
// Javascript functions

function printMessage(element) {
  console.log(element);
}
function returnMessage(element) {
  return element;
}
//__________________ Javascript Outputs__________________

//              calling the functions

printMessage("Hello World inside function");

const message = "Hello World";
document.getElementById("demo").innerHTML = message;

//__________________Javascript Variables__________________
let st = "this is a string";
let integer = 12;
let floating = 12.5;
let theBoolean = true;
console.log(st, integer, floating, theBoolean);

//__________________Javascript __________________

console.log("Testing the typeof operator");
if (typeof { firstname: "ali" } == "object") {
  console.log("An Object");
}
