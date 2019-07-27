/*----- constants -----*/
const PLAYERS = {
    '0': 'white',
    '1': 'red',
    '-1': 'grey'
  };
  
  /*----- app's state (variables) -----*/ 
  let board, turn, winner;
  
  /*----- cached element references -----*/
  const msgEl = document.getElementById('msg');
  
  /*----- event listeners -----*/ 
//   document.querySelector('section.markers')
//     .addEventListener('click', handleClick);
  
  /*----- functions -----*/