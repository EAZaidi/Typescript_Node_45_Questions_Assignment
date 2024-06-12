"use strict";
/* --------------------------------------------------------------------------------------------------------
Name: Essa Abbas

24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If
you want to try more comparisons, write more tests. Have at least one True and one False
result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
-----------------------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
// Equality and Inequality with strings
let Name = "apple";
let Name1 = "Apple";
console.log("Testing equality with strings:");
console.log(Name == Name);
console.log(Name == Name1);
// Using the lower case function
console.log("Testing with lower case");
console.log("Apple".toLowerCase() == "apple"); // True
/* Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to */
let Num1 = 10;
let Num2 = 5;
console.log("Numerical tests:");
console.log("10 == 10:", Num1 == Num1);
console.log("10 == 5:", Num1 == Num2);
console.log("10 > 5:", Num1 > Num2);
console.log("10 < 5:", Num1 < Num2);
console.log("10 >= 5:", Num1 >= Num2);
console.log("10 <= 5:", Num1 <= Num2);
// Tests using "and" and "or" operators
console.log("Tests using && and || operators:");
console.log(true && false);
console.log(true || false);
// Test whether an item is in a array
console.log("Test whether an item is in an array");
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes('apple'));
// Test whether an item is not in a array
console.log("Test whether an item is not in an array");
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes('mango'));
