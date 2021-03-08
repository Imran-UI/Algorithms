/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
 */

 /**
  * 
  * @param {*} arr 
  * create frequnecy map of each element with no.of times its repeated 
  * then loop through each ele of the array and check if frequency is exactly 1, then return that element.
  */
 const singleNumber = (arr) => {
     let map = freqCounter(arr);

     for(let ele in map) {
         if(map[ele] === 1) {
             return ele;
         }
     }

 }

 const freqCounter = (arr) => {
     let freqMap = {};
     for(let ele of arr) {
         freqMap[ele] = freqMap[ele] ? freqMap[ele] + 1 : 1;
     }
     return freqMap;
 }

 console.log(singleNumber([4,1,2,1,2]));