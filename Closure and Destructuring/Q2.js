/**
2. You have an object representing a customer order with properties orderId, productName, and quantity.
Use destructuring to extract and print these properties.
let order = {
    orderId: "123456",
    productName: 'Laptop',
    quantity: 2
}
 */

let order = {
    orderId: "123456",
    productName: 'Laptop',
    quantity: 2
}
const { orderId, productName, quantity } = order;
console.log(orderId, productName, quantity);