// Write a JavaScript function to remove a specific element from an array.

function removeElement(arr, el) {
    if (arr.includes(el)) {
        let index = arr.indexOf(el);
        arr.splice(index, 1);
    }
    return arr;
}

// call removeElement function with two arguments: an array and a value

console.log(removeElement([12, 40, "123", NaN], 0));
console.log(removeElement(["Apple", "Mango", 10, 20, "30"], 30));

const arr = [12, '$', "SK", null, -19, "24", NaN, "123", 0, -Infinity];
console.log(removeElement(arr, "SK"));
console.log(removeElement(arr, 12));
console.log(removeElement(arr, null));
console.log(removeElement(arr, 0));