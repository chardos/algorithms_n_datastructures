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
    let palindromes = [];
    for (let i = 0; i < a.length; i++) {
        let result = findPalindrome(a.substring(i), b);
        if(result) {
            console.log('========')
            console.log('result.palindrome',result.palindrome)
            console.log('result.aIndex',result.aIndex)
            console.log('i',i)
            // take from b first
            const aLetterAfter = a[i + result.aIndex + 1];
            const bLetterBefore = b[result.bIndex - 1];
            if (aLetterAfter) {
                palindromes.push(addLetterMiddle(result.palindrome, aLetterAfter))
            }
            if (bLetterBefore) {
                palindromes.push(addLetterMiddle(result.palindrome, bLetterBefore))
            }
            palindromes.push(result.palindrome)

        }
    }

    const longestLength = palindromes.reduce((acc, curr) => (curr.length > acc ? curr.length : acc), 0)
    palindromes = palindromes.filter(x => x.length === longestLength);
    palindromes.sort()

    if (palindromes.length) {
        return palindromes[0]
    } else {
        return - 1;
    }

    console.log('longestLength', longestLength)
    console.log('palindromes', palindromes)
}

function findPalindrome(substringA, b) {
    const reversedA = reverse(substringA)
    for(let i = 0; i < reversedA.length; i++) {
        const length = reversedA.length
        const current = reversedA.substring(i);
        const foundIndex = b.indexOf(current);
        console.log('i', i)
        console.log('current', current)
        console.log('foundIndex', foundIndex)
        if(foundIndex !== -1) {
            const currentLength = length - i;
            const result = reverse(reversedA.substring(i)) + b.substring(foundIndex, foundIndex + currentLength)
            console.log('YES', result)
            return {
                palindrome: result,
                aIndex: i,
                bIndex: foundIndex
            }
        }
    }
}

function reverse(str) {
    return str.split('').reverse().join('')
}

function addLetterMiddle(palindrome, letter) {
    const length = palindrome.length
    const firstHalf = palindrome.substring(0, length / 2)
    const secondHalf = palindrome.substring(length / 2, length)
    return firstHalf + letter + secondHalf
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
