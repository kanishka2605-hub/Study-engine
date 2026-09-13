// 1. Introduction to JavaScript & How to Run It

// What is JavaScript?

// JavaScript (JS) is a programming language used to make websites and applications interactive and dynamic.

// For example:

// * Showing/hiding elements
// * Validating forms
// * Creating buttons and menus
// * Calculating values
// * Changing webpage content
// * Handling user clicks
// * Fetching data from servers
// * Building web applications

// HTML vs CSS vs JavaScript

// Technology.                            Purpose
//   HTML                                  Structure
//   CSS                                   Appearnce/Styling
//   JavaScript.                           Behaviour/Logic

// Example:
// HTML
// <button id="btn">Click Me</button>

// CSS
// button {
//   color: red;
// }

// JS
// document.getElementById("btn").onclick = function() {
//     alert("Hello!");
// };
// HTML creates the button, CSS styles it, and JavaScript makes it react.


// Ways to Run JavaScript

// 1. Browser Console

// Open Chrome → Developer Tools → Console.

// You can directly write:
// JavaScript
// console.log("Hello World");

// 2. HTML <script> tag
// HTML
// <script>
//     console.log("Hello World");
// </script>

// 3. External JavaScript file
// script.js
// JavaScript
// console.log("Hello World");

// index.html
// HTML
// <script src="script.js"></script>

// Using an external file is generally preferred for larger programs.

// 4. Node.js

// JavaScript can also run outside the browser using Node.js.

// Example:
// JavaScript
// console.log("Hello World");

// Run:
// bash
// node script.js


// 2. Variables, Data Types & Operators

// Variables

// A variable is a named container for storing data.

// JavaScript has three ways to declare variables:
// JavaScript
// let age = 18;
// const name = "Kanishka";
// var city = "Jaipur";

// let

// Used when the value may change.
// JS
// let age = 18;
// age = 19;

// const

// Used when the variable should not be reassigned.
// JS
// const pi = 3.14;

// This is not allowed:
// JS
// pi = 4;

// var

// Older way of declaring variables.
// JS
// var name = "John";

// For modern JavaScript, prefer:
// let
// const

// Data Types

// JavaScript data types can broadly be divided into:

// Primitive

// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Non-primitive

// * Object
// * Array
// * Function

// String

// Text is stored as a string.
// let name = "Kanishka";

// Strings can use:
// "Hello"
// 'Hello'
// `Hello`
// The backtick version is called a template literal.

// Number

// JavaScript uses Number for integers and decimals.
// let age = 18;
// let price = 99.99;

// Boolean

// Only two values:
// true
// false

// Example:
// let isLoggedIn = true;

// Undefined

// A variable exists but has not been given a value.
// let x;
// console.log(x);
// Output: undefined

// Null

// null means intentionally empty/no value.
// let result = null;

// Checking Data Type
// use:
// console.log(typeof 10);
// console.log(typeof "Hello");
// console.log(typeof true);

// Output: 
// number
// string
// boolean

// Operators

// Arithmetic Operators
// +
// -
// *
// /
// %
// **

// Example:
// let a = 10;
// let b = 3;

// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// Assignment Operators
// =
// +=
// -=
// *=
// /=
// %=

// Comparison Operators:
// >
// <
// >=
// <=
// ==
// ===
// !=
// !==

// ==

// Checks value after type conversion.

// ===

// Checks value AND data type.

// Important

// Prefer:
// === //equal to
// !== //not equals to

// Logical Operators

// AND &&

// Both conditions must be true.
// age >= 18 && hasID

// OR ||

// At least one condition must be true.
// isStudent || isEmployee

// NOT !

// Reverses a boolean.
// !true
// Result: false

// Ternary Operator

// Short form of if...else.
// condition ? valueIfTrue : valueIfFalse;

// Example:
// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// Switch

// Useful when comparing one value against multiple possibilities.
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid day");
// }
// break prevents execution from continuing into the next case.

// Loops

// Loops repeat code.

// for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// Output: 
// 0
// 1
// 2
// 3
// 4

