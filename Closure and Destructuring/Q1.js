/*
1. You are building a counter application that tracks the number of times a button is clicked. Implement the
counter using closure.
 */

function counter() {
    let count = 0;
    return function() {
        
        return count++;
    }
}

const click = counter();

console.log(click());
console.log(click());
