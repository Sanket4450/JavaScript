// "Producing code" is code that can take some time, "Consuming code" is code that must wait for the result

// A JavaScript Promise object contains both the producing code and calls to the consuming code

function myDisplayer(something) {
    console.log(something);
}

let x = 24;

let myPromise = new Promise(function(myResolve, myReject) {

    // The producing code (this may take some time)

    if (x == 24) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {
        myDisplayer(value);
    },
    function(error) {
        myDisplayer(error);
    }
);

let myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
        myResolve("Sanket Talaviya");
    }, 3000);
});

myPromise1.then(function(value) {
    console.log(value);
});