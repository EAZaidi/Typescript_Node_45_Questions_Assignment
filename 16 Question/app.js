/* Name: Essa Abbas
Date: 20-02-2024

Q.16: More Guests: You've found a bigger dinner table, so there's room for more guests. */
var guestnames = ["Kavish", "Taha", "Musaddiq", "Imran"];
guestnames.forEach(function (guestname) {
    console.log("Great News! ".concat(guestname, ", I found a bigger dinner table at the venue. Now I am adding some more friends."));
});
console.log(); // This will add space. 
// Adding more guests
guestnames.unshift("Faraz");
guestnames.splice(guestnames.length / 2, 0, "Usman");
guestnames.push("Abbas");
guestnames.forEach(function (guestname) {
    console.log("Hello ".concat(guestname, ", I invite you to join me for dinner tonight."));
});
