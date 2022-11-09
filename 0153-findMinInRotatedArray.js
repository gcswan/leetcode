/**
 * @description Given the sorted rotated array nums of unique elements, return
 * the minimum element of this array.
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high-low)/2)
    let midVal = nums[mid]
    console.log({low, high, mid, midVal})

    if (midVal >= nums[low]) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
    if (mid === 0 && midVal < nums[mid+1]) {
      return midVal
    }
    if (mid === nums.length - 1 && midVal < nums[mid-1]) {
      return midVal
    }

    if (midVal < nums[mid-1]) {
      return midVal
    }
    if (midVal > nums[mid+1]) {
      return nums[mid+1]
    }
  }
    
    
};

console.log(findMin([3,4,5,6,7,8, 2])) //=> 1
console.log(findMin([1,2])) //=> 1
