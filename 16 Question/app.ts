/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

16. More Guests: You've found a bigger dinner table, so there's room for more guests.
------------------------------------------------------------------------------------------*/

let guestnames: string [] = ["Kavish", "Taha", "Musaddiq", "Imran"];

guestnames.forEach(guestname => {
    console.log(`Great News! ${guestname}, I found a bigger dinner table at the venue. Now I am adding some more friends.`);
});

console.log(); // This will add space. 

// Adding more guests
guestnames.unshift("Faraz");
guestnames.splice(guestnames.length / 2, 0, "Usman");
guestnames.push("Abbas");

guestnames.forEach(guestname => {
    console.log(`Hello ${guestname}, I invite you to join me for dinner tonight.`);
});