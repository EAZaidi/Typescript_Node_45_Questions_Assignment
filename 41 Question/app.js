/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

41. Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.
-------------------------------------------------------------------------------------------*/
var Magicians = ["Harry Potter", "Albus Dumbledore", "Lord Voldemort"];
function show_magicians(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
;
show_magicians(Magicians);
