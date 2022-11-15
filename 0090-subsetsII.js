/**
 * @description Given an integer array nums that may contain duplicates, return all possible
 * subsets (the power set)
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * @param {number[]} nums
 * @return {number[][]}
 * @example 
 * // returns [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * subsetsWithDup([1,2,2])
 */
var subsets = function(nums) {
  result = []; 
  nums.sort();
  var backtrack = function(start, nums, subset){
    result.push(subset.slice(0));
    for(let i = start; i < nums.length;i++){
      if (i > start && nums[i] === nums[i-1]) continue
      subset.push(nums[i]);
      backtrack(i+1, nums,subset);
      subset.pop();
    }
  }
  backtrack(0,nums,[]);
  return result;
};
console.log(subsets([1,2,2])) 

