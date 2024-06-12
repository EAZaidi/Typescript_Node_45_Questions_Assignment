/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function
called make_great() that modifies the array of magicians by adding the phrase the Great
to each magician’s name. Call show_magicians() to see that the list has actually been
modified.
-------------------------------------------------------------------------------------------*/

let Magicians: string[] = ["Harry Potter", "Albus Dumbledore", "Lord Voldemort"];

function show_magicians(Magicians:string[]) {
    for(let i = 0; i < Magicians.length; i++){
        console.log(Magicians[i])
    }
};
show_magicians(Magicians)
//  Write a function called make_great() that modifies the array of magicians by adding the phrase
//  the Great to each magician’s name.
console.log("\nModify the Magicians list")
console.log(" ")

// Modifying the Magicians list
function make_great() {
    for(let i = 0; i < Magicians.length; i++){
        console.log(`The Great ${Magicians[i]}`)
    }
}
// Call show_magicians() to see that the list has actually been modified.
make_great();