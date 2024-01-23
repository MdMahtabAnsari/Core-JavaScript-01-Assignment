/*
5. You ae developing a pogram to manage a list of unique items. Write a JavaScipt pogram that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their coesponding squares.
*/
const uniqueNumbers = new Set();
const squreNumbers = new Map();
for(let i=0;i<=10;i++){
   uniqueNumbers.add(i);
}
for(let num of uniqueNumbers){
    squreNumbers.set(num,num*num);
}
for(let [key,value] of squreNumbers){
    console.log(key,value);
}