interface Params {
  maxSpeed: number;
  price: number;
}

interface ICar {
  maxSpeed: number;
  speed: number;
  isOn: boolean;
  distance: number;
  price: number;
  getPrice(): number;
  setPrice(nP: number): number;
  turnOn(): boolean;
  turnOff(): void;
  accelerate(v: number): void;
  decelerate(v: number): void;
  drive(h: number): void;
}

class Car implements ICar {
  maxSpeed: number;
  speed: number;
  isOn: boolean;
  distance: number;
  price: number;

  static getSpecs(car: Params) {
    console.log(car);
  }

  constructor({ maxSpeed, price }: Params) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice: number) {
    return (this.price = newPrice);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }

  accelerate(value: number) {
    if (value < this.maxSpeed) {
      return (this.speed = value);
    }
  }

  decelerate(value: number) {
    if (value > 0 && this.speed > 0) {
      return (this.speed -= value);
    }
  }

  drive(hours: number) {
    if (this.isOn) {
      const currentDistance = hours * this.speed;
      return (this.distance += currentDistance);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);

export {};
