/**
 * @description Given an array of distinct integers candidates and a target 
 * integer target, return a list of all unique combinations of candidates where
 * the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. 
 * Two combinations are unique if the frequency of at least one of the chosen 
 * numbers is different.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @example 
 * // returns [[2,2,3],[7]]
 * combinationSum([2,3,6,7],7)
 */
var combinationSum = function(candidates, target) {
  let result = []
  const combine = (start, combo) => {
    let total = combo.reduce((acc,cur) => acc + cur, 0)
    if (total == target) result.push(combo.slice()) 
    if (total >= target) return
    for (let i = start; i < candidates.length; i++) {
      combo.push(candidates[i])
      combine(i, combo)
      combo.pop()
    }
  }
  combine(0, [])
  return result
};

/** 
 * same recursive function without the shell. The first version seems to be 
 * faster on leetcode. I believe it's because I'm not passing in candidates, 
 * target, and result on every invocation. 
 */
var combinationSum = function(candidates, target, start = 0, combo = [], result = []) {
  let total = combo.reduce((acc,cur) => acc + cur, 0)
  if (total == target) result.push(combo.slice()) 
  if (total >= target) return result
  for (let i = start; i < candidates.length; i++) {
    combo.push(candidates[i])
    combinationSum(candidates, target, i, combo, result)
    combo.pop()
  }
  return result
};

console.log(combinationSum([2,3,6,7], 7))
