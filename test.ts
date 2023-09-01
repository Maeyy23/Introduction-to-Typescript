/**
 * write a function in typescript that takes in a number
 * it returns an even number as true
 * and an odd number as false */ 

function checkEven(number: number): boolean {
    if ( number % 2 === 0){
        return true;
    } else return false;
};
console.log(checkEven(11));

/**
 * write a function in typescript that checks if a word is a palindrome
 */

function checkPalindrome(word: string): boolean{
    // let numeric: any = /[\W_]/g;
    let smallLetters: string = word.replace(/[\W_]/g, "").toLowerCase();
    const reversed: string = smallLetters.split("").reverse().join("");
    if (smallLetters === reversed) {
        return true;
    } else {
        return false;
    }
};
console.log(checkPalindrome("Madam"));

/**
 * write a function in typescript that takes in two parameters
 * and converts them to degree celsius and farenheit
 */

function convertTemperature(temp: number, unit: string): number {
    if (unit === "fahrenheit") {
        return (temp -32)/1.8;
    } else {
        return temp * 1.8 + 32;
    }
};

console.log(convertTemperature(32,"fahrenheit"));
console.log(convertTemperature(32,"celcius"));
console.log(convertTemperature(32,"fahrenheit"));
console.log(convertTemperature(32,"celcius"));