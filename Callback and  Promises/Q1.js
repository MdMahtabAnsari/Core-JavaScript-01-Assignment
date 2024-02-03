/*
Assignment 1
Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
a delay of 1 second.
 */

function sumAsync(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}
sumAsync(2, 3, (sum) => {
    console.log(sum);
})

