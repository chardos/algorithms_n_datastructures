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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the buildPalindrome function below.
 */


function buildPalindrome(a, b) {
    // compare a, then shave off a letter and compare again
    // we have to start short because of examples: aba
    let longest;
    for (let i = 0; i < a.length; i++) {
        const result = findPalindrome(a.substring(i), b);
        if(result) {
            console.log(result)
            longest = result
        }
    }

}

function findPalindrome(substringA, b) {
    const reversedA = substringA.split('').reverse().join('')
    for(let i = 0; i < reversedA.length; i++) {
        const length = reversedA.length
        const current = reversedA.substring(0, length - i);
        console.log('current', current)
        const foundIndex = b.indexOf(current);
        if(foundIndex !== -1) {
            return reversedA.substring(i) + b.substring(foundIndex)
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const a = readLine();

        const b = readLine();

        let result = buildPalindrome(a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
