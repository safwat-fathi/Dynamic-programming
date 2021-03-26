"use strict";
var canSum = function (targetSum, numbers) {
    // base case
    if (targetSum === 0)
        return true;
    // not desired value
    if (targetSum < 0)
        return false;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }
    return false;
};
console.log(canSum(7, [2, 3]));
console.log(canSum(300, [7, 14]));
