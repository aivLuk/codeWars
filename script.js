"use strict";
//*******************************************************************************************
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step.The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//**************************************************************************************** */

function generateRange(min, max, step) {
    let newRange = [];
    for (let i = min; i <= max; i += step) {
        newRange.push(i)
    }
    return newRange;
}

generateRange(2, 19, 3);

//**************************************************************************************** */
// Complete the function that takes two integers(a, b, where a < b) and return an array of all integers between the input parameters, including them.
//**************************************************************************************** */

function between(a, b) {
    let numbers = [];
    for (let i = a; i <= b; i++) {
        numbers.push(i);
    }
    return numbers;
}

between(3, 9)
//***************************************************************************************** */
//Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
//***************************************************************************************** */

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

isDivisible(90, 10, 3)
//**************************************************************************************** */

// Given an array / list[] of integers, Find The maximum difference between the successive elements in its sorted form.

// **********************************************************************

function maxGap(...numbers) {
    numbers.sort((a, b) => a - b);
    let diff = 0;
    for (let i = 0; i < numbers.length; i++) {
        let difference = numbers[i] - numbers[i + 1];
        if (difference < 0) {
            difference *= -1
        }
        if (difference > diff) {
            diff = difference
        }
    }
    return diff
}

maxGap(23, 41, 2, -21, 0, 3, -7)

// ************************************************************************
// Given an array / list[] of n integers, Separate The even numbers from the odds. Return evens in ascending way, odds in descending. No duplicate numbers
// *************************************************************************
function menFromBoys(arr) {
    const evens = arr.filter(el => el % 2 === 0);
    const odds = arr.filter(el => el % 2 !== 0);
    const evensSort = evens.sort((a, b) => a - b);
    const oddsSort = odds.sort((a, b) => b - a);
    const sorted = [...evensSort, ...oddsSort];
    const uniqueArray = [];
    for (i = 0; i < sorted.length; i++) {
        if (uniqueArray.indexOf(sorted[i]) === -1) {
            uniqueArray.push(sorted[i]);
        }
    }
    return uniqueArray;
}

menFromBoys([2, 9, -7, 4, 21, 36])