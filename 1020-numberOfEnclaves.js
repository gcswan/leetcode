/**
 * @description You are given an m x n binary matrix grid, where 0 represents 
 * a sea cell and 1 represents a land cell.
 * A move consists of walking from one land cell to another adjacent 
 * (4-directionally) land cell or walking off the boundary of the grid.
 * Return the number of land cells in grid for which we cannot walk off the 
 * boundary of the grid in any number of moves.
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  for (let m = 1; m <= grid.length - 2; m++) {
    console.log(grid[m])
    for (let n = 1; n <= grid[m].length - 2; n++) {
      console.log(grid[m][n])
    }
  }
    
};

// console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]])) //=> 3
// console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0],[0,1,1,0],[0,0,0,0]])) //=> 3
