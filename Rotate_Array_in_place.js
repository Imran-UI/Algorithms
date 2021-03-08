
/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * first reverse the entire arr
 * then reverse first k elements 
 * then reverse n-k elements
 */

const rotateArray =  (arr, k) => {
    k = k % arr.length;
    // reverse the entire array 
    reverseArr(arr, 0, arr.length-1);
    // reverse first k elements 
    reverseArr(arr, 0, k-1);
    // reverse last n-k elements \
    reverseArr(arr, k, arr.length-1);
}

/**
 * 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 * reverse an array in place
 */
const reverseArr = (arr, start, end) => {
    while(start <  end) {
        let temp  = arr[start];
        arr[start] = arr[end];
        arr[end] =  temp;
        start++;
        end--;
    }
}




console.log(rotateArray([1,2,3,4,5,6,7], 3));