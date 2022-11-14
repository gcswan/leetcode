var subsets = function(nums) {
  result = []; // no need this if function is executed once
  backtrack(0,nums,[]);
  return result;
};

var backtrack = function(start, nums, subset){
  result.push(subset.slice(0));

  for(let i = start; i < nums.length;i++){
    subset.push(nums[i]);
    backtrack(i+1, nums,subset);
    subset.pop();
  }
}

console.log(subsets([1,2,3]))
