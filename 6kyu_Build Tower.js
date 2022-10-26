// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

const towerBuilder = (nFloors) => {
  let tower = [];
  let towerWidth = [1];
  
  for(let i = 1; i<nFloors;i++){
    towerWidth.push(towerWidth[i-1]+2);
  }
  
  for(let i = 0; i<nFloors;i++){ 
    tower.push(" ".repeat((towerWidth[towerWidth.length - 1] - towerWidth[i])/2) + "*".repeat(towerWidth[i])+ " ".repeat((towerWidth[towerWidth.length - 1] - towerWidth[i])/2))
  }
  
  return tower;
}
