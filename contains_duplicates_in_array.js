/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/**
 * 
 * @param {*} arr 
 * first create a frequency map of the elements in an array
 * then loop through each ele of array and check if value of that elemnet in frequency map is > 1
 * if it is > 1 return true, else false
 */
const containsDuplicates = (arr) => {
   let freqMap = arrFreqMap(arr);
   console.log("freq map ", freqMap);
   for(let ele of arr) {
       console.log(ele , freqMap[ele]);
       if(freqMap[ele] > 1) {
           return true;
       }
   }
   return false;
}


/**
 * 
 * @param {*} arr 
 * frequency map, returns the element with number of times its repeated in the map
 */
const arrFreqMap = (arr) => {
    let map =  {};
    for(let i=0; i<arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }
    return map;
}

console.log(containsDuplicates([2,14,18,22,22]));
