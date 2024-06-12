/* Name: Essa Abbas
Date: 20-02-2024

Q.14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */
var guestnames = ["Kavish", "Taha", "Musaddiq", "Haseeb"];
guestnames.forEach(function (guestname) {
    console.log("Hello ".concat(guestname, ", I invite you to join me for dinner tonight."));
});
