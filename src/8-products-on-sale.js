const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let productsOnSale = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.onSale === true) {
      let productsInfo = {
        'description': product.description,
        'formattedPrice': `R$ ${product.price.toFixed(2)}`,
        'onSale': product.onSale
      }
      productsOnSale.push(productsInfo);
    }
  }
  return productsOnSale;
};

module.exports = { getProductsOnSale };
