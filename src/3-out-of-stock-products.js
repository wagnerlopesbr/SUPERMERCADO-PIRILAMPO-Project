const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let offProducts = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.quantityInStock === 0) {
      offProducts.push(stockProducts[i].productName);
    }
  }
  return offProducts;
};

module.exports = { getOutOfStockProducts };
