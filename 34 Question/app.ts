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

let favouritePizzas: string[] = ["Chicken Tikka", "Double Cheese", "Afghani Tikka"];
let i: number = 0;
for(let i = 0; i < favouritePizzas.length; i++){
    console.log(favouritePizzas[i]);
}
i = 0;
for(let i = 0; i < favouritePizzas.length; i++){
    console.log(`I really like ${favouritePizzas[i]} pizza.`);    
}
console.log("These are my favourite pizza flavors.");
console.log("These three pizzas are the best.")
console.log("I really love pizza!");