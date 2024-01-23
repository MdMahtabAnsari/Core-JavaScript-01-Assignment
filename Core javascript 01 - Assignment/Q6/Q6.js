/*
Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processin, fee of
2%, "debit" 1.5%, and "paypal" 3%.
*/

let amount = 5000
let paymentMethod = "credit"
let fee = null

switch(paymentMethod){
    case "credit":
        fee = amount*(2/100)
        console.log(`Processing fee : ${fee}`);
        amount = amount-fee
        break;
    case "debit":
        fee = amount*(1.5/100)
        console.log(`Processing fee : ${fee}`);
        amount = amount-fee
        break;
    case "paypal":
        fee = amount*(3/100)
        console.log(`Processing fee : ${fee}`);
        amount = amount-fee
        break;
    default:
        console.log("Invalid payment method");
}