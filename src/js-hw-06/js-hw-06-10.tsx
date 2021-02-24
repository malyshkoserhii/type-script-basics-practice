import {users} from "./users";

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

type sortedbyUniqeSkills = (users: IParams[]) => string[];

const getSortedUniqueSkills: sortedbyUniqeSkills = (users) => {
  const allSkills = users.reduce(function (skills: string[], user) {
    skills.push(...user.skills);

    return skills;
  }, []);

  const uniqueSkills = allSkills.filter(function (element, index, array) {
      return array.indexOf(element) === index;
    })
    .sort();

  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));

export { }