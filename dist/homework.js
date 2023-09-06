"use strict";
// Homework Exercises
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailSwap = exports.checkLogs = exports.multiply = void 0;
// 1. For each of these values, what type will the TypeScript compiler infer?
var a = 118;
// A: number
var b = 'Thieves';
// A: string
var c = [true, false, false];
// A: array of booleans
// let d = {age: number};
// A: Will infer type of any
//This should be an object with age as a number, but we need a variable to define the type
var d2 = {
    age: 42
};
d2.age = 3;
var e = [3];
// A: an array of numbers
var f;
// A: Any
var g = [];
// A: array of any
// 2. What are the compilation errors in each of the following code snippets?
var song = {
    title: 'Lose Yourself'
};
// A: releaseYear is missing in the actual object but it is required.
//If it was optional we would do releaseYear?
var prices = [100, 200, 300];
prices[0] = 100;
// A: Tried to assign a string to a number type. 
//We can change it to a regular 100
function myFunc(a, b) {
    return 0;
}
// A: Because we defined the type of number for the return,
// the function requires us to return a number
// Codewars problem 1 - TypeScript
// https://www.codewars.com/kata/50654ddff44f800200000004/train/typescript
// This code does not execute properly. Try to figure out why.
function multiply(a, b) {
    return a + b;
}
exports.multiply = multiply;
// uhhh okay I didn't expect this solution to be so easy, of course they just need
// to change a + b to a * b... let's look for a harder one
// https://www.codewars.com/kata/64cac86333ab6a14f70c6fb6
// Description:
// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.
// It is known that all events are recorded in chronological order and two events can't occur in the same second.
// Return the minimum number of days during which the log is written.
// Example:
// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1
// Input -> ["12:12:12"]
// Output -> 1
// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2
// Input -> []
// Output -> 0
function checkLogs(log) {
    if (log.length === 0)
        return 0; //if the event log is empty, return 0 days
    var days = 1; //init days to 1 because if there was even 1 event, there is 1 day
    for (var i = 1; i < log.length; i++) { //loop through events starting from 2nd
        if (log[i] <= log[i - 1]) { //if current time is less than previous or equal to
            days++; //increment days by 1
        }
    }
    return days;
}
exports.checkLogs = checkLogs;
// https://www.codewars.com/kata/5868812b15f0057e05000001
//Description:
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
function tailSwap(arr) {
    var _a = arr[0].split(":"), firstBefore = _a[0], firstAfter = _a[1]; //splits before the colon
    var _b = arr[1].split(":"), secondBefore = _b[0], secondAfter = _b[1]; //splits after the colon
    return ["".concat(firstBefore, ":").concat(secondAfter), "".concat(secondBefore, ":").concat(firstAfter)];
}
exports.tailSwap = tailSwap;
