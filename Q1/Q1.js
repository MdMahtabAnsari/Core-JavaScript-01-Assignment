/*
Q1. Write a program that grades students based on their marks.
-> If greater than 90 then A Grade
-> If between 70 and 90 then a B grade
-> If between 50 and 70 then a C grade
-> Below 50 then an F grade
*/
let marks = 80
let grade = null
if(marks > 90){
    grade= "A grade"
}
else if(marks >= 70 && marks <= 90){
    grade = "B grade"
}
else if(marks >= 50 && marks < 70){
    grade = "C grade"
}
else{
    grade= "F grade"
}
console.log(`Your grade is : ${grade}`);