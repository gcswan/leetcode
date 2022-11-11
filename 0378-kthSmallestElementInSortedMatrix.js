/**
 * @description Given an n x n matrix where each of the rows and columns is 
 * sorted in ascending order, return the kth smallest element in the matrix.
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let sorted = [...matrix[0]]
  // console.log({matrix, sorted})
  // loop over matrix arrays starting at 1
  for (let i = 1; i < matrix.length; i++) {
    // loop over elements in matrix[i]
    for (let j = 0; j < matrix[i].length; j++) {
      const target = matrix[i][j]
      // console.log({target})
      let low = 0 
      let high = sorted.length - 1
      let insIdx

      while (low <= high) {
        let mid = low + Math.floor((high-low)/2)
        let midVal = sorted[mid]
        // console.log({low, high, mid})
        if (target >= midVal) {
          insIdx = mid
          low = mid + 1
        } else {
          high = mid - 1
        }
      }
      sorted.splice(insIdx + 1, 0, matrix[i][j])
      // console.log({sorted})
      // console.log('------------------------------')
    }
  }
  return sorted[k-1]
};

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))
console.log(kthSmallest([[-5]], 1))
console.log(kthSmallest([[]], 1))
