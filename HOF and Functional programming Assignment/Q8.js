/*
8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a
new array.
const originalNumbers = [2, 5, 8, 10, 3];
*/
const originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((num,index,originalNumbers)=>{
    if(num%2!=0){
       originalNumbers.splice(index,1);
    }
});
console.log(originalNumbers);
