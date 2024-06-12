/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

43. Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original array
will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name.
-------------------------------------------------------------------------------------------*/
var Magicians = ["Harry Potter", "Albus Dumbledore", "Lord Voldemort"];
function show_magicians(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
;
console.log("\nModify the Magicians list");
console.log(" ");
function make_great() {
    for (var i = 0; i < Magicians.length; i++) {
        console.log("The Great ".concat(Magicians[i]));
    }
    return Magicians;
}
// Call the function make_great() with a copy of the array of magicians’ names
var great_magicians = make_great();
// Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
console.log("\nOriginal Magicians names");
show_magicians(Magicians);
