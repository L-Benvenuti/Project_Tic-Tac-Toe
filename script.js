function Player(name, mark) {
  this.name = name;
  this.mark = mark;
  //   const choices = [];
  //   // function addMark(e) {
  //   //   const display = document.createElement('div');
  //   //   display.classList.add('circle');
  //   //   e.target.append(display);
  //   // }
  return {
    name, mark, // , choices, addMark,
  };
}

function addMark(e) {
  const display = document.createElement('div');
  display.classList.add('cross');
  e.target.append(display);
}
const player1 = new Player('player1', 'O');
const player2 = new Player('player2', 'X');

const GameBoard = (() => {
  const board = document.getElementById('gameboard');
  const cells = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((_cell, index) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = index;
    square.addEventListener('click', addMark);
    board.appendChild(square);
  });
})();

// const Game = {

// }
