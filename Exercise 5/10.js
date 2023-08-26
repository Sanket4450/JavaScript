// Write a JavaScript program to return all values in a map specifies the condition

const mobiles = [
    ["Apple", 100000],
    ["Samsung", 80000],
    ["OnePlus", 50000],
    ["Oppo", 30000],
    ["Vivo", 30000],
    ["Realme", 18000],
    ["Xiaomi", 20000],
    ["Lenovo", 25000],
    ["Honor", 28000],
    ["Nothing", 45000],
    ["Infinix", 10000],
    ["Iqoo", 22000],
];

function mobilesRange(range) {
    const rangedMobiles = new Map();
    for (let x of mobiles) {
        if (x[1] <= range) rangedMobiles.set(x[0], x[1]);
    }
    if (rangedMobiles.size > 0) {
        return rangedMobiles;
    }
    return "No mobile available is in your range";
}

// call mobilesRange function with a specific rupees range as an argument

console.log(mobilesRange(50000));
console.log(mobilesRange(20000));
console.log(mobilesRange(10000));
console.log(mobilesRange(500));