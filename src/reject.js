var _curry2 = require('./internal/_curry2');
var filter = require('./filter');
var nix = require('./nix');


/**
 * Similar to `filter`, except that it keeps only values for which the given predicate
 * function returns falsy. The predicate function is passed one argument: *(value)*.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} The new filtered array.
 * @example
 *
 *      var isOdd = function(n) {
 *        return n % 2 === 1;
 *      };
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 */
module.exports = _curry2(function reject(fn, list) {
    return filter(nix(fn), list);
});
