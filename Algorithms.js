
//using js methods
function reverseString(str) {
  var result = str.split('').reverse().join('');
  console.log( "reversed string ", result);
  return result;
}
reverseString('imran')

// using iterative method

function reverseIterative(str) {
  let result = '';

  for (let char of str) {
    result = char + result;
  }
  console.log("reversed iterative ", result);
  return result;
}
reverseIterative('imran');

// check if given string is pallindrome or not

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  if (reversed === str) {
    return true;
  }
  return false;
}
console.log("is palindrome? ", isPalindrome('imran'));
console.log("is palindrome? ", isPalindrome('abba'));

// 2nd solution for palindrom 
// comparing each element to the mirror of itself in an array 
//using every helper function

function palindrome(str) {
return  str.split('').every((char, i) => {
    if (char === str[str.length - i - 1]) {
      return true;
    }
    return false;    
  });
 
}
console.log("2nd method palindrome? ", palindrome('abba'));
