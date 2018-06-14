// https://www.hackerrank.com/challenges/the-grid-search/problem

function gridSearch(grid, pattern) {
    // optimizations: last character cant go off the grid

    for (let row = 0; row < grid.length; row++){
        for (let column = 0; column < grid[0].length; column++){
            if(check(grid, pattern, row, column)){
                return 'YES'
            }
        }
    }
    return 'NO'
}

function check(grid, pattern, gridRow, gridCol){
    for (let patRow = 0; patRow < pattern.length; patRow++){
        for (let patCol = 0; patCol < pattern[0].length; patCol++){
            if (pattern[patRow][patCol] !== grid[patRow + gridRow][patCol + gridCol]){
                return false
            }
        }
    }
    return true
}
