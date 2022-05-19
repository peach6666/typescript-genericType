import { Person, Product, City } from "./dataType.js";
declare class DataCollection<T extends {
    name: string;
}, U> {
    protected items: T[];
    constructor(initialItems: T[]);
    getNames(): (string | null)[];
    getItem(index: number): T;
}
export declare let data: DataCollection<Person, City>;
export declare let data2: DataCollection<Product, City>;
export declare let data3: DataCollection<City, unknown>;
export declare let firstData: Person;
export {};
