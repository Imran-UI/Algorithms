/**
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 */

 /**
  * 
  * @param {*} arr 
  * take 2 pointer, 1 at start of array and other at end of the array 
  * in while loop check pointer < pointer1 
  * swap pointer1 value with pointer2 value
  * return reversed array;
  */
 const reverseString = (arr) =>  {
     let pointer1 = 0;
     let pointer2 = arr.length -1;

     while(pointer2 > pointer1) {
         let temp = arr[pointer1];
         arr[pointer1] =  arr[pointer2];
         arr[pointer2] = temp;
         pointer1++;
         pointer2--;
     }

     return arr;

 }

 console.log(reverseString(["H","a","n","n","a","h"]));