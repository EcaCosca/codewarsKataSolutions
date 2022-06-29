// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// GIVEN
// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits =  Math.floor(integer).toString();
//         for(var ix = 1; ix < digits.length; ix = sum + 1) {
//             sum =+ digits[ix + 1]);
//         }
//     return sum;     
// }

// RESULT 
function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  integer.toString().split('').map(Number);
  console.log(digits)
    
    for(let ix = 0; ix < digits.length; ix++) {
        sum += digits[ix];
    }
    return sum;     
}