const stockProducts = require('./data.json');

const searchProductByName = (itemName) => {
  // Desenvolva seu código dentro dessa função...z
  let product;
  let productInfo = {};
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.productName !== 'undefined' && product.productName === itemName) {
      productInfo = {
        'description': product.description,
        'formattedPrice': `R$ ${product.price.toFixed(2)}`
      }
      return productInfo;
    }
  }
  return null;
};

module.exports = { searchProductByName };
