/* Given two strings, write a method to decide if one is a permutation of the other. */ß
function isPermutation(s1, s2){
    if (s1.length != s2.length){
        return false;
    }
    return sort(s1) == sort(s2);
}

function sort(s){
    return s.split('').sort().join('');
}

console.log(isPermutation('ABCD', 'DBAC'));
console.log(isPermutation('ABCD', 'DBFC'));

// DBAC
// ABCD