/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

15. Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
------------------------------------------------------------------------------------------*/

// First Guest list
let guestnames: string [] = ["Kavish", "Taha", "Musaddiq", "Haseeb"];

// Guest Invitation Loop
guestnames.forEach(guestname => {
    console.log(`Hello ${guestname}, I invite you to join me for dinner tonight.`);
});

// Guest Name who is unable to attend
let unabletoAttend = "Haseeb";
console.log(`\n ${unabletoAttend} can't make it to dinner. \n`);

// Adding a new guest
let Newguestname = "Imran";
guestnames[guestnames.indexOf(unabletoAttend)] = Newguestname;

// Updated Invitations
guestnames.forEach(guestname => {
    console.log(`Hello ${guestname}, I invite you to join me for dinner tonight.`)
});