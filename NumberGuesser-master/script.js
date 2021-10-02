let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
   return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
      if(Maths.abs(secretGuess - humanGuess === secretGuess - computerGuess)){
          return true;
      }

      else if(Maths.abs(secretGuess - humanGuess > secretGuess - computerGuess)){
          return true;
      }

      else if (Maths.abs(secretGuess - humanGuess < secretGuess - computerGuess)){
          return false;
      }
}

const updateScore = winner => {
       if(winner === 'human'){
           humanScore++
       }
       else if( winner === 'computer'){
           computerScore++
       }
}

const advanceRound = () => {
    currentRoundNumber++
}


