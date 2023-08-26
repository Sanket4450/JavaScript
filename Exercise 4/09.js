// Write a program to check whether a number is a palindrome number or not

function isPalindrome(num) {
    let strnum = num.toString();
    let newstrnum = "";
    for (let i = strnum.length - 1; i >= 0; i--) {
        newstrnum += strnum[i];
    }
    let newnum = parseInt(newstrnum);
    if (num == newnum) console.log("Yes, It is a Palindrome number");
    else console.log("No, It isn't a Palindrome number");
}

isPalindrome(121);
isPalindrome(4500);
isPalindrome(3883);
isPalindrome(12000021);