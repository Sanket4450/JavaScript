// Write a JavaScript program to get the current date.

let x = new Date();
let yyyy = x.getFullYear();
let mm = x.getMonth() + 1;
let dd = x.getDate();

if (mm < 10) {
    mm = "0" + mm;
}
if (dd < 10) {
    dd = "0" + dd;
}

console.log(mm + "-" + dd + "-" + yyyy + ", " + mm + "/" + dd + "/" + yyyy + " or " + dd + "-" + mm + "-" + yyyy + ", " + dd + "/" + mm + "/" + yyyy);