/**
 * @description Given two integers n and k, return all possible combinations of 
 * k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let combos = []

  let backtrack = (start, combo) => {
    if (combo.length === k) {
      combos.push(combo.slice())
    } else {
      for (let i = start; i <= n; i++) {
        combo.push(i)
        backtrack(i+1, combo)
        combo.pop()
      }
    }
  }
  backtrack(1, [])
  return combos 
};

console.log(combine(4, 2))
