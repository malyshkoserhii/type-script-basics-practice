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

type userFriends = (users: IParams[], fN: string) => string[];

const getUsersWithFriend: userFriends = (users, friendName) =>
  users
    .filter((user) => {
      if (user.friends.includes(friendName)) {
        return user;
      }
    })
    .map((user) => {
      return user.name;
    });

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

export {};
