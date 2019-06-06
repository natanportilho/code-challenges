/* One Away: There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away. 

EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false
*/

function checkEdit(original, edited){
    if (original == edited){
        return true;
    }else if ((edited.length - original.length) > 1){
        return false;
    }

    var editCount = 0;
    var letters = new Array(128).fill(0);
    for(var i = 0; i < edited.length; i++){
        letters[edited.charCodeAt(i)]++;
    }

    for(var j = 0; j < original.length; j++){
        letters[original.charCodeAt(j)]++;
        if(letters[original.charCodeAt(j)] % 2 != 0){
            editCount++;
        }
    }

    return editCount <= 1;
}

console.log(checkEdit('pale','ple'));
console.log(checkEdit('pales','pale'));
console.log(checkEdit('pale','bale'));
console.log(checkEdit('pale','pales'));
console.log(checkEdit('pale','bake'));
console.log(checkEdit('pale','bakes'));
console.log(checkEdit('pale','pa'));
console.log(checkEdit('pale','paless'));