// Structure:
// for (initialization; condition; update) {
//     // code
// }

// while
// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// 4. Functions & Scope

// A function is a reusable block of code.
// Function Declaration
// function greet() {
//     console.log("Hello");
// }
// Call it:
// greet();

// Parameters:
// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Kanishka");
// Here:
// * name → parameter
// * "Kanishka" → argument

// Return

// return sends a value back from a function.
// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);

// console.log(result);
// Output: 30

// Arrow Functions

// Modern JavaScript provides arrow functions.
// const add = (a, b) => {
//     return a + b;
// };
// Short form:
// const add = (a, b) => a + b;
// For one parameter:
// const square = x => x * x;

// Scope

// Scope determines where a variable can be accessed.

// Global Scope
// let name = "John";

// function greet() {
//     console.log(name);
// }
// name can be accessed inside the function.

// Function Scope
// function test() {
//     let x = 10;
// }

// console.log(x); // Error
// x only exists inside the function.

// Block Scope

// let and const are block scoped.
// if (true) {
//     let x = 10;
// }

// console.log(x); // Error

// 5. Arrays & Array Methods

// An array stores multiple values in one variable.
// let fruits = ["Apple", "Mango", "Banana"];
// Indexes start from 0.
// Apple   → 0
// Mango   → 1
// Banana  → 2
// Access:
// console.log(fruits[0]);

// Array Length
// console.log(fruits.length);

// Adding Elements

// push()
// Adds to the end.
// fruits.push("Orange");

// unshift()
// Adds to the beginning.
// fruits.unshift("Grapes");

// Removing Elements

// pop()
// Removes from the end.
// fruits.pop();

// shift()
// Removes from the beginning.
// fruits.shift();

// splice()
// Adds/removes elements at any position.
// let numbers = [10, 20, 30, 40];

// numbers.splice(1, 1);
// Result: [10, 30, 40]

// slice()
// Creates a portion of an array without changing the original.
// let numbers = [10, 20, 30, 40];

// let result = numbers.slice(1, 3);
// Result: [20, 30]

// indexOf()
// let fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits.indexOf("Mango"));
// Output: 1

// includes()
// Checks whether an element exists.
// fruits.includes("Apple");
// Returns: true

// forEach()
// Runs a function for every element.
// let numbers = [1, 2, 3];

// numbers.forEach(function(number) {
//     console.log(number);
// });
// Arrow version:
// numbers.forEach(number => {
//     console.log(number);
// });

// map()
// Creates a new array by transforming every element.
// let numbers = [1, 2, 3];

// let doubled = numbers.map(number => number * 2);
// Result: [2, 4, 6]

// Remember
// map() → transform

// filter()
// Creates a new array containing elements that satisfy a condition.
// let numbers = [1, 2, 3, 4, 5];

// let even = numbers.filter(number => number % 2 === 0);
// Result: [2, 4]

// Remember
// filter() → select

// find()
// Returns the first matching element.
// let numbers = [10, 20, 30];

// let result = numbers.find(number => number > 15);
// Result: 20

// some()
// Checks whether at least one element satisfies a condition.
// numbers.some(number => number > 25);

// every()
// Checks whether all elements satisfy a condition.
// numbers.every(number => number > 5);

// sort()
// Sorts an array.
// For numbers, be careful:
// let numbers = [10, 2, 5];

// numbers.sort();It may not produce numerical order because JavaScript’s default sorting is based on string representation.

// Use:
// numbers.sort((a, b) => a - b);
// Descending:
// numbers.sort((a, b) => b - a);

// reverse()
// numbers.reverse();
// Reverses the array.

// join()
// Converts an array into a string.
// let words = ["Hello", "World"];

// console.log(words.join(" "));
// Output: Hello World

// 6. JavaScript Objects

// An object stores data in key-value pairs.
// let person = {
//     name: "Kanishka",
//     age: 18,
//     city: "Jaipur"
// };

// Accessing Properties

// Dot notation
// console.log(person.name);

