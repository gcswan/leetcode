/**
 * @description Given two integer arrays nums1 and nums2, return an array of 
 * their intersection. Each element in the result must be unique and you may 
 * return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let sorted = nums2.sort((a,b)=>a-b)
 
  let result = new Set()
  nums1.forEach(i => binarySearch(sorted, i) && result.add(i))
  return [...result]
};


const binarySearch = (a, t) => {
    let low = 0
    let high = a.length - 1

    while (low <= high) {
        let mid = low + Math.floor((high-low)/2)
        let midVal = a[mid]
        if (midVal < t) {
            low = mid + 1
        }
        else if (midVal > t) {
            high = mid - 1
        }
        else {
            return true
        }
    }
    return false
}

var intersection = function(nums1, nums2) {
  const result = new Set();
  for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
          result.add(nums1[i]);
      }
  }
  return [...result];
};