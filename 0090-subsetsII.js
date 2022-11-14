var subsets = function(nums) {
  result = []; // no need this if function is executed once
  backtrack(0,nums,[]);
  return result;
};

var backtrack = function(start, nums, subset){
  result.push(subset.slice(0));

  for(let i = start; i < nums.length;i++){
    if (i > start && nums[i] === nums[i-1]) continue
    subset.push(nums[i]);
    backtrack(i+1, nums,subset);
    subset.pop();
  }
}
console.log('[[],[1],[1,2],[1,2,2],[2],[2,2]]', '\n')
console.log(JSON.stringify(subsets([1,2,2]))) //=> [[],[1],[1,2],[1,2,2],[2],[2,2]]
