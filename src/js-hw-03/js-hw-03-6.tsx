interface IProducts {
  [key: string]: string | number;
}

type Total = (a: any, p: string) => number | string;

const products: IProducts[] = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice: Total = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.name === productName) {
      const price = product.price;
      const quantity = product.quantity;
      const total = price * quantity;
      return total;
    }
  }

  return "Такий товар відсутній";
};

console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));

export {};
