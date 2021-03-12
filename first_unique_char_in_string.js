/**
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 */


/**
 * 
 * @param {*} str 
 * first create freq map of string characters 
 * then loop through the string and return first char with freq of 1
 */
const firstUniqueChar = (str) => {
    let map = freqMap(str);
    console.log("map ", map);
    for(let i=0; i<str.length; i++) {
        if(map[str[i]] === 1) {
            return i;
        }
    }
    return -1;
}

const freqMap = (str) => {
    let map = {};
    for(let char of str) {
        map[char] = map[char] ? map[char] + 1: 1;
    }
    return map;
}

console.log(firstUniqueChar("loveleetcode"));