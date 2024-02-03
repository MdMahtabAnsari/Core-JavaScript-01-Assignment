/*
5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
calling the remove item closure function, the specified productId item must be removed from cartItems
array.Use javascript closures to achieve the output.

const cart = shoppingCart();

console.log('Cart Items:', cart.getCartItems());

// OUTPUT: Cart Items: []

const product1 = {id: 1, name: 'Product 1', quantity: 1, price: 10};
const product2 = {id: 2, name: 'Product 2', quantity: 2, price: 20};

cart.addToCart(product1);
cart.addToCart(product2);
cart.addToCart(product1);

console.log('Cart Items:', cart.getCartItems());

//OUTPUT: Cart Items: [
//    {id: 1, name: 'Product 1', quantity: 2, price: 10}, 
//    {id: 2, name: 'Product 2', quantity: 2, price: 20}
//    ]

cart.removeItem(2);

console.log('Cart Items:', cart.getCartItems());

//OUTPUT: Cart Items: [ 
//    { id: 1, name: 'Product 1', quantity: 2, price: 10 } 
//    ]
*/

function shoppingCart() {
    const cart = [];
    return {
        getCartItems: () => cart,
        addToCart: (product) => {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += product.quantity;
            }
            else {
                cart.push(product);
            }
        },
        removeItem: (productId) => {
            const index = cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                cart.splice(index, 1);
            }
        }

    }
}
const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());

const product1 = { id: 1, name: 'Product 1', quantity: 1, price: 10 };
const product2 = { id: 2, name: 'Product 2', quantity: 2, price: 20 };

cart.addToCart(product1);
cart.addToCart(product2);
cart.addToCart(product1);

console.log('Cart Items:', cart.getCartItems());

cart.removeItem(2);

console.log('Cart Items:', cart.getCartItems());