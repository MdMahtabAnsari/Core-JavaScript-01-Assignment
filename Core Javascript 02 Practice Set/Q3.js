/*
3. Ceate a Map to stoe contact infomation (name, age, email, location) and implement a function to
retrieve contact details by name.
*/
let contact = new Map();
contact.set("Raj", {
        "age": 25,
        "email": "XXXXXXXXXXXXX",
        "location": "Bangalore"
    }
    );
console.log();
const getInfo = (name) => {
    return contact.get(name);
}
console.log(`${getInfo("Raj").age} ${getInfo("Raj").email} ${getInfo("Raj").location}`);