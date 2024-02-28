/*
 You are developing the error handling mechanism for an online shopping cart application The
application allows users to add prodcts to their cart and proceed to checkout Implement error
handling to address different types of errors that might occur during the shopping process
 */

/*
Task 1: Add Prodct to Cart Fnction
Create a function addToCart that simulates adding a product to te shopping cart. The function sould take
the product details (name, price, quantity) as paraueters and trow errors under certain conditionst

- If the product naue is not provided, trow an error indicating Product naue is required.
- If the product price is not provided, trow an error indicating Product price is required.
- If the product quantity is not provided, trow an error indicating Product quantity is required.
*/

const addToCart = (name, price, quantity) => {
    if (!name ||typeof name !== 'string' || name.trim() === '' ) {
        throw new Error('Product name is required');
    }
    if (!price || typeof price !== 'number'||price <= 0 ) {
        throw new Error('Invalid Product price');
    }
    if (!quantity || typeof quantity !== 'number'||quantity <= 0) {
        throw new Error('Invalid quantity');
    }
    return { name, price, quantity };
}

/*
Task 2: Checkout Fnction
Create a function checkout that simulates te checkout process. This function sould trow an error if te cart
is empty, indicating Cart is empty. Add items before checkout.
 */

const checkout = (cart) => {
    if (!cart ||cart.length === 0) {
        throw new Error('Cart is empty. Add items before checkout');
    }
    return 'Checkout successful';
}

try {
    const cart = [];
    const product1 = addToCart('Laptop', 1000, 2);
    cart.push(product1);
    console.log(checkout());

}
catch (error) {
    console.log(error.message);
}