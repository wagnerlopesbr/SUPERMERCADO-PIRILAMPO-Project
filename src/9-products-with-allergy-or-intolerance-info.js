const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let product;
  let productsWithAorIInfo = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    product = stockProducts[i];
    if (product.allergyOrIntolerance !== undefined) {
      let productsWithAlergyOrIntoleranceInfos = {
        'description': product.description,
        'formattedPrice': `R$ ${product.price.toFixed(2)}`,
        'allergyOrIntoleranceMessage': `Pode conter: ${product.allergyOrIntolerance.join(" ").toString()}`
      }
      productsWithAorIInfo.push(productsWithAlergyOrIntoleranceInfos);
    }
  }
  return productsWithAorIInfo;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
