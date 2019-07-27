let gameBoard;
let PLAYERONE = 'O';
let PLAYERTWO = 'X';

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

const cells = document.getElementsByClassName('cell');
onStartGame();

function onStartGame(){
    document.querySelector('.end-game').style.display = 'none';
    gameBoard = Array.from(Array(9).keys());
    for(let i=0; i< cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', onTurnClick, false)
      }
    };