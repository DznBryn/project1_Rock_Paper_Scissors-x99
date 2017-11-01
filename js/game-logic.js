// All code should be written in this file.

// All code should be written in this file.
let playerOneMoveOneType,
playerOneMoveTwoType,
playerOneMoveThreeType,
playerTwoMoveOneType,
playerTwoMoveTwoType,
playerTwoMoveThreeType,
playerOneMoveOneValue,
playerOneMoveTwoValue,
playerOneMoveThreeValue,
playerTwoMoveOneValue,
playerTwoMoveTwoValue,
playerTwoMoveThreeValue,
playerOneWin,
playerTwoWin;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
if(!moveOneType || !moveTwoType || !moveThreeType){
  return;
}
if(!moveOneValue || !moveTwoValue || !moveThreeValue){
  return;
}
if((moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors')|| (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') || (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors')){
  return;
}
if(moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
  return;
}
if(moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99){
  return;
}
if((moveOneValue + moveTwoValue + moveThreeValue) > 99){
  return;
}
if(player === 'Player One'){
  playerOneMoveOneType = moveOneType;
  playerOneMoveTwoType = moveTwoType;
  playerOneMoveThreeType = moveThreeType;

  playerOneMoveOneValue = moveOneValue;
  playerOneMoveTwoValue = moveTwoValue;
  playerOneMoveThreeValue = moveThreeValue;
} else if(player === 'Player Two') {
  playerTwoMoveOneType = moveOneType;
  playerTwoMoveTwoType = moveTwoType;
  playerTwoMoveThreeType = moveThreeType;

  playerTwoMoveOneValue = moveOneValue;
  playerTwoMoveTwoValue = moveTwoValue;
  playerTwoMoveThreeValue = moveThreeValue;
}

}

function getRoundWinner(roundNumber) {
  switch(roundNumber){
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                            playerOneMoveOneValue,
                            playerTwoMoveOneType,
                            playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                            playerOneMoveTwoValue,
                            playerTwoMoveTwoType,
                            playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                            playerOneMoveThreeValue,
                            playerTwoMoveThreeType,
                            playerTwoMoveThreeValue);
    default:
      return null;
  }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
  if(!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue){
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType){
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    }
    else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    }
    else {
    return 'Tie';
    }
  }
  if (playerOneMoveType === 'rock'){
    if(playerTwoMoveOneType === 'scissors'){
      return 'Player One';
    }
    else {
      return 'Player Two';
    }
  }
  else if (playerOneMoveType === 'paper'){
    if(playerTwoMoveType === 'rock'){
      return 'Player One';
    }
    else {
      return 'Player Two';
    }
  }
  else{
    if(playerTwoMoveType === 'paper'){
      return 'Player One';
    }
    else {
      return 'Player Two';
    }
  }
}

const getGameWinner = () =>{
  if(!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType || !playerTwoMoveOneValue || !playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue || !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue){
        return null;
      }

      playerOneWin = 0;
      playerTwoWin = 0;

  addWin(getRoundWinner(1));
  addWin(getRoundWinner(2));
  addWin(getRoundWinner(3));

  if(playerOneWin > playerTwoWin){
    return 'Player One';
  }
  else if (playerOneWin < playerTwoWin){
    return 'Player Two';
  }
  else {
    return 'Tie';
  }
}

function addWin(winner) {
  if(winner === 'Player One'){
    playerOneWin = (playerOneWin + 1) || 1;
  }
  else if (winner === 'Player Two') {
    playerTwoWin = (playerTwoWin + 1) || 1;
  }
}

const setComputerMoves = () => {
  const moves = ['rock','paper','scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
}
