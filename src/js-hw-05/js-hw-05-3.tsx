interface IStringBulder {
    value: string;
    getValue(): string;
    append(str: string): string;
    prepend(str: string): string;
    pad(str: string): string;
}

class StringBuilder implements IStringBulder {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  append(str: string) {
    return this.value = this.value + str;
  }

  prepend(str: string) {
    return this.value = str + this.value;
  }

  pad(str: string) {
    return this.value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);

export {};
