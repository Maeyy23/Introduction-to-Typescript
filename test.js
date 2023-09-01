/**
 * write a function in typescript that takes in a number
 * it returns an even number as true
 * and an odd number as false */
function checkEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else
        return false;
}
;
console.log(checkEven(11));
/**
 * write a function in typescript that checks if a word is a palindrome
 */
function checkPalindrome(word) {
    // let numeric: any = /[\W_]/g;
    var smallLetters = word.replace(/[\W_]/g, "").toLowerCase();
    var reversed = smallLetters.split("").reverse().join("");
    if (smallLetters === reversed) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log(checkPalindrome("Madam"));
