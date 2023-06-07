const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let products = [];
  let uniqueProducts = 0;
  for (let i = 0; i < stockProducts.length; i += 1) {
    stockProducts.push(products);
    if (products !== stockProducts) {
      uniqueProducts += 1;
    }
  }
  return uniqueProducts;
};

module.exports = { getUniqueProductsAmount };
