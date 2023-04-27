const GameBoard = (() => {
  const board = document.getElementById('gameboard');
  for (let i = 1; i < 10; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i;
    board.appendChild(square);
  }
});

GameBoard();

const Player = function (name, mark) {
  this.name = name;
  this.mark = mark;
  const choices = [];
  return { name, mark, choices };
};

const player1 = new Player('player1', 'O');
const player2 = new Player('player2', 'X');

const Game = (() => {
})();
