let number: any = null;
let total: number = 0;
const numbers: number[] = [];

do {
  number = prompt("Введіть число");
  if (isNaN(Number(number))) {
    alert("Було введено не число, будь ласка, спробуйте ще раз");
    continue;
  } else {
    numbers.push(number);
  }
} while (number !== null);

for (number of numbers) {
  total += +number;
}

console.log(`Загальна сума: ${total}`);

export { };