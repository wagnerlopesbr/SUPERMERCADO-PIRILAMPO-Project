const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let uniqueProducts = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i].productName;
    uniqueProducts.push(product);
  }
  return uniqueProducts;
};

module.exports = { getUniqueProductsName };
