/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */


 /**
  * 
  * @param {*} number 
  * take the limit 
  * if the res is greater than limit return 0 or else return result
  */
 const reverseInteger = (number) => {
     let limit  = (2 ** 31) + 1;
     let sign;
     if(number > 0) {
        sign = 1;
     }else {
        sign = -1;
        number = number * -1;
     }
     let numStr = number.toString();
     let reverseStr = reverseString(numStr);


     let res = parseInt(reverseStr) * sign;

     return res > limit ? 0 : res;
 }

 const reverseString = (str) => {
     let res = '';
     for(let char of str) {
        res = char + res;
     }
     return res;
 }

 console.log(reverseInteger(1534236469));