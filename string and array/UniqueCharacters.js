// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function hasAllUniqueCharacters(s){
    var map = new Map();
    for (var i = 0; i < s.length; i++){
        if (!map.has(s[i])){
            map.set(s[i], s[i]);
        }
        else{
            return false;;
        }
    }
    return true;
}

function hasAllUniqueCharactersNoDataStructureUsed(s){
    s = sort(s);
    for (var i = 0; i < s.length; i = i + 1){
       if (s[i] == s[i+1]){
        return false;
       } 
    }
    return true;
}

function sort(s){
    return s.split('').sort().join('');
}

console.log(hasAllUniqueCharacters('natan'));
console.log(hasAllUniqueCharactersNoDataStructureUsed('natan'));