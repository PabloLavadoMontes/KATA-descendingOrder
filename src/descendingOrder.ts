export {descendingOrder, numberToArray, findBiggestNumber, sumElementsFromArray}

/**
 * Modify the digits of a number to create a number as high as possible;
 * @param {number} n 
 * @returns {number}
 */
function descendingOrder (n: number): number {
    let arrayInOrder: number[] = [];
    let array = numberToArray(n);
    let arrayCopied: number[] = array.slice();
    let biggestNumber: number = 0;
    while (arrayCopied.length > 0) {
        biggestNumber = findBiggestNumber(arrayCopied);
        arrayInOrder.push(biggestNumber);
        arrayCopied.splice(arrayCopied.indexOf(biggestNumber), 1);
    }
    return sumElementsFromArray(arrayInOrder);
}

/**
 * Transforms a number into an array;
 * @param {any} number
 * @returns {number[]} numbersArray 
 */
function numberToArray (numberr: any): number[] {
    let numerito: any = "" + numberr;
    let numbersArray: any[] = numerito.split("");
    for (let i: number = 0; i < numbersArray.length; i++) {
        numbersArray[i] = parseInt(numbersArray[i]);
    }
    return numbersArray;
}

/**
 * Find the biggest element of an array;
 * @param {number[]} numbersArray 
 * @returns {number} biggestNumber
 */
 function findBiggestNumber (numbersArray: number[]): number {
    let biggestNumber: number = numbersArray[0]; 
    for (let i: number = 0; i < numbersArray.length; i++) {
        if (biggestNumber < numbersArray[i]) {
            biggestNumber = numbersArray[i];
        }
    }
    return biggestNumber;
}

/**
 * Transforms an array into a number;
 * @param {any[]} numbers
 * @returns {number} numbers
 */
 function sumElementsFromArray (numbers: any[]): number {return parseInt(numbers.join(""));} 
