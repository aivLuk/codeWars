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