/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

   const checkedSubstrings = new Array(s.length)
       .fill(false)
       .map(_ => new Array(s.length).fill(false));

   let result = s[0];

   for (let currLength = 1; currLength <= s.length; currLength++) {
       for (let startIndex = 0; startIndex < s.length; startIndex++) {
           let endIndex = startIndex + currLength - 1;
           if (currLength === 1) {
               checkedSubstrings[startIndex][endIndex] = true;
               continue;
           }
           if (s[startIndex] === s[endIndex]) {
               if (currLength === 2) {
                   checkedSubstrings[startIndex][endIndex] = true;
                   if (currLength > result.length) result = s.substring(startIndex, endIndex + 1);
               } else if (checkedSubstrings[startIndex + 1][endIndex - 1]) {
                   checkedSubstrings[startIndex][endIndex] = true;
                   if (currLength > result.length) result = s.substring(startIndex, endIndex + 1);
               }
           }
           
       }
   }
   return result;
}