/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 */


 /**
  * 
  * @param {*} arr 
  * create freq map of all elements in the array
  * get n = arr.lengtth 
  * loop through n, and for each number, check if it exists in the map
  * if it donot exist in map, reurn that number.
  */
 const missingNumber = (arr) => {
     let n = arr.length;
     let map = freqMap(arr);

     for(let i=0; i<=n; i++) {
         if(!map.has(i)) {
            return i;
         }
     }

 }

 const freqMap = (arr) => {
     let map = new Map();

    for(let i=0; i<arr.length; i++) {
        map.set(arr[i], i);
    }
    return map;
 }

 console.log(missingNumber([0,1]));