const radius = [1, 2, 3, 4];

function area(radius) {
    return (Math.PI * radius * radius).toFixed(2);
}
function perimeter(radius) {
    return (2 * Math.PI * radius).toFixed(2);
}
function diameter(radius) {
    return (2 * radius).toFixed(2);
}

function calculate(radius, logic) {
    let array = [];
    for (let i = 0; i < radius.length; i++) {
        array.push(logic(radius[i]));
    }
    return array;
}

console.log(calculate(radius, area));
console.log(calculate(radius, perimeter));
console.log(calculate(radius, diameter));