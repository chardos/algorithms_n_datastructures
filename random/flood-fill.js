const screen =   [[0, 0, 0, 0, 0, 0, 0, 0],
                  [1, 1, 0, 0, 1, 0, 1, 1],
                  [0, 1, 0, 0, 1, 1, 1, 0],
                  [0, 1, 1, 1, 0, 1, 0, 0],
                  [0, 0, 0, 1, 1, 1, 0, 0],
                  [0, 0, 0, 0, 1, 0, 0, 0],
                  [0, 0, 1, 1, 1, 0, 0, 0],
                  [0, 0, 0, 0, 1, 0, 0, 0],
                  ];

const fillSurrounding = (screen, x, y, newColor) => {
    const oldColor = screen[x][y]
    // Color current square
    screen[x][y] = newColor;

    const adjacentSquares = {
        up: {x: x - 1, y},
        down: {x: x + 1, y},
        left: {x, y: y - 1},
        right: {x, y: y + 1}
    }

    Object.keys(adjacentSquares).forEach(key => {
        const coords = adjacentSquares[key];
        if (screen[coords.x] !== undefined && screen[coords.x][coords.y] === oldColor){
            fillSurrounding(screen, coords.x, coords.y, newColor)
        }
    })
}

console.log(screen);
fillSurrounding(screen, 4, 4, 3)
console.log(screen);



// option 1
// find top
// - find left
// draw each row, descending downwards

// Given a 2D array and a coordinate and a 'color', implement 'flood fill'. Flood fill colors everything with the same color as the given coordinate with 'color' (similar to the bucket fill in Microsoft paint)
// Input:
//        screen[M][N] = [[1, 1, 1, 1, 1, 1, 1, 1],
//                       [1, 1, 1, 1, 1, 1, 0, 0],
//                       [1, 0, 0, 1, 1, 0, 1, 1],
//                       [1, 2, 2, 2, 2, 2, 1, 0],
//                       [1, 1, 1, 2, 2, 2, 1, 0],
//                       [1, 1, 1, 2, 2, 2, 2, 0],
//                       [1, 1, 1, 1, 1, 2, 1, 1],
//                       [1, 1, 1, 1, 1, 2, 2, 1],
//                       ];
//     x = 4, y = 4, newColor = 3
// The values in the given 2D screen indicate colors of the pixels.
// x and y are coordinates of the brush, newColor is the color that
// should replace the previous color on screen[x][y] and all surrounding
// pixels with same color.
// Output:
// Screen should be changed to following.
//        screen[M][N] = [[1, 1, 1, 1, 1, 1, 1, 1],
//                       [1, 1, 1, 1, 1, 1, 0, 0],
//                       [1, 0, 0, 1, 1, 0, 1, 1],
//                       [1, 3, 3, 3, 3, 3, 1, 0],
//                       [1, 1, 1, 3, 3, 3, 1, 0],
//                       [1, 1, 1, 3, 3, 3, 3, 0],
//                       [1, 1, 1, 1, 1, 3, 1, 1],
//                       [1, 1, 1, 1, 1, 3, 3, 1],
//                       ];
