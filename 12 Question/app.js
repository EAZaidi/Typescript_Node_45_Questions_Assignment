/* Name: Essa Abbas
Date: 20-03-2024
Q.12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.*/
var names = ["Kavish", "Taha", "Musaddiq", "Haseeb"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some TypeScript today?"));
}
