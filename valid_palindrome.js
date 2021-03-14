/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 */

 const isPalindrome = (str) => {

    str = str.replace(/[^0-9a-z]+/gi, '').toLowerCase();

    let reverseString = reverseStr(str);

    return str === reverseString;
 }

 const reverseStr = (str) => {
    let res = '';
    for(let char of str) {
        res = char + res;
    }
    return res;
 }

 console.log(isPalindrome("ab_a"));