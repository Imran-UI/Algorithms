
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
 */
/**
 * 
 * @param {*} arr 
 * @param {*} target 
 * first prepare a map of all elements in array with element as key and index as value 
 * now in the new loop, loop through the elements and get target - current elemnt, check if this result is present in the map
 * if it is present it means that the sum of the current elemnt and elemnt in map will sum up to the target
 */
const twoSum = (arr, target) => {

    let map = arrMap(arr);

    for(let i=0; i<arr.length; i++) {
        let temp =  target - arr[i];
        // target should not be from addition  of same number
        if(map[temp] && map[temp] !== i) {
            return [i, map[temp]];
        }
    }


}

const arrMap = (arr)=> {
    let map = {};
    for(let i=0; i<arr.length; i++){
        map[arr[i]] = i;
    }
    return map;
}



console.log(twoSum([2,7,11,15], 9));