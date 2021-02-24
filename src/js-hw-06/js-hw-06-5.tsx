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

type getUser = (users: IParams[], email: string) => IParams[];

const getUserWithEmail: getUser = (users, email) =>
  users.filter((user) => {
    if (email === user.email) {
      return user;
    }
  });

console.log(getUserWithEmail(users, 'moorehensley@indexia.com'));

export {};
