interface Params {
  name: string;
  age: number;
  followers: number;
}

class User {
  public name: string;
  public age: number;
  public followers: number;

  constructor({ name, age, followers }: Params) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old has ${this.followers} followers`
    );
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo();

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo();

export {};
