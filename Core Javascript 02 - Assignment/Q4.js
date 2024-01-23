/*
4. Ceate two objects peson1 and peson2 with poperties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] yeas old." Use the call method to make person intoduce itself
using the intoduce function.
*/

const person1 = {
    name: "John",
    age: 30
}
const person2 = {
    name: "Jane",
    age: 25
}
const introduce = function() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}
introduce.call(person1);
introduce.call(person2);