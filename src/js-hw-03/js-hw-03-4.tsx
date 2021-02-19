interface ISalary {
  [key: string]: number;
}

type EmployeesSalary = (e: object) => string;

const objFirst: ISalary = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

const objSecond: ISalary = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};

const countTotalSalary: EmployeesSalary = function (employees) {
  const salary = Object.values(employees);
  let totalSalary = 0;
  for (let sum of salary) {
    totalSalary += sum;
  }

  const message = `Загальна сума усіх зарплат: ${totalSalary}`;
  return message;
};

console.log(countTotalSalary({}));

console.log(countTotalSalary(objFirst));

console.log(countTotalSalary(objSecond));

export {};
