/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  return [bsearchFirst(nums, target),bsearchLast(nums, target)]
};

function bsearchFirst(arr, target) {
  let low = 0
  let high = arr.length-1
  let result = -1

  if (arr.length === 0) return result
  
  while (low <= high) {
    let mid = low + Math.floor((high - low)/2)
    let midVal = arr[mid]
    if (midVal < target) {
      low = mid + 1
    }
    else if (midVal > target) {
      high = mid - 1
    }
    else if (midVal === target) {
      result = mid
      high = mid - 1
    }
  }
  return result
}

function bsearchLast(arr, target){
  let low = 0
  let high = arr.length-1
  let result = -1

  if (arr.length === 0) return result
  
  while (low <= high) {
      let mid = low + Math.floor((high - low)/2)
      let midVal = arr[mid]
      if (midVal < target) {
        low = mid + 1
      }
      else if (midVal > target) {
        high = mid - 1
      }
      else if (midVal === target) {
        result = mid
        low = mid + 1
      }
    
  }
  return result
}


  console.log(searchRange([2,2], 2))              //=> [1,1]
  console.log(searchRange([5,7,7,8,8,10], 6))     //=> [-1,-1]
  console.log(searchRange([5,7,7,8,8,10], 8))     //=> [3,4]