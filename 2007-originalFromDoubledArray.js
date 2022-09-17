/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
  // original array must be half the size of changed
  // can return in any order

  if (changed.length < 2) return [];

  console.log({changed})
  changed.sort((a,b) => a - b)
  console.log({changed})

  const original = [];

  let left = 0;
  let right = changed.length - 1;

  while (original.length < changed.length / 2 && left < right) {
    let isDub = changed.findIndex((el) => el === changed[left] * 2);
    if (isDub !== -1) original.push(isDub)
    left++
    right--
  }
  if (original.length !== changed.length / 2) return []; 
  else return original;
};

let chnged = [1,3,4,2,6,8];

let chngd = [6,3,0,1]
let chngd2 = [0,3,2,4,6,0]
console.log(findOriginalArray(chngd));
