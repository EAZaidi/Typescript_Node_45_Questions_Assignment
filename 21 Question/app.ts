/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

21. They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
------------------------------------------------------------------------------------------*/

let book: {title: string; author: string; yearPublished: number} = {
    title: "The Hobbit",
    author: "John Ronald Reuel Tolkien",
    yearPublished: 1937,
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);