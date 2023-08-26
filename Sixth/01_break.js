// break statement "jumps out" of a loop.

for (let i = 1; i <= 10; i++){
    
    if (i === 5){
        break; // when i is equal to 4, the loop will break & does not print the number 5 & further
    }
    console.log(i);
}

/* continue statement breaks one iteration(in the loop), if a specified condition occurs, and continues with
the next iteration in the loop. */

for (let i = 1; i <= 10; i++){
    
    if (i === 5){
        continue; // when i is equal to 4, the loop will continue 5 & starts to print from number 6
    }
    console.log(i);
}

// A code block is a block of code between { and }.