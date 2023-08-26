// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function lastDigit(x, y, z) {
    let a = x % 10;
    let b = y % 10;
    let c = z % 10;

    if (a === b && a === c && b === c) {
        return true;
    }
    else {
        return false;
    }
}

console.log(lastDigit(12, 54, 87));
console.log(lastDigit(27, 80, 7));
console.log(lastDigit(16, 36, 66));
console.log(lastDigit(137, 2017, 47));