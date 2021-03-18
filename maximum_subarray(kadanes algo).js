/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */


/**
 * 
 * @param {*} arr 
 * take first element of array as currentsum and max value 
 * loop through the array and calculate the current sum and max value 
 * currentSum = Max(arr[i] + currentSum , arr[i]) ==> if current elemnt is greater than current sum, then start over the sum with current element
 * max = max(currentsum, max ) => if current sum is greater than max value then max = currentSum;
 */
const maxSubArray = (arr) => {
    let currentSum = arr[0];
    let max = currentSum;

    for(let i=1; i<arr.length; i++) {
        currentSum = Math.max(arr[i] + currentSum, arr[i]);
        max = Math.max(currentSum, max);
    }

    return max;

}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
