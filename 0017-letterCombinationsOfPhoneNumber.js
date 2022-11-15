/**
 * @description Given a string containing digits from 2-9 inclusive, return 
 * all possible letter combinations that the number could represent. Return 
 * the answer in any order.
 * @param {string} digits
 * @return {string[]}
 * @example 
 * // returns ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * letterCombinations("23")
 */
var letterCombinations = function(digits) {
  const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = []

  const combine = (start, combo) => {

  }
  combine(0, [])
  return result 

};
