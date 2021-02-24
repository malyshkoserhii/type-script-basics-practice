import { users } from './users';

interface IParams {
  id: string;
  name: string;
  email: string;
  eyeColor: string;
  friends: string[];
  isActive: boolean;
  balance: number;
  skills: string[];
  gender: string;
  age: number;
}

type toralBalance = (users: IParams[]) => number;

const calculateTotalBalance: toralBalance = (users) =>
  users
    .map((user) => {
      return user.balance;
    })
    .reduce((accumulator, number) => {
      return (accumulator += number);
    }, 0);

console.log(calculateTotalBalance(users));

export {};
