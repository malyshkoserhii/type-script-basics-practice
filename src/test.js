const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const productValues = [];

  for (let i = 0; i < products.length; i += 1) {
    if (prop === "name") {
      productValues.push(arr[i].name);
    }
    if (prop === "price" && prop !== undefined) {
      productValues.push(arr[i].price);
    }
    if (prop === "quantity") {
      productValues.push(arr[i].quantity);
    }
  }

  return productValues;
};

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "price"));

console.log(getAllPropValues(products, "quantity"));
