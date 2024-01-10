/*
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/

let num = 10
let currNum = 1
let sum=0

do{
    sum+=currNum
    currNum++
}while(currNum<=num)

console.log(`Sum of first ${num} natural number : ${sum}`);