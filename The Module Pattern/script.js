//import module

const ShoppingCart2=(function(){
    const cart = [];
    const shippingCost =10;
    const totalPrice=237;
    const totalQuantity=23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
    };
     


    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple',4);
ShoppingCart2.addToCart('pizza',5);
console.log(ShoppingCart2);
console.log(ShoppingCart2);