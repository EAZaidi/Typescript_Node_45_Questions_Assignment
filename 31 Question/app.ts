/*------------------------------------------------------------------------------------------ 
Name: Essa Abbas

31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is
printed. 
------------------------------------------------------------------------------------------*/

let users: string[]=[];
//userNames.push("admin");
//userNames.push("user1");
//userNames.push("user2");
//userNames.push("user3");


// Remove all of the usernames from your array, and make sure the correct message is printed
if(users.length==0){

console.log("We need to find some user.")
}

let checkUser:string = "admin"; //change user name or take input with prompt method

for(let i=0; i<users.length; i++){

    if(checkUser===users[i]){
        console.log(`Hello ${checkUser}, would you like to see a status report?`);
        
        
    }else if(checkUser===users[i]){
    console.log(`Hello ${checkUser}, thank you for logging in again.`);
    
    }
}