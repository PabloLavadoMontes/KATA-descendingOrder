/* Crear función que pueda tomar cualquier número entero no negativo como argumento y 
devolverlo con sus dígitos en orden descendente. 
Reorganice los dígitos para crear el número más alto posible.

EJEMPLOS:
descendingOrder(42145) => 54421;
descendingOrder(145263) => 654321;
descendingOrder(123456789) => 987654321; 
*/

import {descendingOrder, numberToArray, findBiggestNumber, sumElementsFromArray} from "../descendingOrder";


// descendingOrder
test("Modify the digits of a number to create a number as high as possible", () => {
    expect(descendingOrder(42145)).toBe(54421);
});
test("Modify the digits of a number to create a number as high as possible", () => {
    expect(descendingOrder(145263)).toBe(654321);
});
test("Modify the digits of a number to create a number as high as possible", () => {
    expect(descendingOrder(123456789)).toBe(987654321);
});
test("Modify the digits of a number to create a number as high as possible", () => {
    expect(descendingOrder(13001)).toBe(31100);
});
test("Modify the digits of a number to create a number as high as possible", () => {
    expect(descendingOrder(123231052)).toBe(533222110);
});

// numberToArray:
test("Transforms a number into an array", () => {
    expect(numberToArray([42145])).toStrictEqual([4, 2, 1, 4, 5]);
});
test("Transforms a number into an array", () => {
    expect(numberToArray([145263])).toStrictEqual([1, 4, 5, 2, 6, 3]);
});
test("Transforms a number into an array", () => {
    expect(numberToArray([13001])).toStrictEqual([1, 3, 0, 0, 1]);
});
test("Transforms a number into an array", () => {
    expect(numberToArray([123])).toStrictEqual([1, 2, 3]);
});
test("Transforms a number into an array", () => {
    expect(numberToArray([20120])).toStrictEqual([2, 0, 1, 2, 0]);
});


// findBiggestNumber:
test("Find the biggest element of an array", () => {
    expect(findBiggestNumber([4, 2, 1, 4, 5])).toBe(5);
});
test("Find the biggest element of an array", () => {
    expect(findBiggestNumber([1, 4, 5, 2, 6, 3])).toBe(6);
});
test("Find the biggest element of an array", () => {
    expect(findBiggestNumber([1, 3, 0, 0, 1])).toBe(3);
});
test("Find the biggest element of an array", () => {
    expect(findBiggestNumber([1, 2, 3, 9, 8, 9])).toBe(9);
});
test("Find the biggest element of an array", () => {
    expect(findBiggestNumber([9, 2, 0, 1, 2, 0, 1])).toBe(9);
});

// sumElementsFromArray:
test("Transforms an array into a number", () => {
    expect(sumElementsFromArray([2, 2])).toBe(22);
});
test("Transforms an array into a number", () => {
    expect(sumElementsFromArray([2, 0, 2, 3])).toBe(2023);
});
test("Transforms an array into a number", () => {
    expect(sumElementsFromArray([4, 8, 2, 2])).toBe(4822);
});
test("Transforms an array into a number", () => {
    expect(sumElementsFromArray([1, 0, 0, 0, 0, 1])).toBe(100001);
});
test("Transforms an array into a number", () => {
    expect(sumElementsFromArray([3, 2, 2, 3, 1, 6, 5])).toBe(3223165);
});