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

type getUser = (users: IParams[]) => string[];

const getUserNames: getUser = (users) =>
  users.map((user) => {
    return user.name;
  });

console.log(getUserNames(users));

export {};
