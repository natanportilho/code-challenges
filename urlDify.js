/* URLify: Write a method to replace all spaces in a string with '%20'. 
You may assume that the string has sufficient space at the end to hold the additional characters, 
and that you are given the "true" length of the string. (Note: if implementing in Java, 
    please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"*/

function urlDify(s){
    s= s.split('');
    var s2 = s;

    for (var i =0; i < s.length; i++){
        if (s[i] == ' '){
            s2[i] = '%20'
        }else{
            s2[i] = s[i];
        }
        
    }
    return s2.join('');
}

console.log(urlDify('Problema chato'));
