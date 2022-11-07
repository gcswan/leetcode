/**
 * @description Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, return the index where it
 * would be if it were inserted in order. You must write an algorithm with 
 * O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  let greatestLeast

  while (low <= high) {
    let mid = low + Math.floor((high-low)/2)
    let midVal = nums[mid]

    if (midVal < target) {
      greatestLeast = mid
      low = mid + 1
    }
    else if (midVal > target) {
      high = mid - 1
    }
    else if (midVal === target) {
      high = mid - 1
    }
  }
  return greatestLeast + 1 || 0
};

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))
console.log(searchInsert([1,3,5,6],0))