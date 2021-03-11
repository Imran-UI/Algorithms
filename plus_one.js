/**
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 */


 /**
  * 
  * @param {*} arr 
  * loop through backwards 
  * check if ele is less than 9, and increment it by 1 and return the array
  * if not less than 9, then make it 0
  * ex, 129 --> it will become 120 in first iteration, then in 2nd iteration 2 will become 3 and 130 will be returned
  * if its not returned in for loop, then we can safely assume its 999 case, then by the end of for loop, arr will be 000, now simple push 1 
  * tp the start of the array.
  */
 const plusOne = (arr) => {
     let len = arr.length;

     for(let i= len-1; i>=0; i--) {
         if(arr[i] < 9) {
             arr[i]++;
             return arr;
         }
         arr[i] = 0;
     }

     arr.unshift(1);
     return arr;
 }

 console.log(plusOne([9,9,9]));