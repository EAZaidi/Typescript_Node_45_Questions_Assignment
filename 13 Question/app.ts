/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
------------------------------------------------------------------------------------------*/

let transports: string [] = ["Honda Motorcycle", "Tesla Suv", "Hustler Car"];

transports.forEach(transport => {
    console.log(`I want to earn that much so I can purchase a ${transport}.`)
})