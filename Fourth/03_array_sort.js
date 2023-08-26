// sort() method sorts an array alphabetically

const food = ["Pizza", "Burger", "Dhosa", "Biryani", "Kabab"];
food.sort();
console.log(food);

// reverse() method reverses the elements in an array.

food.reverse();
console.log(food);

const numbers = [24, 40, 160, 2036, 78, 12];
numbers.sort(); // sort() method will produce incorrect result when sorting numbers.
console.log(numbers);

// You can fix this by providing a compare function

numbers.sort(function(a, b){return a - b});
console.log(numbers);

// Use the same trick to sort an array descending

numbers.sort(function(a, b){return b - a});
console.log(numbers);

// 12 is the lowest number whereas 2036 is the highest number

console.log("The highest number is " + max());
console.log("The lowest number is " + min());

function max() {
    return Math.max.apply(null, numbers);
}
function min(){
    return Math.min.apply(null, numbers);
}