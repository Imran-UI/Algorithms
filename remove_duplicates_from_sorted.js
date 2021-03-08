/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */


 /**
  * 
  * @param {*} arr 
  * take two pointer at 0 and 1 positions respectively
  * compare elements at these positions, if they are equal just increment the 2nd pointer
  * if they are not equal, swap element next to pointer 1 and element at pointer2 
  * increment both pointers
  * return the count of pointer1 + 1, will be the length of new array
  */
 const removeDuplicates = (arr) => {
     let pointer1 = 0;
     let pointer2 = 1;

     while(pointer2 < arr.length) {
         if(arr[pointer2] === arr[pointer1]) {
             pointer2++;
         }else{
             let temp = arr[pointer1 + 1];
             arr[pointer1 + 1] = arr[pointer2];
             arr[pointer2] = temp;
             pointer1++;
             pointer2++;
         }
     }
     return pointer1+1;
 }


 console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));