const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let totalAmount = 0;
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i].quantityInStock;
    totalAmount += product;
  }
  return totalAmount;
};

module.exports = { getProductsAmount };
