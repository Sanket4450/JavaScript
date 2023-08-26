// Conditional statements are used to perform different actions based on different conditions.

// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

let x = 15;

if (x > 13){ // x is greater than 13 so the condition is true & the code block will be executed
    console.log("You are a teenager");
}

// Use the else statement to specify a block of code to be executed if the condition is false.

if (x >= 18){ // x isn't greater than 18 so the condition is false & the if code block will not be executed
    console.log("You can vote");
} else { // Here, the else code block will be executed as the condition is false
    console.log("You can't vote");
}

// an example

let y = 24;

if (y > 18){
    text = "You are an adult";
} else {
    text = "You arn't an adult";
}

var text; // using let is not possible in this case
console.log(text);

// Use the else if statement to specify a new condition if the first condition is false.

let time = new Date().getHours();

if (time < 12){
    console.log("Good Morning!");
} else if (time >= 12 && time < 18){
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
}