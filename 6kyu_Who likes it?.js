// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  let namesArr = names
  if (namesArr.length == 0) {
    return 'no one likes this'
  }else if(namesArr.length == 1){
    return `${namesArr[0]} likes this`
  }else if(namesArr.length == 2){
    return `${namesArr[0]} and ${namesArr[1]} like this`
  }else if(namesArr.length == 3){
    return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`
  }else{
    return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length-2} others like this`
  }
}
