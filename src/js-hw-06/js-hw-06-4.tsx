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

type getInactive = (users: IParams[]) => IParams[];

const getInactiveUsers: getInactive = (users) =>
  users.filter((user) => {
    return !user.isActive;
  });

console.log(getInactiveUsers(users));

export {};
