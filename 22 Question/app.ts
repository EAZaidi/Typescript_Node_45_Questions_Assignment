/*------------------------------------------------------------------------------------------ 
Name: Essa Abbas

22. Intentional Error: If you haven’t received an array index error in one of your programs
yet, try to make one happen. Change an index in one of your programs to produce an
index error. Make sure you correct the error before closing the program.
------------------------------------------------------------------------------------------*/

let countries: string [] = [
    "Canada", 
    "Australia", 
    "Switzerland", 
    "Luxembourg", 
    "Newzealand"
];
// Intentional Error 
console.log("I would like to visit", countries[5]);
// Correction of Error
console.log("I would like to visit", countries[2]);
