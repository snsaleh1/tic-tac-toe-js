//set variables
var gameBoard;
const playerOne = 'O';
const playerTwo = 'X';

//identify winning combinations with variable winnerPlay
const winnerPlay = [
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

//define the cells and start game variable
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    // document.querySelector(".endgame").style.display = "none";
    gameBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
      cells [i].innerText = '';
      //otherwise remove the background color because the cell is not in play
      cells[i].style.removeProperty('background-color');
      cells[i].addEventListener('click', turnClick, false)
    }
}
function turnClick(square) {
  if (typeof gameBoard[square.target.id] == 'number') {
    turn(square.target.id, playerOne)
    if (!checkTie()) turn(bestSpot(), playerTwo);
  }
}

function turn(squareId, player) {
  gameBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWinner = checkWinner(gameBoard, player)
  if (gameWinner) gameOver(gameWinner)
}

function checkWinner(board, player) {
  let plays = board.reduce((a, e, i) => 
  (e === player) ? a.concat(i) : a, []);
  let gameWinner = null;
  for (let [index,win] of winnerPlay.entries()) {
    if(win.every(elem => plays.indexOf(elem) > -1)) {
        gameWinner = {index: index, player: player};
        break;
  }
}
  return gameWinner;
}

function gameOver(gameWinner) {
  for (let index of winnerPlay[gameWinner.index]) {
    document.getElementById(index). style.backgroundColor = 
    gameWinner.player == playerOne ? "green" : "yellow";
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false)
  }
  declareWinner(gameWinner.player == playerOne ? "Well done, you beauty!" : "Dammit kid you blew it!");
}

function declareWinner(who) {
  document.querySelector(".endgame").display = "block";
  document.querySelector("endgame. text").innerText = who;
}

function emptySquares() {
  return gameBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
  return emptySquares()[0]
}

function checkTie() {
  if (emptySquares(). length ==0) {
    for (var i = 0; i <cells.length; i++) {
      cells [i].style.backgroundColor = "blue";
      cells [i].removeEventListener('click', turnClick, false);
    }
    declareWinner("DRAW!")
    return true;
  }
  return false;
}