


function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const input = [-1, 0, 3, 5, 9, 12, 14, 17, 23, 56, 87];
const value = 17;

console.log(binarySearch(input, value));
