interface Person {
    name: string;
    age: number;
}

let employee: Person = {
    name: "Alice",
    age: 30,
};

interface Employee extends Person {
    employeeId: number;
    salary: number;
}

let emp: Employee = {
    name: "Bob",
    age: 35,
    employeeId: 101,
    salary: 50000,
};

console.log(emp.name);

interface Login {
    login(): Employee;
}


const employees: Employee[] = [
    { name: "Charlie", age: 28, employeeId: 102, salary: 60000 },
    { name: "David", age: 32, employeeId: 103, salary: 55000 },
    { name: "Eve", age: 29, employeeId: 104, salary: 62000 },
    { name: "Frank", age: 40, employeeId: 105, salary: 70000 },
];

let [firstEmployee, ...rest] = employees;
//Destructuring to get the first employee

console.log(firstEmployee);

