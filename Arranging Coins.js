/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let quadraticSolver = (-1 + Math.sqrt(1 + (8 * n)))/2;
    return Math.floor(quadraticSolver);
};
