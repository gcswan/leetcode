let result;
var subsets = function(nums) {
  result = []; // no need this if function is executed once
  recursive(0,nums,[]);
  return result;
};

var recursive = function(start, nums, subset){
  // result.push(subset.slice(0));

  for(let i = start; i < nums.length;i++){
    console.log('called', {start})
    // console.log('subset push nums[i]:',nums[i])
    // subset.push(nums[i]);
    // console.log({start, subset, result})
    recursive(i+1, nums,subset);
    // subset.pop();
    // console.log({start, subset, result})
    // console.log("-----loop ends on: ", start, "-------")
  }
  // console.log('functreturning', {start, subset})
}

console.log(subsets([1,2,3]))
