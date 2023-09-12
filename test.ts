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

// console.log(convertTemperature(32,"fahrenheit"));
// console.log(convertTemperature(32,"celcius"));
// console.log(convertTemperature(32,"fahrenheit"));
// console.log(convertTemperature(32,"celcius"));

/**
 * Implement Linear and Binary Search Algorithms using typescript
 */

/* Linear Search algorithm is a search method that iterates over the items in an array until the targetted item is found or not found. 
*/
function linearSearch(array: string[], target: string): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }console.log(` ${target} not found at ${i}`)
  }
  return false;
}

console.log(linearSearch(["Apple", "Pawpaw", "Mango", "Avocado"], "Orange"))
// This returns the index [numerical position] of the item

/**
 * Binary Search algorithm works with sorted arrays. It splits the array into half. The targetted item range and the outliers.
 * this is the most efficient way to iterate over a large amount of data in an array
 */
function binarySearch(array: number[], target: number): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,4,5,7,11,0,54,87,133,77,89,65,278,89], 4));
/**
 * I noticed that when there are multiple items of the same value in an array at different index positions
 * the binary search algorithm returned the index of the first occurrence of the target value.
 */