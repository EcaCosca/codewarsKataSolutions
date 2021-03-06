// https://www.codewars.com/kata/517abf86da9663f1d2000003

// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    const arr = str.split(/-|_/)
    let result = arr.map(x => x.charAt(0).toUpperCase()+x.substring(1)).join('')
    
    if (str.charAt(0) == str.charAt(0).toUpperCase()){
        return result
    }else{
      	return result.charAt(0).toLowerCase()+result.substring(1)
    } 
}

console.log(toCamelCase(''))
console.log('')

console.log(toCamelCase("the_stealth_warrior"))
console.log("theStealthWarrior")

console.log(toCamelCase("The-Stealth-Warrior"))
console.log("TheStealthWarrior")

console.log(toCamelCase("A-B-C"))
console.log("ABC")

