/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

44. Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as the
function call provides, and it should print a summary of the sandwich that is being
ordered. Call the function three times, using a different number of arguments each time.
-------------------------------------------------------------------------------------------*/
function sandwich(items) {
    for (var i = 0; i < items.length; i++) {
        console.log("".concat(items[i], " = ").concat(items[i + 1]));
        i++;
    }
}
console.log("Customer 1 Sandwich Order with items");
sandwich(["cheese slice", 1, "Tikka Boti", 5, "Tomato slices", 2]);
console.log(" ");
console.log("Customer 2 Sandwich Order with items");
sandwich(["Fried egg", 1, "Malai Boti", 4, "Cucumber slices", 2]);
console.log(" ");
console.log("Customer 3 Sandwich Order with items");
sandwich(["cheese slices", 2, "Afghani Tikka", 6, "Tomamto slices", 2, "Cucumber slices", 2,]);
