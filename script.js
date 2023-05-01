const Game = (() => {
  let turn = 'circle';

  function checkScore() {
    const allSquares = document.querySelectorAll('.square');
    const winningOptions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    winningOptions.forEach((array) => {
      const circleWins = array.every((cell) => allSquares[cell].firstChild?.classList.contains('circle'));
      const crossWins = array.every((cell) => allSquares[cell].firstChild?.classList.contains('cross'));

      if (circleWins) {
        console.log('circle won!');
        allSquares.forEach((square) => square.replaceWith(square.cloneNode(true)));
      } else if (crossWins) {
        console.log('cross won!');
        allSquares.forEach((square) => square.replaceWith(square.cloneNode(true)));
      }
    });
  }

  function addMark(e) {
    const display = document.createElement('div');
    display.classList.add(turn);
    e.target.append(display);

    turn = turn === 'circle' ? 'cross' : 'circle';
    e.target.removeEventListener('click', addMark);
    checkScore();
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

  return { cells };
})();

// function Player(name, mark) {
//   this.name = name;
//   this.mark = mark;
//   return { name, mark };
// }

// const player1 = new Player('player1', 'O');
// const player2 = new Player('player2', 'X');
