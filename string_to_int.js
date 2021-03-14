/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 */



 /**
  * 
  * Example:
  * 
  * res = 0;
  * res*10 + char - 0 = 7 ==> any string number - 0 = number
  * 720 --> 7 * 10 = 70 ==>  70 + 2 = 72
  * 72*10 + 0-0= 720
  * 
  * 
  */

 const stringToInt = (str) => {
     let sign = 1;
     let index = 0;
     let res = 0;


     let limit = 2 ** 31;
     let limitMax = (2 ** 31) - 1;
     let limitMin = - limit;

     //increment index untill non space character is found
     while(str[i] === ' ') {
         index++;
     }

     //if first character is + or - then determine the sign from that and increment the index
     if(str[index] === '+' || str[index] === '-') {
        sign = str[0] === '+' ? 1 : -1;
        index++;
     }

     //loop untill numeric values are present
     while(str[index] >= '0' && str[index] <= '9') {
         //to convert string to number 
         //loop through each character multiply it with base number i.e 10 and add char - 0 
         //char - 0 will convert charc to number
         res = (res * 10) + (str[index] - 0);
         //this is based on special requirement of question
         if(sign == -1 && res > limitMax + 1) {
             return limitMin;
         }
         if(sign == 1 && res > limitMax ) {
             return limitMax;
         }
         index++;
     }

     return res * sign;
 }


 console.log(stringToInt("2147483648"));