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

type UserGender = (users: IParams[], gender: string) => string[];

const getUsersWithGender: UserGender = (users, gender) =>
  users
    .filter((user) => {
      return gender === user.gender;
    })
    .map((user) => {
      return user.name;
    });

console.log(getUsersWithGender(users, 'male'));

export {};
