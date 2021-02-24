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

type sortedByFriendsCount = (users: IParams[]) => string[];

const getNamesSortedByFriendsCount: sortedByFriendsCount = (users) =>
  [...users]
    .sort((previous, next) => {
      return previous.friends.length - next.friends.length;
    })
    .map((user) => {
      return user.name;
    });

console.log(getNamesSortedByFriendsCount(users));

export {};
