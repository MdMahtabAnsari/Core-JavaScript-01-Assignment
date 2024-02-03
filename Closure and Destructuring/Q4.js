/*
4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
javascript closures to achieve the output.

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