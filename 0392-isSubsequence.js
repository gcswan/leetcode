/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
  if (t.indexOf(s) > 0) return true;
  let i = 0;
  let j = 0;
  
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++ 
      j++
    } else {
      j++
    }
  }
  return i === s.length ? true : false;
};


const s2 = "abc"
const t2 = "ahbgdc"

console.log('result: ', isSubsequence(s2, t2))
