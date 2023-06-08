const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let lowStockProducts = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.quantityInStock > 0 && product.quantityInStock <= 10) {
      lowStockProducts.push(`${product.productName}: ${product.quantityInStock} unidades.`);
    }
  }
  return lowStockProducts;
};

module.exports = { getLowStockProducts };
