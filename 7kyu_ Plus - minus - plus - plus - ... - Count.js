// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

// DESCRIPTION:
// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;

const catchSignChange = arr => {
  let res = 0;
  
  for(let i = 0;i <= arr.length;i++){
    if(i === 0){
      res = res      
    }else if(arr[i] > -1 && arr[i-1] < 0){
      res++
    }else if(arr[i] < 0 && arr[i-1] > -1){
      res++
    }else{
      res = res
    }
  }
  
    return res
};
