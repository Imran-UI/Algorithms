/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */


 /**
  * 
  * @param {*} haystack 
  * @param {*} needle 
  * first loop through haystack, for each char loop through though the needle
  * if char of haystack matched with the char of needle 
  * then check if next char if haystack also matches with needle next character 
  * if it donot match break the loop 
  * check if j is equal to length of the needle, if it is that means we found the needle and return i 
  * if we dont return i, that means we did not find the needle, so return -1
  */
 const indexOf = (haystack, needle) => {
     if(!needle || !needle.length) {
         return 0;
     }

     if(haystack.length < needle.length) {
         return -1;
     }

     for(let i=0; i <= haystack.length - needle.length; i++) {
         let j;
         for(j=0; j< needle.length; j++) {
             if(haystack[i + j] !== needle[j]) {
                 break;
             }
         }
         if(j === needle.length -1 ) {
            return i;
        }
        

     }
     return -1;
 };

 console.log(indexOf("hello", "ll"));