
/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
console.log('testing');


// Our first TS Code
let myName: string = 'christian';

let age: number = 65;
let isPrime: boolean = true;

// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value
let thieves: string = "126";


// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing

let student;

// ----- Arrays: Dynamic, you can pass any data type
let students: string[] = ['sam', 'omar'];
let ages: number[] = [1, 2, 3];
let arr: (string | number)[] = ['jake', 2];

// Another huge benefit: Code completion
students[0].length
ages[0].toString



// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
let tup: [number, string] = [1, 'sam'];

// Code Completion
tup.push(1);
console.log(tup);



// ----- Enums: Special "Class" that represents a group of constants.
const small: number = 1;
const medium: number = 2;
const large: number = 3;


// PascalCase "numeric"
enum Size {small, medium, large};
console.log(Size)

const mySize: Size = Size.large;
console.log(mySize);

// "string"
enum myStudents {student1 = 'sam', student2 = 'jake', student3 = 'justin'};
const theStudent: myStudents = myStudents.student3;
console.log(theStudent);


// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config

function calculateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2;
    } else {
        return income * 1.5;
    }

}

console.log(calculateTax(48000));


// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

const employee: {
    readonly id: number,
    name: string,
    age: number,
    location?: string
} = {
    id: 1,
    name: 'dylan',
    age: 99
}



