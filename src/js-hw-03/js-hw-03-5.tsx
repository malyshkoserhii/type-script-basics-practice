type PropValues = (a: any, prop: string) => string[] | number[];

interface Arr {
    [key: string]: string | number;
}

const products: Arr[] = [
    { name: "Радар", price: 1300, quantity: 4, qwerty: 123 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues: PropValues = function (arr, prop) {
    const property = [];

    for (let product of arr) {
        if (product[prop] !== undefined) {
            property.push(product[prop]);
        }
    }

    return property;
};

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));


export { }