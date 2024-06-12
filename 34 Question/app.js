/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a
array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
just the name of the pizza. For each pizza you should have one line of output containing a
simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you
like pizza. The output should consist of three or more lines about the kinds of pizza you
like and then an additional sentence, such as I really love pizza!
-------------------------------------------------------------------------------------------*/
var favouritePizzas = ["Chicken Tikka", "Double Cheese", "Afghani Tikka"];
var i = 0;
for (var i_1 = 0; i_1 < favouritePizzas.length; i_1++) {
    console.log(favouritePizzas[i_1]);
}
i = 0;
for (var i_2 = 0; i_2 < favouritePizzas.length; i_2++) {
    console.log("I really like ".concat(favouritePizzas[i_2], " pizza."));
}
console.log("These are my favourite pizza flavors.");
console.log("These three pizzas are the best.");
console.log("I really love pizza!");
