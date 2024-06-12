/*-----------------------------------------------------------------------------------------
Name: Essa Abbas

37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with
a message that reads I love TypeScript. Make a large shirt and a medium shirt with the
default message, and a shirt of any size with a different message.
-------------------------------------------------------------------------------------------*/
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I LOVE TYPESCRIPT!"; }
    console.log("I am making a ".concat(size, " size T-shirt with the message ").concat(message, " printed on it."));
}
//Modify the make_shirt are large by default.
make_shirt();
var size = "Medium";
make_shirt(size);
//and other size of shirt with different size with a different message.
size = "Small";
var text = "I lOVE CODING!";
make_shirt(size, text);
