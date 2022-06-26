// https://www.codewars.com/kata/5a360620f28b82a711000047

// DESCRIPTION:
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    switch(card.charAt(card.length-1)){
      case'♣':
        return 'clubs';
      case'♦':
        return 'diamonds';
      case'♥':
        return 'hearts';
      case'♠':
        return 'spades';
      default:
        return 'Not a valid card'
    }
}

console.log(defineSuit('3♣'))
console.log('clubs')

console.log(defineSuit('3♦'))
console.log('diamonds')

console.log(defineSuit('3♥'))
console.log('hearts')

console.log(defineSuit('3♠'))
console.log('spades')