// Bracket notation
// console.log(person["name"]);
// Bracket notation is useful when the property name is stored in a variable.

// Changing Properties
// person.age = 19;

// Adding Properties
// person.country = "India";

// Deleting Properties
// delete person.city;

// Object Methods

// A function inside an object is called a method.
// let person = {
//     name: "John",

//     greet: function() {
//         console.log("Hello");
//     }
// };

// person.greet();

// Nested Objects
// let student = {
//     name: "John",

//     address: {
//         city: "Jaipur",
//         country: "India"
//     }
// };
// Access:
// console.log(student.address.city);

// Object.keys()
// Object.keys(person);
// Returns an array containing keys.

// Object.values()
// Object.values(person);
// Returns an array containing values.

// Object.entries()
// Object.entries(person);
// Returns:
// [
//     ["name", "John"],
//     ["age", 20]
// ]

// 7. Modern JavaScript (ES6+)

// ES6 introduced many important features.

// Important modern JavaScript concepts:

// * let
// * const
// * Arrow functions
// * Template literals
// * Destructuring
// * Spread operator
// * Rest parameter
// * Default parameters
// * for...of
// * Modules
// * Promises
// * Classes
// * Optional chaining
// * Nullish coalescing

// ⸻

// Template Literals

// Instead of:
// let name = "John";
// let age = 20;

// console.log("My name is " + name + " and I am " + age);

// Use:
// console.log(`My name is ${name} and I am ${age}`);

// Destructuring
// Destructuring allows you to extract values from arrays or objects into variables.

// Array Destructuring
// let numbers = [10, 20, 30];

// let [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// Output:
// 10
// 20
// 30

// Skipping Values
// let numbers = [10, 20, 30];

// let [a, , c] = numbers;
// Now:
// a = 10
// c = 30

// Object Destructuring
// let person = {
//     name: "John",
//     age: 20
// };

// let { name, age } = person;
// Now:
// console.log(name);
// console.log(age);

// Renaming
// let { name: studentName } = person;
// Now the variable is: studentName

// Spread Operator ...
// Spread means expand/unpack values.

// Arrays
// let a = [1, 2, 3];

// let b = [...a];
// b becomes: [1, 2, 3]

// Combining Arrays
// let a = [1, 2];
// let b = [3, 4];

// let result = [...a, ...b];
// Result: [1, 2, 3, 4]

// Objects
// let person = {
//     name: "John",
//     age: 20
// };

// let student = {
//     ...person,
//     course: "CSE"
// };

// Rest Parameter ...
// Rest collects multiple values into an array.
// function add(...numbers) {
//     console.log(numbers);
// }

// add(10, 20, 30);
// numbers becomes: [10, 20, 30]
// Then:
// function add(...numbers) {
//     let sum = 0;

//     for (let number of numbers) {
//         sum += number;
//     }

//     return sum;
// }

// Spread vs Rest
// The syntax is the same:
// ...
// But the purpose is different.

// Spread
// Expands
// let arr2 = [...arr1];

// Rest
// Collects
// function test(...values) {}

// Easy memory trick:
// Spread = spread things out
// Rest = collect the rest

// Optional Chaining ?.
// Prevents errors when accessing a property that may not exist.
console.log(user?.address?.city);

// Nullish Coalescing ??
// Provides a fallback when a value is null or undefined.
// let name = null;

// console.log(name ?? "Guest");
// Output: Guest

// 8. Browser & DOM: Selecting & Changing Elements

// What is the DOM?
// DOM = Document Object Model
// The browser converts HTML into a tree-like structure of objects.
// Example:
// <body>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </body>
// JavaScript can interact with these elements through the DOM.

// Selecting Elements
// getElementById()

// HTML:
// <h1 id="title">Hello</h1>

// JavaScript:
// let title = document.getElementById("title");

// querySelector()
// let title = document.querySelector("#title");

// Class:
// let box = document.querySelector(".box");

// Tag:
// let heading = document.querySelector("h1");

// querySelectorAll()
// Selects multiple matching elements.
// let paragraphs = document.querySelectorAll("p");

