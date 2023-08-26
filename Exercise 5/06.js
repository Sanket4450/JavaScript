// Write a JavaScript function that merges two arrays and removes all duplicate elements.

function mergeArray(arr1, arr2) {
    const arrCommon = [];

    arr1.filter(value1 => {
        arr2.filter(value2 => {
            if (value1 === value2) {
                arrCommon.push(value1);
            }
        });
    });
    return arrCommon;
}

// call mergeArray function with two arrays in argument

console.log(mergeArray([10, 20, 30], [40, 20, 10]));
console.log(mergeArray([12, 25, -4, 0, 7, 30], [15, 0, -14, 30, 9, 10, 12]));

// another method to do this

function mergeArray1(arr1, arr2) {

    const arrCommon = arr1.filter(value1 => arr2.includes(value1));
    return arrCommon;
}

console.log(mergeArray1([10, 20, 30], [40, 20, 10]));
console.log(mergeArray1([12, 25, -4, 0, 7, 30], [15, 0, -14, 30, 9, 10, 12]));