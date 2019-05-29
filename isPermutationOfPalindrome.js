/* Palindrome Permutation:  Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.) 

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat'; "atc o eta·; etc.)*/

// The logic I was able to identify here: To be able to create a palindrome, all but 1 of the letters must appear an even number of times.
// If all the letters appear an even number of times = palindrome.
// If all but 1 of the letters appear an even number of times = palindrome.
// Ex: aaaccdccaaa, if you add an 'a' or 'c', you can not make it a palindrome anymore even if you reorder the letter.s

function isPermutationOfPalindrome(s) {
    s = s.toLowerCase();
    var array = new Array(128).fill(0); // For each character
    for (var i = 0; i < s.length; i++) {
        if (s[i] != ' '){
            array[s.charCodeAt(i)]++;
        }
    }

    var numberOfOddsChars = 0;
    for (var j = 0; j < array.length; j++){
        if (array[j]%2 !== 0){
            numberOfOddsChars++;
            if (numberOfOddsChars > 1){
                return false;
            }
        }
    }

    return true;
}

console.log(isPermutationOfPalindrome('Tact Coa'));
console.log(isPermutationOfPalindrome('natan'));
console.log(isPermutationOfPalindrome('luz azul'));
console.log(isPermutationOfPalindrome('reviver'));
console.log(isPermutationOfPalindrome('aaabbbg'));

