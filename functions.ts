function add(x: number, y: number): number {
    return x + y;
}
console.log(add(5, 10));


function greet(name: string, age?: number, city: string = 'Pune'): string {
    return `Hello, my name is ${name}. ${age?`I am ${age} years old. `:""}I live in ${city}. `;
}

console.log(greet("Neil", 22, "Mumbai"));
console.log(greet("Neil", 22));
console.log(greet("Neil"));
console.log(greet("Neil", undefined, "Delhi"));

function useArray(x: number,...arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(useArray(1,2,3,4,5));

class Person {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Employee extends Person {
    #employeeId: number;
    salary: number;
    constructor(name: string, age: number, employeeid: number,salary: number) {
        super(name, age);
        this.#employeeId = employeeid;
        this.salary = salary;
    }

    greet(): string {
        return `Hello, I am an Employee at Imocha. My Employee Id is ${this.#employeeId}`
    }

}
let person1 = new Person("Neil", 22);
console.log(person1.greet());

let emp1 = new Employee("Yash",29,1,120)
console.log(emp1.greet())

