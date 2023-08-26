// switch statement is used to perform different actions based on different conditions.

// Use the switch statement to select one of many code blocks to be executed.

// value of the expression is compared with the values of each case.

switch (new Date().getDay()) { // .getDay method returns the day of the week
    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
}

/* If there is a match, the associated block of code is executed, If there is no match, the default code block
is executed. */

// When JavaScript reaches a break keyword, it breaks out of the switch block.

// It is not necessary to break the last case in a switch block.The block breaks(ends) there anyway.

// default keyword specifies the code to run if there is no case match

switch (new Date().getDay()) {
    case 0:
        console.log("Sunday!");
        break;
    case 6:
        console.log("Saturday!");
        break;
    default:
        console.log("Enjoy your working day!");
}

// default case does not have to be the last case in a switch block

switch (new Date().getDay()) {
    default:
        console.log("Enjoy your working day!");
        break; // here, break should be added
    case 0:
        console.log("Sunday!");
        break;
    case 6:
        console.log("Saturday!"); // here, break is not necessary
}

// Common code blocks, Sometimes you will want different switch cases to use the same code.

// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

// If multiple cases matches a case value, the first case is selected.

// Switch cases use strict comparison(===), Values must be of the same type to match.

let x = "0";

switch (x) {
    case 0: // here, x is equal to 0 but it is a string type
        console.log("Off");
        break;
    case 1:
        console.log("On");
        break;
    default:
        console.log("No value found!");
}