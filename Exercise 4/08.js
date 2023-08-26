/* Write a Javascript program to make two arrays and print another array of values which are the same in
those two arrays */

function commonValues(arr1, arr2) {
    const arr3 = [];
    arr1.filter(value => {
        if (arr2.includes(value))
            arr3.push(value);
    });
    return arr3;
}

console.log(commonValues([12, 20, 8, 14, 38, 45, 90], [20, 10, 34, 45, 9, 80, 38]));
console.log(commonValues([10, 23, 40, 56, 78], [12, 20, 50, 79]));