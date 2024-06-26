"use strict";
/* --------------------------------------------------------------------------------------------------------
Name: Essa Abbas

30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a
website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like
to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
-----------------------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["admin", "user1", "user2", "user3", "user4", "user5"];
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report? 
let checkUser = "admin";
for (let i = 0; i < userNames.length; i++) {
    if (checkUser === userNames[i]) {
        console.log(`Hello ${checkUser}, would you like to see a status report?`);
    }
    else if (checkUser === userNames[i]) {
        console.log(`Hello ${checkUser}, thank you for logging in again.`);
    }
}
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
checkUser = "user1";
for (let i = 0; i < userNames.length; i++) {
    if (checkUser === userNames[i]) {
        console.log(`Hello ${checkUser}, thank you for logging in again.`);
    }
    else if (checkUser === userNames[i])
        console.log(`Hello ${checkUser}, would you like to see a status report?`);
}
