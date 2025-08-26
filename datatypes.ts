let name: string = "Neil";

let newName = name.toUpperCase();

let isValid: boolean = true;
//in typescript, boolean does not have a predefived value of false
//it has to be explicitly defined

let age: number = 22;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let sentence: string = `My name is ${name}
I am ${age} years old.`;

console.log(sentence);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//Two ways to define arrays
list1.push(4);
list2.splice(1,2,5,6,7)
console.log(list1);
console.log(list2);


let tuple: [string, number];
tuple = ["hello", 10]; // OK
//tuple = [10, "hello"]; // Error
console.log(tuple[0].substring(1,3)); // OK

//tuple[2] = "world"; // OK, 'string' can be assigned to 'string | number'
//tuple[3] = 100; // Error, Property '3' does not exist on type '[string, number]'.



//enum
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
let colorName: string | undefined = Color[2];
console.log(c); // Displays 'Green' as its value is 2 above

