// https://www.codewars.com/kata/535474308bb336c9980006f2

// DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

let greet = name => "Hello "+name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)+"!";
