/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let container = 0;
    let i = 0;
    let j = height.length -1
    
    // as length gets smaller height must get bigger
    // only decrement length in favor of greater height
    
    while (i < j) {
        container = Math.max(container, (j-i)*Math.min(height[i], height[j]))
        height[i] < height[j] ? i++ : j--
    }  
    return container
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))