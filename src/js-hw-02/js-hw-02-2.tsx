type CalculatePrice = (m: string, p: number) => number;

// interface CalculatePrice {
//     (m: string, p: number): number;
// }

const calculateEngravingPrice: CalculatePrice = function (
    message,
    pricePerWord
) {
    const ammountOfWords: string[] = message.split(" ");
    const numbersOfWords: number = ammountOfWords.length;
    const total: number = numbersOfWords * pricePerWord;

    return total;
};

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        10
    )
);
console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        20
    )
);
console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);
console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

export { };
