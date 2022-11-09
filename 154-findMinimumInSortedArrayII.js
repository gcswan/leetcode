/**
 * @description Given the sorted rotated array nums that may contain duplicates,
 * return the minimum element of this array.
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  let low = 0
  let high = nums.length - 1

  if (nums.length === 1) return nums[0]
  if (nums[0] < nums[nums.length - 1]) return nums[0]

  while (low < high) {
    while (low < high && nums[low] === nums[low+1]){
      low += 1
    }
    while (low < high && nums[high] === nums[high-1]) {
      high -= 1
    }

    let mid = low + Math.floor((high-low)/2)
    let midVal = nums[mid]
    console.log({low, high, midVal})

    if (midVal < nums[high]) {
      // go left      
      high = mid
      
    } 
    else if (midVal > nums[high]) {
      // go right
      low = mid + 1
    } 
  }
  return nums[low] 
    
};

console.log(findMin([2,1,2,2]), 1) //=> 0
console.log(findMin([2,2,2,0,1]), 0) //=> 0
console.log(findMin([3,5,1]), 1) //=> 0
console.log(findMin([10,1,10,10,10]), 1) //=> 0

