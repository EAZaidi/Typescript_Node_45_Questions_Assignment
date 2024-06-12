"use strict";
/* --------------------------------------------------------------------------------------------------------
Name: Essa Abbas

29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your
array. If the fruit is in your array, the if block should print a statement, such as You really
like bananas!
-----------------------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["mango", "apple", "banana"];
// Check if "mango" is in the array
if (favorite_fruits.includes("mango")) {
    console.log("I really like mangoes!");
}
// Check if "apple" is in the array
if (favorite_fruits.includes("apple")) {
    console.log("I really like apples!");
}
// Check if "banana" is in the array
if (favorite_fruits.includes("banana")) {
    console.log("I really like bananas!");
}
// Check if "orange" is in the array
if (favorite_fruits.includes("orange")) {
    console.log("I really like oranges!");
}
// Check if "kiwi" is in the array
if (favorite_fruits.includes("kiwi")) {
    console.log("I really like kiwis!");
}
else {
    console.log("Orange is not in your favorite fruits list");
    console.log("Kiwi is not in your favorite fruits list");
}
