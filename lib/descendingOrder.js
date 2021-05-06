"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumElementsFromArray = exports.findBiggestNumber = exports.numberToArray = exports.descendingOrder = void 0;
/**
 * Modify the digits of a number to create a number as high as possible;
 * @param {number} n
 * @returns {number}
 */
function descendingOrder(n) {
    let arrayInOrder = [];
    let array = numberToArray(n);
    let arrayCopied = array.slice();
    let biggestNumber = 0;
    while (arrayCopied.length > 0) {
        biggestNumber = findBiggestNumber(arrayCopied);
        arrayInOrder.push(biggestNumber);
        arrayCopied.splice(arrayCopied.indexOf(biggestNumber), 1);
    }
    return sumElementsFromArray(arrayInOrder);
}
exports.descendingOrder = descendingOrder;
/**
 * Transforms a number into an array;
 * @param {any} number
 * @returns {number[]} numbersArray
 */
function numberToArray(numberr) {
    let numerito = "" + numberr;
    let numbersArray = numerito.split("");
    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = parseInt(numbersArray[i]);
    }
    return numbersArray;
}
exports.numberToArray = numberToArray;
/**
 * Find the biggest element of an array;
 * @param {number[]} numbersArray
 * @returns {number} biggestNumber
 */
function findBiggestNumber(numbersArray) {
    let biggestNumber = numbersArray[0];
    for (let i = 0; i < numbersArray.length; i++) {
        if (biggestNumber < numbersArray[i]) {
            biggestNumber = numbersArray[i];
        }
    }
    return biggestNumber;
}
exports.findBiggestNumber = findBiggestNumber;
/**
 * Transforms an array into a number;
 * @param {any[]} numbers
 * @returns {number} numbers
 */
function sumElementsFromArray(numbers) { return parseInt(numbers.join("")); }
exports.sumElementsFromArray = sumElementsFromArray;
//# sourceMappingURL=descendingOrder.js.map