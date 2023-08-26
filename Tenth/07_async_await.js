// async and await make promises easier to write

// async before a function makes the function return a promise

async function myFunction1() {
    return "Sanket Talaviya";
}
// Is the same as:
function myFunction2() {
    return Promise.resolve("Sanket Talaviya");
}

// Here is how to use the Promise

function myDisplayer(something) {
    console.log(something);
}

myFunction1().then(
    function(value) {
        myDisplayer(value);
    },
    function(error) {
        myDisplayer(error);
    }
);