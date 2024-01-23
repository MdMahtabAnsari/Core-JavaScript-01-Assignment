/*
2. In this challenge, your task is to create a function that generates a random number and prints it to the
console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-
second delay between each number.
*/
const randomNumberGenerator = (n) => {
    return function(){
        let numsArray="0123456789"
        let number=""
        for(let i=0;i<n;i++){
        number+=numsArray[Math.floor(Math.random()*10)]
        }
        console.log(number);
    }
   
}
const interval = setInterval(randomNumberGenerator(6),2000)