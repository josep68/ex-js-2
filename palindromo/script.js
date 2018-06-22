
// function reverseString(str) {
//   var myArray = str.split('');
//   myArray.reverse();
//   var newStr = myArray.join(''); //turn array to string
//   return newStr;
// }
//
// alert(reverseString(""));



var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}
alert(isPalindrome(""));
