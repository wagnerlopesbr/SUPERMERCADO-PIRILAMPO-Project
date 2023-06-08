const stockProducts = require('./data.json');

const searchProductByName = () => {
  // Desenvolva seu código dentro dessa função...z
  let product = [];
  let productsInfo = {};
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.productName === stockProducts.productName) {
      productsInfo = {
        'description': product[i].description,
        'formattedPrice': product[i].price,
      };
    }
  }
  return productsInfo;
};

module.exports = { searchProductByName };
