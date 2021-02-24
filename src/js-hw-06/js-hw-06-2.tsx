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

type IUserEyeColor = (users: IParams[], color: string) => IParams[];

const getUsersWithEyeColor: IUserEyeColor = (users, color) =>
  users.filter((user) => {
    if (color === user.eyeColor) {
      return user;
    }
  });

console.log(getUsersWithEyeColor(users, 'blue'));

export {};
