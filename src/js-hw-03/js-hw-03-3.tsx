type BestEmployeeFn = (e: object) => string;

interface Employees {
  [key: string]: number;
}

const objFirst: Employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const objSecond: Employees = {
  poly: 12,
  mango: 17,
  ajax: 4,
};

const objThird: Employees = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};

const findBestEmployee: BestEmployeeFn = function (employees) {
  const entries = Object.entries(employees);
  let bestWorker: string | null = null;
  let capacity: number = 0;

  for (const [name, value] of entries) {
    if (capacity <= value) {
      bestWorker = name;
    }
    }
    
    const nameOfTheBestEmployee: string = `Best employee: ${bestWorker}`

  return nameOfTheBestEmployee;
};

console.log(findBestEmployee(objFirst));

console.log(findBestEmployee(objSecond));

console.log(findBestEmployee(objThird));

export {};
