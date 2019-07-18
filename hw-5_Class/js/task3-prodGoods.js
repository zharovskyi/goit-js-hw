// TAAK 3
// Напиши класс Storage, который будет создавать объекты
//  для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, 
// и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(arr) {
        this.items = arr; //this.iems we use for create obj Storage with key=item and value [];
    }
    getItems() {
        return this.items;
    }
    addItem(items) {
        this.items.push(items);

    }
    removeItem(items) {
        for (const i of this.items) {
            if (i === items) {
                this.items.splice(this.items.indexOf(i), 1);
            }

        }

        return this.items;
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

console.log(storage);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items);