//task-01

const name: string = "Генератор захисного поля";
let price: number = 1000;
console.log(`Обрано "${name}", ціна за штуку ${price} кредитів.`);

price = 2000;
console.log(`Обрано "${name}", ціна за штуку ${price} кредитів.`);

// task-02

const total: number = 100;
const ordered: number = 80;

if (total < ordered) {
  console.log("На складі недостатньо товарів!");
} else {
  console.log("Замовлення оформлено, Вам зателефонує наш менеджер");
}

//task-03

const ADMIN_PASSWORD: string= "jqueryismyjam";
const adminInput: any = prompt("Введіть свій пароль");
let message: string | number | null;

if (ADMIN_PASSWORD === adminInput) {
  message = "Ласкаво просимо!";
} else if (adminInput === null) {
  message = "Скасовано користувачем!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);

//task-04

const credits: number = 23580;
const pricePerDroid: number = 3000;

let droidsAmount: any;

droidsAmount = prompt(
  "Введіть, будь ласка, кількість дроїдів, яку бажеєте придбати"
);

console.log(typeof(droidsAmount));


const totalPrice: number = pricePerDroid * droidsAmount;

const creditsChange = credits - totalPrice;

if (droidsAmount === null) {
  console.log("Скасовано користувачем!");
} else if (isNaN(Number(droidsAmount))) {
  console.log("Було введено не число!");
} else if (totalPrice > credits) {
  console.log("Недостатньо кредитів на рахунку!");
} else {
  console.log(
    `Ви придбали ${droidsAmount} ремонтних дроїдів, на Вашому рахунку залишилося ${creditsChange} кредитів`
  );
}

//task-05

const stateInput: any = prompt("Введіть країну доставки товару");

let deliveryPrice: number | null = null;

if (stateInput === null) {
  console.log("Скасовано користувачем!");
} else {
  const accessibleState = stateInput.toLowerCase();

  switch (stateInput.toLowerCase()) {
    case "китай":
      deliveryPrice = 100;
      break;
    case "чилі":
      deliveryPrice = 250;
      break;
    case "австралія":
      deliveryPrice = 170;
      break;
    case "індія":
      deliveryPrice = 80;
      break;
    case "ямайка":
      deliveryPrice = 120;
      break;
    default:
      alert("У Вашій країні доставка недоступна");
  }

  if (deliveryPrice) {
    console.log(
      `Доставка в ${accessibleState} буде коштувати ${deliveryPrice} кредитів`
    );
  }
}

// task - 06

let totalTaskSix: number = 0;

let input: number | any;

do {
  input = prompt("Введіть, будь ласка, число");

  if (isNaN(Number(input))) {
    alert("Ви не ввели число!");
    continue;
  }

    totalTaskSix += Number(input);
    console.log('totalTaskSix: ', totalTaskSix);
} while (input !== null);

console.log(`Загальна сума ${total}`);

export {};
