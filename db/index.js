const { faker } = require("@faker-js/faker/locale/az");
const products = [];

const fillFakeData = () => {
  for (let i = 0; i < 10; i++) {
    products.push({
      id: faker.datatype.number(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      quantity: faker.datatype.number({ max: 10, min: 0 })
    });
  }
};

const getAllProducts = (currentPage = 1, perPage = 10) => {
  const totalCount = products.length;
  const data = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  perPage = perPage > totalCount ? totalCount : perPage;
  const result = {
    data,
    currentPage,
    perPage,
    pageCount: Math.ceil(totalCount / perPage),
    totalCount
  };
  return result;
};

const getProductById = (id) => {
  return products.find((product) => product.id.toString() === id);
};

module.exports = { fillFakeData, getAllProducts, getProductById };

