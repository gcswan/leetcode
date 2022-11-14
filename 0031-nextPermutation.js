/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let perms = []
    let result = null

    const backtrack = (perm, used) => {
      if (perm.length === nums.length) {
        perms.push(perm.slice())
        // let last = perms.length - 1
        // if (perms[last] === 1 && perms[last][0] )
      } 
      else {
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
    }

    backtrack([],[])
    if (perms[1][0] > perms[1][perms[1].length -1]) {
      console.log('sorted in desc', perms)
      return perms[perms.length - 1]
    }
    else {
      console.log({perms})
      return perms[1]
    }
    // if perms[0] is sorted in descending return perms[-1]
    
};

console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))
console.log(nextPermutation([1,1,5]))
