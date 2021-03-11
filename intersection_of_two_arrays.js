/**
 * Given two arrays, write a function to compute their intersection.
 */

/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * first create freq map of first arr 
 * then loopthrough arr2 and check if ele freq is greater than 0 in arr1 map, if yes, then push into result arr and decrement the frequency 
 * of that ele in arr1 map
 */
 const intersection = (arr1, arr2) => {
     let res = [];
     let arr1Map = freqMap(arr1);


     for(let ele of arr2) {
         if(arr1Map[ele] > 0) {
             res.push(ele);
             arr1Map[ele]--;
         }
     }

     return res;

 }

 const freqMap = (arr) => {
     let map = {};
     for(let ele of arr) {
        map[ele] = map[ele] ? map[ele] + 1 :  1;
     }
     return map;
 }

 console.log(intersection([1,2], [1,1]));