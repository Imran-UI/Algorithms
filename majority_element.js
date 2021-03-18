/**
 * Given an array nums of size n, return the majority element.
 * the majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */


 const majorityElement = (arr) => {
    let majority = Math.round(arr.length/2);

    let map = freqCalc(arr);

    for(let ele of arr) {
        if(map[ele] >= majority) {
            return ele;
        }
    }
 }

 const freqCalc = (arr) => {
    let map = {};

    for(let ele of arr) {
        map[ele] = map[ele] ? map[ele] + 1 :  1;
    }
    return map;
 }


 console.log(majorityElement([3,2,3]));