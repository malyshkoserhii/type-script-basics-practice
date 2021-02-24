interface IInventory { 
    items: string[];
    add(iN: string): void;
    remove(iN: string): void;
}

interface IAction {
    apply(inventory: IInventory, arg1: string[]): void;
}

type Invoke = (iN: string, action: IAction) => void;

const inventory: IInventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction: Invoke = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  // action.call(inventory, itemName);
  action.apply(inventory, [itemName]);
};

invokeInventoryAction('Medkit', inventory.add);

console.log(inventory.items);

invokeInventoryAction('Gas mask', inventory.remove);

console.log(inventory.items);

export {};
