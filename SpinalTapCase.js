// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function spinalCase(str) {
    return str.replace(/([a-z])(?=[A-Z])/g, "$1-").replace(/[_<>\s]/g, "-").toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap'));