/*
3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures
try to create a cart array and return a function to getCartItems.

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());

// OUTPUT: Cart Items: []
 */


function shoppingCart() {
    const cart = [];
    return {
        getCartItems: () => cart,
    }
}
const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());