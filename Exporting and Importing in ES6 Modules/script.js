//import module

// no need to use strict mode bcz all module by default have strict mode

// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';


// console.log('import module');

// addToCart('bread',5);
// console.log(price, tq);

console.log('import module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCa ('cake',10);
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, tq} from'./shoppingCart.js';
// add('pizza',2);
// console.log(price);

import add, {cart} from './shoppingCart.js';
add('pizza',2);
add('bread',4);
add('milk',3);

console.log(cart);