type Spam = (m: string) => boolean;

// interface ISpam {
//     (m: string): boolean;
// }

const checkForSpam: Spam = function (message) {
  const content: any = message.toLocaleLowerCase();
  console.log(content);

  const checking: boolean =
    content.includes("spam") || content.includes("sale");

  return checking;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));

export {};
