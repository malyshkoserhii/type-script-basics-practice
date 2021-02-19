type LogItemsFn = (array: string[] | number[]) => void;

// interface ILogItemsFn {
//   (array: string[] | number[] ): void
// }

const logItems: LogItemsFn = function (array) {
  for (let i: number = 0; i < array.length; i += 1) {
    const number: number = i + 1;
    const item: string | number = array[i];
    console.log(`${number} - ${item}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

export {};
