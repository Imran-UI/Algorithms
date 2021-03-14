/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */


 const isAnagram = (str1, str2) => {
     if(str1.length !== str2.length) {
         return false;
     }
     let str1Freq = freqCounter(str1);
     let str2Freq = freqCounter(str2);

     for(let char in str1Freq) {
         if(str1Freq[char] !== str2Freq[char]) {
             return false;
         }
     }
     return true;
 }

 const freqCounter = (str) => {
     let map = {};
     for(let char of str) {
         map[char] = map[char] ?  map[char] + 1 : 1;
     }
     return map;
 }

 console.log(isAnagram('rat', 'car'));