/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
  
var search = function(nums, target) {
  console.log('nums:', JSON.stringify(nums))
  let k = nums[0]
  let n = nums.length
  let i = 0;
  let j = n - 1
  // let mid = Math.floor((j-i)/2)
  let start = null
  let end = null
  
  let t = null
  if (n === 1) return 0
  
  // find original n 
  while (i<=j && start === null){
    let mid = Math.floor((j-i)/2) + i
    console.log({k: k, i:i, j: j, mid: mid})
    // console.log({k: k, i:i, j: j, mid: mid})

    // mid is last large num
    if (nums[mid] > k && nums[mid + 1] < k) {
      console.log('found n: ', nums[mid])
      start = mid + 1
      end = mid 
    } else if (nums[mid] < k && nums[mid - 1] > k) {
      console.log('found end: ', nums[mid -1])
      start = mid
      end = mid - 1
    } else if (nums[mid] > k) {
      console.log(`${nums[mid]} higher than: ${nums[0]}`)
      i = mid + 1
    } else if (nums[mid] < k) {
      console.log(`${nums[mid]} lower than: ${nums[0]}`)
      j = mid - 1
    }
  }
  if (target < nums[end]) {
    i = end +1
    j = n -1
  } else {
    i = 0
    j = end
  }

  while (i <= j && t === null) {
    mid = Math.floor((j-i)/2) + i
    console.log(i, j, mid)
    if (nums[mid] === target){
      t = mid
    } else if (nums[mid] < target) {
      i = mid +1
    } else {
      j = mid - 1
    }
  }
  return t
  
};



let nums = [4,5,6,7,0,1,2,3]
// let nums = [4,5,6,0,1,2,3]
let target = 0
// let nums = [6,7,8,0,1,2,3,4,5]

console.log(search([4,5,6,7,0,1,2], 0))