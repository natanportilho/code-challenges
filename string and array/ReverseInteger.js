/**
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */
function reverseInt(num){
    var signal = (num > 0 ? 1 : -1);
    var rest = num%10;
    var reverse = '';

    if (num < 0){
        num = num * -1;
    }

    while (num != 0 ){
        reverse += + '' + rest;
        num = Math.floor(num/10);
        rest = num%10;
    }

    reverse = reverse * signal
    if ((reverse < Math.pow(-2,31)) || (reverse > Math.pow(2,31))){
        return 0;
    }
    return  reverse;
}

console.log(reverseInt(-123));