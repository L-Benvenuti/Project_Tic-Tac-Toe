const Game = (() => {
  let turn = 'circle';
  function addMark(e) {
    const display = document.createElement('div');
    display.classList.add(turn);
    e.target.append(display);

    turn = turn === 'circle' ? 'cross' : 'circle';
    e.target.removeEventListener('click', addMark);
  }

  return { addMark };
})();

const GameBoard = (() => {
  const board = document.getElementById('gameboard');
  const cells = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((_cell, index) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = index;
    square.addEventListener('click', Game.addMark);
    board.appendChild(square);
  });
})();

function Player(name, mark) {
  this.name = name;
  this.mark = mark;
  return { name, mark };
}

const player1 = new Player('player1', 'O');
const player2 = new Player('player2', 'X');