// Changing Text
// title.textContent = "Hello World";

// innerHTML
// Can change HTML inside an element.
// element.innerHTML = "<b>Hello</b>";

// Difference
// textContent → text
// innerHTML → HTML content

// Changing CSS
// element.style.color = "red";
// element.style.fontSize = "30px";

// Classes
// Add
// element.classList.add("active");

// Remove
// element.classList.remove("active");

// Toggle
// element.classList.toggle("active");

// Check
// element.classList.contains("active");

// Attributes

// Get:
// element.getAttribute("id");

// Set:
// element.setAttribute("title", "Hello");

// Remove:
// element.removeAttribute("title");

// 9. DOM Manipulation: Creating, Removing & Traversing Nodes

// JavaScript can create and remove HTML elements dynamically.
// Creating an Element
// let p = document.createElement("p");
// Add text:
// p.textContent = "Hello World";

// Adding Element
// document.body.appendChild(p);

// append()
// document.body.append(p);

// prepend()
// Adds at the beginning.
// document.body.prepend(p);

// Removing Elements
// element.remove();

// Traversing the DOM
// Traversal means moving between related elements.
// Suppose:
// <div>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </div>

// Parent
// element.parentElement;

// Children
// element.children;

// First Child
// element.firstElementChild;

// Last Child
// element.lastElementChild;

// Next Element
// element.nextElementSibling;

// Previous Element
// element.previousElementSibling;

// 10. Events & Event Handling
// An event is something that happens in a webpage.
// Examples:
// * Click
// * Mouse movement
// * Key press
// * Form submission
// * Page loading
// * Input changes

// onclick
// button.onclick = function() {
//     console.log("Clicked!");
// };

// addEventListener()
// Modern and flexible way to handle events.
// button.addEventListener("click", function() {
//     console.log("Clicked!");
// });

// Arrow function:
// button.addEventListener("click", () => {
//     console.log("Clicked!");
// });

// Event Object
// Event handlers receive an event object.
// button.addEventListener("click", (event) => {
//     console.log(event);
// });

// event.target
// Identifies the element that triggered the event.
// button.addEventListener("click", (event) => {
//     console.log(event.target);
// });

// Preventing Default Behaviour
// For example, stopping a form from automatically submitting:
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// });

// Event Bubbling
// Events generally move from the target element upward through its ancestors.
// Example:
// button
//   ↑
// div
//   ↑
// body
//   ↑
// document
// This is called event bubbling.

// Event Delegation
// Instead of adding listeners to many child elements, you can attach one to their parent.
// list.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         console.log(event.target.textContent);
//     }
// });
// This is particularly useful for dynamically created elements.



// ⭐ VERY IMPORTANT JAVASCRIPT BASICS TO REMEMBER
// Input
// In browser:
// let value = document.querySelector("#input").value;

// With Node.js:
// process.stdin.on("data", function(data) {
//     let input = data.toString().trim();
// });
// 
// Convert String to Number
// Number(value).  or
// parseInt(value).  or
// parseFloat(value). 

// String to Uppercase
// name.toUpperCase();
// String to Lowercase
// name.toLowerCase();

// String Length
// name.length;

// Character Access
// name[0];

// Check String
// name.includes("a");

// ⭐ Important String Methods
// str.length
// str.toUpperCase()
// str.toLowerCase()
// str.trim()
// str.includes()
// str.startsWith()
// str.endsWith()
// str.indexOf()
// str.slice()
// str.substring()
// str.replace()
// str.split()

// ⭐ JavaScript Patterns You Should Know

// Find greatest number
// let max = numbers[0];

// for (let number of numbers) {
//     if (number > max) {
//         max = number;
//     }
// }

// Find smallest
// let min = numbers[0];

// for (let number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }

// Sum of array
// let sum = 0;

// for (let number of numbers) {
//     sum += number;
// }

// Count even numbers
// let count = 0;

// for (let number of numbers) {
//     if (number % 2 === 0) {
//         count++;
//     }
// }

// Reverse a string
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// Check even/odd
// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }