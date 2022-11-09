/**
 * @description Given a string s, return the longest palindromic substring in s
 * @param {string} s
 * @return {string}
 */

 var longestPalindrome = function(s) {
    let longest = [0,0,1];
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = s.length -1; j > i; j--) {
            let start = i;
            let end = j;
            let p = true;
            
            if (j-i < longest[2]) continue
            while (start < end) {
                if (s[start] != s[end]) {
                    p = false
                    break
                }
                start++
                end--
            }

            if (p) {
                let pLen = Math.abs(j-i)+1
                if (pLen > longest[2]) {
                    longest = [i, j, pLen]
                }
            }
        }
    }
    return s.slice(longest[0], longest[1]+1)
};

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbababd'))
console.log(longestPalindrome('abb'))
console.log(longestPalindrome("aacabdkacaa"))
console.log(longestPalindrome("aacabdkacaayyyhghyyyaa"))
