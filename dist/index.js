import { Person, Product, City } from "./dataType.js";
let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peter", "New York")
];
let products = [
    new Product("Shoes", 100),
    new Product("Hat", 50)
];
let city = [
    new City("London", 8136000),
    new City("Paris", 2141000)
];
function display() {
    [...people, ...products].forEach(item => {
        console.log(`Item:${item.name}`);
    });
}
display();
//<T>為泛型參數，到時會被某個特定型別取代
//extends關鍵字限定未來取代T的型別
//雛型別聯集外，可用這種物件形狀來限定泛型條件(此為只要key是字串即可)
class DataCollection {
    constructor(initialItems) {
        //protected關鍵字讓子類別也可繼承泛型
        this.items = [];
        this.items.push(...initialItems);
    }
    getNames() {
        return this.items.map(item => {
            if (item instanceof Person || item instanceof Product) {
                return item.name;
            }
            else {
                return null;
            }
        });
    }
    getItem(index) {
        return this.items[index];
    }
}
//在有使用模組的專案，必須加入export關鍵字，index.d.ts檔才能編譯
//建立一個new物件實字時，用Person型別替代泛型參數<T>
export let data = new DataCollection(people);
console.log(`Names:${data.getNames().join(",")}`);
//每次建立新的物件實字，都可以用不同型帶替代泛型參數 
export let data2 = new DataCollection(products);
//不給泛型引數，TS也會隱性推論
export let data3 = new DataCollection(city);
export let firstData = data.getItem(0);
console.log(`First:${firstData.name},${firstData.city}`);
//子類別繼承泛型
class ForExtend {
    constructor(element) {
        this.project = [];
        this.project.push(...element);
    }
}
class UseForExtend extends ForExtend {
    constructor(element) {
        super(element);
    }
    findPerson(personName) {
        this.project.forEach(person => {
            if (person.name === personName) {
                console.log(`${person.name} lives in ${person.city}`);
            }
        });
    }
}
let peopleData = new UseForExtend(people);
let foundBob = peopleData.findPerson("Bob Smith");
//# sourceMappingURL=index.js.map