type Count = (c: object) => string;

const countProps: Count = function (countProps) {
  const keys: string[] = Object.keys(countProps);
  const amount: number = keys.length;
  const message: string = `Кількість властивостей в об'єкті: ${amount}`;

  return message;
};

console.log(countProps({}));

console.log(countProps({  name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

export {};
