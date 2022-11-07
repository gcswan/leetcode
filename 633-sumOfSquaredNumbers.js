/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSumMap = function(c) {
  console.time('map')
  let n = Math.sqrt(c)
  let compliments = new Map()
  for (let i = 0; i <= n; i++) {
    let sqr = i**2
    
    if (2*sqr === c) {
      console.timeEnd('map')
      return true
    }
    
    if (!compliments.has(sqr)) {
        compliments.set(c-sqr, i)
    } else {
        console.timeEnd('map')
        return true
    }
  }
  console.timeEnd('map')
  return false
    
};

var judgeSquareSumPointers = function(c) {
  console.time('pointers')
  let i = 0
  let j = Math.floor(Math.sqrt(c))
  
  while (i <= j) {
    let a = i**2
    let b = j**2
    if (a + b === c || a + a === c || b + b === c) {
      console.timeEnd('pointers')
      return true
    }
    else if (a + b > c) j--
    else if (a + b < c) i++
  }
  console.timeEnd('pointers')
  return false
};

function judgeSquareSumBinarySearch(c) {
  console.time('binarySearch')
  let low = 0;
  let high = Math.ceil(Math.sqrt(c));

  while (low <= high) {
      const sum = low ** 2 + high ** 2;
      const mid = Math.floor(low + (high - low) / 2);

      if (c > sum) {
          // c is greater than sum, so we move low to right to increase

          // if c > mid**2 + high**2, then we know low is after mid + 1
          // otherwise, we know low is between mid and low, so low + 1
          low = c > mid ** 2 + high ** 2 ? mid + 1 : low + 1;
      } else if (c < sum) {
          //c is less than sum, so we move high to left to decrease

          // if c < mid ** 2 + low ** 2, we know high isn't to right of mid, so mid -1
          // otherwise, we know high is on that right side, so high - 1
          high = c < mid ** 2 + low ** 2 ? mid - 1 : high - 1;
      } else {
          console.timeEnd('binarySearch')
          return true;
      }
  }
  console.timeEnd('binarySearch')
  return false;
};

console.log(judgeSquareSumMap(9857896732), "\n --------")
console.log(judgeSquareSumPointers(9857896732), "\n --------")
console.log(judgeSquareSumBinarySearch(9857896732), "\n --------")