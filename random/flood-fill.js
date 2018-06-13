const screen =    [[1, 1, 1, 1, 1, 1, 1, 1],
                  [1, 1, 1, 1, 1, 1, 0, 0],
                  [1, 0, 0, 1, 1, 0, 1, 1],
                  [1, 2, 2, 2, 2, 2, 1, 0],
                  [1, 1, 1, 2, 2, 2, 1, 0],
                  [1, 1, 1, 2, 2, 2, 2, 0],
                  [1, 1, 1, 1, 1, 2, 1, 1],
                  [1, 1, 1, 1, 1, 2, 2, 1],
                  ];

const leftHash = {}

const floodFill = (screen, x, y, color) => {
    // find top
    // clear each row
}

const findAboveRow = (screen, x, y) => {
    const color = screen[x][y]
    const leftIndex = getLeftIndex(screen[x], x, y)

    const innerFind = (screen, x, y, color) => {
        if (screen[x - 1][y] === color) { return y }
        if (screen[x][y + 1] === color) { return null }
        return innerFind(screen, x, y + 1, color)
    }
}

const getLeftIndex = (row, x, y, color=row[y]) => {
    if (row[y - 1] !== color) {
        leftHash[x] = y;
        return y
    }
    return getLeftIndex (row, x, y - 1, color)
}
// const a = getLeftIndex(screen[3], 3, 5)
// console.log(a);

const fillRow = (row, leftIndex) => {

}

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
