/**
 * @description Given a 1-indexed array of integers numbers that is already 
 * sorted in non-decreasing order, find two numbers such that they add up 
 * to a specific target number
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


// must return 1 indexed array
var twoSum = function(numbers, target) {
  let low = 0
  let high = numbers.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high-low)/2)
    let midVal = numbers[mid]
    let sum = numbers[low] + numbers[high]
    console.log({low, high, sum})

    if (sum < target) {
      // increment low
      low = midVal + numbers[high] < target ? mid + 1 : low + 1
    } else if (sum > target) {
      // decrement high
      high = midVal + numbers[low] > target ?  mid - 1 : high - 1
    } else {
      return [low + 1, high + 1]
    }
  }
};


console.log(twoSum([2,7,11,15], 9)) //=> [1,2]
