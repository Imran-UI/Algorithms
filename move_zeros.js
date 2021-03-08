/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */


 /**
  * 
  * @param {*} arr 
  * take two pointers at same index, use pointer 2 to find non zero elements 
  * if it finds zero ele, just increment pointer2 
  * if it finds non zero ele swap the pointer1 ele with pointer2 ele and increment both pointers
  */
const moveZeros = (arr) => {
    let pointer1 =0;
    let pointer2 =0;

    while(pointer2 < arr.length) {
        if(arr[pointer2] === 0) {
            pointer2++;
        }else {
            let temp = arr[pointer1];
            arr[pointer1] = arr[pointer2];
            arr[pointer2] = temp;
            pointer1++;
            pointer2++;
        }
    }
    return arr;
}

console.log(moveZeros([1,0,1]))




