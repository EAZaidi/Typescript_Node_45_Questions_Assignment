/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of
each animal.
• Modify your program to print a statement about each animal, such as A
dog would make a great pet. 
• Add a line at the end of your program stating what these
animals have in common. You could print a sentence such as Any of these animals would
make a great pet!
-------------------------------------------------------------------------------------------*/

let pet_animals: string[] = ["Dog", "Horse", "Cat"];

for(let i = 0; i < pet_animals.length; i++){
    console.log(pet_animals[i]);
}

let i = 0;
for(i = 0; i < pet_animals.length; i++){
    console.log(`A ${pet_animals[i]} would make a great pet`);
}

console.log("All of these animals are people friendly and would make a great pet!" )