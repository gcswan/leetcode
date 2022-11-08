/**
 * @description Given a non-negative integer x, return the square root of x 
 * rounded down to the nearest integer. The returned integer should be 
 * non-negative as well. You must not use any built-in exponent function 
 * or operator.
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
  let low = 0;
  let high = x;
  let ans = -Infinity
  while (low <=high) {
    let mid = low + Math.floor((high-low)/2)
    let sqr = mid*mid
    if (sqr < x) {
      // we found a number that meets our criteria
      // but we are not done, we want the the number that 
      // that comes closest to the square root without 
      // going over - so keep searching to the right
      ans = mid
      low = mid + 1
    }
    else if (sqr > x) {
      high = mid - 1
    }
  }
  return ans
};

console.log(mySqrt(12))
