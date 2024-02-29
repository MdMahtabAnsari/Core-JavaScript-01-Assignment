/*
3. You are Developing a payment processing module for an e-commerce platform. Implement error
handling for the payment transaction process.Create a function processPayment that simulates
processing a payment transaction. The function should take payment details (amount, card number,
expiration date) as parameters and throw errors under certain conditions
- If the payment amount is not a positive number, throw an error indicating Invalid payment amount.
- If the card number is not provided or is not a valid credit card number, throw an error indicating Invalid
card number.
- If the expiration date is not provided or is in the past, throw an error indicating Invalid expiration date.
 */

function processPayment(amount, cardNumber, expirationDate) {
    if (amount <= 0) {
        throw new Error('Invalid payment amount');
    }
    if (!cardNumber || !validateCardNumber(cardNumber)) {
        throw new Error('Invalid card number');
    }
    if (!expirationDate || isExpired(expirationDate)) {
        throw new Error('Invalid expiration date');
    }
    console.log('Payment processed successfully');
}

function validateCardNumber(cardNumber) {
    // validate card number
    const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regex.test(cardNumber);


}

function isExpired(expirationDate) {
    // check if expiration date is in the past
    const month = expirationDate.split('/')[0];
    const year = "20"+expirationDate.split('/')[1];
    const date = new Date(year, month, 31);
    const currentDate = new Date();
    console.log(date, currentDate);
    return date < currentDate;

}

try{
    processPayment(100, '1234-5678-9012-3456', '12/23');
    processPayment(0, '1234-5678-9012-3456', '12/23');
    processPayment(100, '1234-5678-9012-3456', '12/20');
    processPayment(100, '', '12/25');
    processPayment(-100, '1234-5678-9012-3456', '');
    
}
catch (error){
    console.log(error.message);
}
