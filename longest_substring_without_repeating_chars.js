/**
 * Longest Substring Without Repeating Characters
 */


/**
 * 
 * @param {*} str 
 * Take 2 pointers at the start of the string 
 * increament pointer2 if char is not already present inside set
 * take the max of max vs size of set
 * if ichar is already present in set, remove it from set and increment pointer1; 
 * 
 * 
 * return max
 * 
 */
 const longestSubstringWithoutrepeatChars  = (str) => {
     let pointer1 = 0;
     let pointer2 = 0;
     let max =0;

     let set = new Set();

     while(pointer2 < str.length) {
        if(!set.has(str[pointer2])) {
            set.add(str[pointer2]);
            pointer2++;
            max=Math.max(set.size, max);
         }else {
             set.delete(str[pointer1]);
             pointer1++;
         }
     }

     return max;
 }

 console.log(longestSubstringWithoutrepeatChars("pwwkew"));