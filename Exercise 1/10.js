/* Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple the absolute difference if the specified number is greater than 19. */

function difference(number) {
    if (number <= 19){
        let difference = 19 - number;
        console.log(difference);
    }
    else {
        let difference = (number - 19) * 3;
        console.log(difference);
    }
}

difference(19);
difference(24);
difference(11);