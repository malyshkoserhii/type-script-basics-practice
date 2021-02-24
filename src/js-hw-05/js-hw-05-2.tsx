interface IStorage {
  items: string[];
  getItems(item: string): string[];
  addItem(item: string): void;
  removeItem(item: string): void;
}

class Storage implements IStorage {
  items: string[];

  constructor(items: string[]) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item: string) {
    return items.push(item);
  }

  removeItem(item: string) {
    for (let i = 0; i < items.length; i += 1) {
      if (item === items[i]) {
        items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.log(storage.items);

export {};
