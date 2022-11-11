var search = function(nums, target) {
  console.log('nums:', JSON.stringify(nums))
  let k = nums[0]
  let n = nums.length
  let i = 0;
  let j = n - 1
  let start = null
  let end = null
  let t = null
  let sorted = true
 

  if (n === 1 && nums[0] === target) {
      return 0
  } else if (n === 1 && nums[0] !== target) {
      return -1
  }

  if (nums[0] > nums[n-1]) sorted = false
  
  if (!sorted) {
    let pivot = findPivot(nums, i, j)
    console.log({pivot})
  // find original n 
  // while (start === null){
  //   let mid = Math.floor((j-i)/2) + i
  //   console.log({k, i, j, mid})
  //   if (i > j) {
  //     start === -1
  //   } 
    


  //   // mid is last large num
  //   if (nums[mid] > k && nums[mid + 1] < k) {
  //     console.log('found n: ', nums[mid])
  //     start = mid + 1
  //     end = mid 
  //   } else if (nums[mid] < k && nums[mid - 1] > k) {
  //     console.log('found end: ', nums[mid -1])
  //     start = mid
  //     end = mid - 1
  //   } else if (nums[mid] > k) {
  //     console.log(`${nums[mid]} higher than: ${nums[0]}`)
  //     i = mid + 1
  //   } else if (nums[mid] < k) {
  //     console.log(`${nums[mid]} lower than: ${nums[0]}`)
  //     j = mid - 1
  //   }
  // }
  // if (target < nums[end]) {
  //   i = end +1
  //   j = n -1
  // } else {
  //   i = 0
  //   j = end
  // }
  }
  

//   while (t == null) {
//     mid = Math.floor((j-i)/2) + i
//     console.log({i, j, cur: nums[mid], target})
//     if (i > j) t = -1

//     if (nums[mid] === target){
//       t = mid
//     } else if (nums[mid] < target) {
//       i = mid +1
//     } else {
//       j = mid - 1
//     }
//     // if (i === j && i === mid) break
//   }
// return t
  
};

// console.log(search([3,1], 0))
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,8,9,0,1,2], 0))


function findPivot(arr, low, high){
  // base cases
  if (high < low)
      return -1;
  if (high == low)
      return low;

  let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
  console.log({low, high, mid})
  
  if (mid < high && arr[mid] > arr[mid + 1])
      return mid;

  if (mid > low && arr[mid] < arr[mid - 1])
      return (mid - 1);

  if (arr[low] >= arr[mid])
      return findPivot(arr, low, mid - 1);

  return findPivot(arr, mid + 1, high);
}