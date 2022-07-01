// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    let winner = 0;
    
      if(p1 === p2){
        return 'Draw!'
      }else if(p1 === 'scissors'){
        if(p2 === 'rock'){
          winner = 2
        }else{
          winner = 1
        }
      }else if(p1 === 'rock'){
        if(p2 === 'paper'){
          winner = 2
        }else{
          winner = 1
        }
      }else if(p1 === 'paper'){
        if(p2 === 'scissors'){
          winner = 2
        }else{
          winner = 1
        }
      }
    
    return `Player ${winner} won!`
  };