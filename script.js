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
//   const score = 0;
  const checkWin = (player) => {
    player.choices.includes([1, 2, 3] || [4, 5, 6] || [7, 8, 9]
        || [1, 4, 7] || [2, 5, 8] || [3, 6, 9]
        || [1, 5, 9] || [3, 6, 9]);
  };

  if (checkWin(player1) || checkWin(player2)) {
    console.log('WIN');
  } else if (gameboard === []) {
    console.log('TIE');
  }
})();
