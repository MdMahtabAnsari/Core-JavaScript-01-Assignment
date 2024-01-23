/*
6.
=>Create a simple JavaScipt function named displayInfo that takes two parameters (name and role) and
logs a message.
=>Use call to invoke the displayInfo function with specific aguments.
=>Use apply to invoke the displayInfo function with arguments passed as an array.
=>Create another function named greet that logs a greeting with this context.
=>Use bind to create a new function boundGreet with a specific context and log the geeting.
*/
const displayInfo = function(name, role){
    console.log(`Name: ${name}, Role: ${role}`);
  
}
displayInfo.call(this, "John", "Developer");
displayInfo.apply(this, ["Jane", "Designer"]);
const greet = function(name,role){
    console.log(`Hello, I'm ${name} and I'm a ${role}.`);
}
greet.call(this,"John","Developer");
const boundGreet = greet.bind(this);
boundGreet("John","Developer");
