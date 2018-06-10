// https://www.hackerrank.com/challenges/big-sorting/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bigSorting function below.
function bigSorting(arr) {
    const longestLength = arr.reduce((acc, curr) => {
        return curr.length > acc ? curr.length : acc
    }, 0)

    return arr
        .map(item => padZeroes(longestLength, item))
        .sort()
        .map(trimZeroes)

}

const padZeroes = (num, str) => {
    const diff = num - str.length
    let newStr = str;
    for (let i = 0; i < diff; i++) {
        newStr = '0' + newStr
    }
    return newStr
}

const trimZeroes = (str) => {
    let newStr = str;
    while(newStr[0] === '0' && newStr[1] !== '.') {
        newStr = newStr.substring(1)
    }
    return newStr
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = bigSorting(unsorted);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
