/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, results = []) {
  const ar = n.toString().split('').map(e => Number(e) ** 2);

  const sum = ar.reduce((p, n) => p + n);

  if (sum === 1) return true

  if ( results.find((e) => e === sum) ) return false;
    
  results.push(sum)
    
  return isHappy(sum, results);

};

// console.log(isHappy(2))
// console.log(isHappy(19))
// console.log(isHappy(2))
