// Write a JavaScript program to sort the items of an array.

function sort(arr) {
    const arrNum = arr.every(value => typeof(value) === typeof(5));
    
    if (arrNum === true) {
        arr.sort((a, b) => a - b);
    }
    else {
        arr.sort();
    }
    return arr;
}

// call sort function with an array as an argument

console.log(sort(['Dog', 'Cat', 'Zebra', 'Lion']));
console.log(sort([12, 30, -5, 209, 1024, -83, 0, 33]));
console.log(sort(["SK", 24, '%', null, 540, "120", '$', -39, NaN]));