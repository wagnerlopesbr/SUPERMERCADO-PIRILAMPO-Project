const stockProducts = require('./data.json');

const searchProductsByBrand = (itemBrand) => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let productBrand = {};
  let productArray = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.brand !== 'undefined' && product.brand === itemBrand) {
      productBrand = {
        'description': product.description,
        'formattedPrice': `R$ ${product.price.toFixed(2)}`
      };
      productArray.push(productBrand);
    }
  }
  return productArray;
};

module.exports = { searchProductsByBrand };
