// https://www.codewars.com/kata/525821ce8e7b0d240b002615

// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

// Don't presume the separators too much or you could be surprised.

// For example: (Input --> Output)

// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"

const camelize = str => str.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().split(' ').map(i => i.charAt(0).toUpperCase()+i.substr(1)).join('')
