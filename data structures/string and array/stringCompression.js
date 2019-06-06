/* String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z). */

function compression(s1) {
    var charCount = 1;
    var s2 = '';
    for (var i = 0; i <= s1.length - 1; i++) {
        if (i+1 <= s1.length - 1 && s1[i] == s1[i + 1]) {            
            charCount++;
        }
        else{
            s2 = s2 + '' + s1[i] + '' + charCount;
            charCount = 1;
        }
    }
    return s2.length < s1.length ? s2 : s1;
}