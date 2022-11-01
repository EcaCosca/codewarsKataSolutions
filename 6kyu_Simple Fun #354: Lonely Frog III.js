// https://www.codewars.com/kata/59c9e82ea25c8c05860001aa

// Task
// You are a lonely frog.

// You live on a coordinate axis.

// The meaning of your life is to jump and jump..

// Two actions are allowed:

// forward: Move forward 1 unit.

// double: If you at x point, then you can move to x*2 point.

// Now, here comes your new task. Your starting point is x, the target point is y.

// You need to jump to the target point with minimal steps. Please tell me, what's the minimal steps?

// 1 <= x <= 10, x < y <= 100000

// Example
// For x = 1, y = 8, the output should be 3.

//  step  from   to      action
//   1:     1 --> 2     forward(or double)
//   2:     2 --> 4       double
//   3:     4 --> 8       double
// For x = 1, y = 17, the output should be 5.

//  step  from    to      action
//   1:     1  --> 2     forward(or double)
//   2:     2  --> 4       double
//   3:     4  --> 8       double
//   4:     8  --> 16      double
//   5:     16 --> 17     forward
// For x = 1, y = 15, the output should be 6.

//  step  from    to      action
//   1:     1  --> 2      forward(or double)
//   2:     2  --> 3      forward
//   3:     3  --> 6      double
//   5:     6  --> 7      forward
//   6:     7  --> 14     double
//   7:     14 --> 15     forward
// For x = 3, y = 12, the output should be 2.

//  step  from    to       action
//   1:     3  --> 6       double
//   2:     6  --> 12      double
// For x = 3, y = 16, the output should be 3.

//  step  from    to       action
//   1:     3  --> 4      forward
//   2:     4  --> 8       double
//   3:     8  --> 16      double



function jumpTo(x, y) {
  //coding and coding..
  let middle = y;
  let steps = 0;
  let reachedX = false;
  if(y%2 !== 0){
    steps +=1
    middle = y-1;
  }
  for(middle ;middle >= x; middle){
    if(middle === x){
      reachedX = true;
     break;
    } else{
      console.log(1,middle,steps)
      if(middle%2 === 0){ 
        if(middle/2 >= x){
        steps +=1;
          middle = middle/2;
        console.log(2, middle, steps)
        }else{
          break;
        }
     } else{
        middle = middle -1;
        steps+=1;
        console.log(3,middle, steps)
      }
    }
  }

  console.log(4,middle, steps)
  if(reachedX) {
    console.log(x,y,steps)
    return steps;
  } else {
    steps= steps + (middle-x)
    console.log(x,y,steps)
    return steps
  }
}