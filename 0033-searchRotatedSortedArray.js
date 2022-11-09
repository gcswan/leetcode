

var search = function(nums, target) {
  // console.log('nums:', JSON.stringify(nums), 'target: ', target)
  let n = nums.length

  if (n === 1 && nums[0] === target) {
      return 0
  } else if (n === 1 && nums[0] !== target) {
      return -1
  }

  var pivot = findPivot(nums, 0, n-1)
  // console.log({pivot})

  if (pivot === -1) {
    return binarySearch(nums, target)
  } else {

    if (target < nums[0]) {
      // console.log(`${target} is less than ${nums[0]}`)
      let sub = binarySearch(nums.slice(pivot+1, n), target)
      console.log('sub:',sub)
      return sub === -1 ? -1 : sub + 1 + pivot

    } else {
      // console.log(`${target} is more than ${nums[0]}`)
      return binarySearch(nums.slice(0, pivot+1), target) 
    }
  }
}

function findPivot(arr, low, high) {
  while(low <= high) {
    let mid = Math.floor((low + high) / 2)

    // if mid is higher than num after, it is pivot
    if (arr[mid] > arr[mid+1]) {
      return mid
    }
    // if mid is lower than num before, previous is pivot
    if (arr[mid] < arr[mid-1]) {
      return mid - 1
    }

    if (arr[low] >= arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }

  }
  return -1
}

function binarySearch(arr, target) {
  // console.log('bsearch: ', arr, 'target:',target)
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    // console.log({low, high, mid})
    if (arr[mid] === target) return mid

    if (arr[mid] > target) high = mid - 1
    else low = mid + 1
  }
  return -1
}

console.log(search([1,3,5], 0))