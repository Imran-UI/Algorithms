/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. 
 * Then for each group, say the number of characters, then say the character. 
 * To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 */


 const countAndSay = (n) => {
    if(n === 1) {
        return "1";
    }

    let res = '1';

    for(let i=2; i<=n; i++) {
        res =  f(res);
    }
    return res;
 }

 const f = (res) => {
     let temp = '';
     let char = res[0]; 
     let count = 1;
     for(let i=1; i< res.length; i++) {
         if(res[i] !== char) {
             temp = temp + count + char;
             count = 1
             char = res[i];
         }else {
             count++;
         }
     }

     temp = temp + count + char;

     return temp;
 }



//  1
//  "11"
//  "21"
//  "1211"
//  "111221"
//  "312211"
//  "13112221"


 console.log(countAndSay(5));