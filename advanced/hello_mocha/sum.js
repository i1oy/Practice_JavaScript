'use strict';

module.exports = function (...rest) {
    var sum = 0;
    for (const n of rest) {
        sum += n;
    }
    return sum;
}