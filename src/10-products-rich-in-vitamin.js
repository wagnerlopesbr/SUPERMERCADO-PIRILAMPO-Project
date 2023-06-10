const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let vitaminsInfo = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.nutritionalInfo.vitamins !== undefined) {
      let vitaminasTunadas = new Array(product.nutritionalInfo.vitamins);
      let productsInfo = {
        'description': product.description,
        'formattedPrice': `R$ ${product.price.toFixed(2)}`,
        'vitaminsInformation': vitaminasTunadas
      }
      vitaminsInfo.push(productsInfo);
    }
  }
  return vitaminsInfo;
};

module.exports = { getProductsRichInVitamin };
