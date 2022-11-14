/**
 * @description Given an array nums of distinct integers, return all the 
 * possible permutations. You can return the answer in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []

  const backtrack = (perm, used) => {
    // console.log('call--',{perm, used})
    if (perm.length === nums.length) {
      result.push(perm.slice(0))
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
          used[i] = true
          perm.push(nums[i])
          backtrack(perm, used)
          perm.pop()
          used[i] = false
        }
      }
    }
    // console.log('return--',{perm, used})
  }

  backtrack([], [])
  return result  
};

console.log(permute([1,2,3]))
