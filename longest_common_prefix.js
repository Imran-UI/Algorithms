/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */


const longestCommonPrefix = (arr) => {
    if(arr.length === 1) {
        return arr[0];
    }
    let commonPreFix = arr[0];

    let res= '';

    for(let i=1; i<arr.length; i++) {
        res ='';
        let currString = arr[i];
        for(let j=0; j<currString.length; j++) {
            if(currString[j] === commonPreFix[j]) {
                res = res + currString[j];
            }else{
                break;
            }
        }
        commonPreFix = res;
    }

    return res;

}

console.log(longestCommonPrefix(["cir","car"]));