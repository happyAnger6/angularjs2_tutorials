function sum(x) {
    var restOfNumber = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumber[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var i = 0; i < restOfNumber.length; i++) {
        result += restOfNumber[i];
    }
    return result;
}
var result = sum(1, 2, 3, 4, 5);
console.log(result);
//# sourceMappingURL=leftparams.js.map