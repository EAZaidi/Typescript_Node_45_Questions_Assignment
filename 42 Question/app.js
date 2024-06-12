/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function
called make_great() that modifies the array of magicians by adding the phrase the Great
to each magician’s name. Call show_magicians() to see that the list has actually been
modified.
-------------------------------------------------------------------------------------------*/
var Magicians = ["Harry Potter", "Albus Dumbledore", "Lord Voldemort"];
function show_magicians(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
;
show_magicians(Magicians);
//  Write a function called make_great() that modifies the array of magicians by adding the phrase
//  the Great to each magician’s name.
console.log("\nModify the Magicians list");
console.log(" ");
// Modifying the Magicians list
function make_great() {
    for (var i = 0; i < Magicians.length; i++) {
        console.log("The Great ".concat(Magicians[i]));
    }
}
// Call show_magicians() to see that the list has actually been modified.
make_great();
