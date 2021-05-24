//import module


//it will work in node js module
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  
  // Import 
  const { addTocart } = require('./shoppingCart.js');