// type LongestWord = (str: string) => string;

interface LongestWord {
  (s: string): string;
}

const findLongestWord: LongestWord = function (string) {
  const words: string[] = string.split(" ");
  let longestWorld: string = words[0];
  for (let i: number = 0; i < words.length; i += 1) {
    let length: number = words[i].length;
    if (length > longestWorld.length) {
      longestWorld = words[i];
    }
  }

  return longestWorld;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));

export {};
