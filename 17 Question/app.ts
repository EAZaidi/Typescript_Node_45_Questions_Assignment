/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

17. Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
and you can only invite two guests.
------------------------------------------------------------------------------------------*/

let guestnames: string [] = ["Kavish", "Taha", "Musaddiq", "Imran", "Faraz", "Usman", "Abbas"];

// Unfortunately, the new table won’t arrive in time
console.log("Unfortunately, the new table wont arrive in time, and I can only invite two guests.");

while (guestnames.length > 2){
    let removeGuest = guestnames.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to the dinner.`);
}
console.log();

guestnames.forEach(guestname =>{
    console.log(`Dear ${guestname}, You are still invited to the dinner tonight.`);
});

guestnames.splice(0, guestnames.length);
console.log(guestnames); // Shows an empty list