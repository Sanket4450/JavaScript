/* Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30;
otherwise return 20; and if two numbers are the same return 40. */

function sameNumbers(x, y, z) {
    if (x === y, x === z, y === z) {
        return 30;
    }
    else if (x != y && x != z && y != z) {
        return 20;
    }
    else {
        return 40;
    }
}

console.log(sameNumbers(12, 43, 20)); // 20 for all different
console.log(sameNumbers(24, 8, 24)); // 40 for two same
console.log(sameNumbers(49, 10, 10)); // 40 for two same
console.log(sameNumbers(32, 32, 32)); // 30 for all same