/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  let sorted = tokens.sort((a,b) => a - b);
  let left = 0;
  let right = tokens.length - 1;
  let score = 0;
  while (left <= right) {
    if(sorted[left] <= power) {
      power -= sorted[left];
      score++;
      left++;
    } else if (score !== 0 && left !== right) {
      power += sorted[right];
      score--;
      right--;
    } else {
      break;
    }
  }
  return score;
};

const tkns = [100, 200]
const pwr = 150;

console.log(bagOfTokensScore(tkns, pwr));
