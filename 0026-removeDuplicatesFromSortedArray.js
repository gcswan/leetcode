/**
 * @description Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only 
 * once. The relative order of the elements should be kept the same.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let j = i+1
      let remove = 0
      while (nums[j] === nums[i]) {
          remove += 1
          j++
      }
      if (!!remove) nums.splice(i+1, remove)
  }
  return nums
};

console.log(removeDuplicates([0,0,2,2,4,5,6,6,6,7]))
