/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

function isPalindrome(number){
    var numberAsString = number.toString();
    var reverseNumber = '';

    for (var i = numberAsString.length - 1; i >= 0; i-- ){
        reverseNumber += numberAsString[i];
    }
    return reverseNumber == numberAsString;
}

console.log(isPalindrome(-232));

function isPalindrome2(number){
    var numberAsString = number.toString();
    var indexStart = 0;
    var indexEnd = numberAsString.length - 1;

    if (numberAsString.length == 2){
        return numberAsString[indexStart] == numberAsString[indexEnd];
    }

    while((indexEnd - indexStart) > 1 && numberAsString[indexStart] ==  numberAsString[indexEnd]){
        console.log(numberAsString[indexStart] + '==' +  numberAsString[indexEnd])
        indexStart ++;
        indexEnd --;
    }

    console.log(indexEnd - indexStart );
    return ((indexEnd - indexStart == 1) || (indexEnd - indexStart == 0)) && numberAsString[indexStart] ==  numberAsString[indexEnd];
}

console.log(isPalindrome2(1000030001));


function isPalindrome3(number){
    if (number < 0 || (number % 10 == 0 && number != 0)){
        return false;
    }
    var reservedNumber = 0;

    while (number > reservedNumber){
        reservedNumber = reservedNumber * 10 + number % 10;
        console.log(reservedNumber);
        number = Math.floor(number/10);
        console.log(number);
    }
    return (reservedNumber == number) || (Math.floor(reservedNumber / 10) == number);
}

 console.log(isPalindrome3(1221));