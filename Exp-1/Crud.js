class CrudArray {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  // Create
  create(name) {
    const newItem = { id: this.nextId++, name };
    this.items.push(newItem);
    return newItem;
  }

  // Read all
  readAll() {
    return this.items;
  }

  // Read by id
  readById(id) {
    return this.items.find(item => item.id === id);
  }

  // Update
  update(id, newName) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.name = newName;
      return true;
    }
    return false;
  }

  // Delete
  delete(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}

// Example usage:
const crud = new CrudArray();

const item1 = crud.create('Item 1');
const item2 = crud.create('Item 2');

console.log('All items:', crud.readAll());

crud.update(item1.id, 'Updated Item 1');
console.log('Item 1 after update:', crud.readById(item1.id));

crud.delete(item2.id);
console.log('All items after deletion:', crud.readAll());
