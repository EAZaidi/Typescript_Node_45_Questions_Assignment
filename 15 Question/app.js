/* Name: Essa Abbas
Date: 20-02-2024

Q.15:  Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest. */
// First Guest list
var guestnames = ["Kavish", "Taha", "Musaddiq", "Haseeb"];
// Guest Invitation Loop
guestnames.forEach(function (guestname) {
    console.log("Hello ".concat(guestname, ", I invite you to join me for dinner tonight."));
});
// Guest Name who is unable to attend
var unabletoAttend = "Haseeb";
console.log("\n ".concat(unabletoAttend, " can't make it to dinner. \n"));
// Adding a new guest
var Newguestname = "Imran";
guestnames[guestnames.indexOf(unabletoAttend)] = Newguestname;
// Updated Invitations
guestnames.forEach(function (guestname) {
    console.log("Hello ".concat(guestname, ", I invite you to join me for dinner tonight."));
});
