var testRange = require('./testRange');

/**
 *  Gives an array of n random terms
 *
 *  @param {Function} fn the function that generates something random
 *  @param {number} n number of terms to generate
 *  @returns {Array} an array of length `n` with items generated by `fn`
 *
 *  There can be more parameters after these. All additional parameters are provided to the given function
 */
module.exports = function (fn, n) {
    var numberToGenerate = n;
    testRange(
        typeof fn !== 'function',
        'Chance: The first argument must be a function.'
    );

    if (typeof n === 'undefined') {
        numberToGenerate = 1;
    }
    var i = numberToGenerate;
    var arr = [];
    var params = Array.prototype.slice.call(arguments, 2);

    // Providing a negative count should result in a noop.
    i = Math.max(0, i);

    for (null; i--; null) {
        arr.push(fn.apply(this, params));
    }

    return arr;
};
