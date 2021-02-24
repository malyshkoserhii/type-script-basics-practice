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

type useAge = (users: IParams[], min: number, max: number) => IParams[];

const getUsersWithAge: useAge = (users, min, max) =>
  users.filter((user) => {
    return user.age >= min && user.age <= max;
  });

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

export {};
