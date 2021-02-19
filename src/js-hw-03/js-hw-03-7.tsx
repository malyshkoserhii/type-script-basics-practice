interface IAccount {
  balance: number;
  transactionID: number;
  transactions: ICreateTransaction[];
  createTransaction(a: number, type: string): void;
  deposit(a: number): string | number;
  withdraw(a: number): string | number;
  getBalance(): string;
  getTransactionDetails(id: number): number | string;
  getTransactionTotal(t: string): number;
}

interface ICreateTransaction {
  amount: number;
  type: string;
  id: number;
}

enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

const account: IAccount = {
  balance: 0,

  transactionID: 1000000,

  transactions: [],

  createTransaction(amount, type) {
    const createdTransaction: ICreateTransaction = {
      amount,
      type,
      id: this.transactionID,
    };
      
    return this.transactions.push(createdTransaction);
  },

  deposit(amount) {
    if (amount > 0) {
      this.createTransaction(amount, TransactionType.DEPOSIT);
      this.balance += amount;
      this.transactionID += 1;
      return `Ваш рахунок поповнено на ${amount} грн. Ваш поточний баланс: ${this.balance} грн.`;
    }
    return `Поповнити рахунок на ${amount} не вдалося. Спробуйте, будь ласка, пізніше`;
  },

  withdraw(amount) {
    if (amount < this.balance) {
      this.createTransaction(amount, TransactionType.WITHDRAW);
      this.balance -= amount;
      this.transactionID += 1;
      return `Ви зняли ${amount} грн. Вам доступно: ${this.balance} грн.`;
    }
    return `Ви перевищили ліміт. Зняття готівки не можливо. Вам доступно: ${this.balance} грн.`;
  },

  getBalance() {
    return `На вашому балансі: ${this.balance} грн.`;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const currentTransaction = this.transactions[i];
      if (id === currentTransaction.id) {
        return `Транзакція з ${id} наявна у спису тразакцій`;
      }
    }
    return `Транзакція з ${id} відсутня`;
  },

  getTransactionTotal(type) {
    let transactionTotal = 0;

    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        transactionTotal += this.transactions[i].amount;
      }
    }
    return transactionTotal;
  },
};

console.log("deposit:", account.deposit(5000));
console.log("deposit:", account.deposit(1000));
console.log("deposit:", account.deposit(2000));

console.log("withdraw:", account.withdraw(700));
console.log("withdraw:", account.withdraw(50));
console.log("withdraw:", account.withdraw(450));

console.log("getBalance:", account.getBalance());

console.table(account.getTransactionDetails(1000002));
console.table(account.getTransactionDetails(1000005));

console.log(
  "getTransactionTotal (deposit):",
  account.getTransactionTotal("deposit")
);
console.log(
  "getTransactionTotal (withdraw):",
  account.getTransactionTotal("withdraw")
);

export {};
