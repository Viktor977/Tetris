const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;

const TETROMINO_NAMES = ["O"];

const TETROMINOES = {
  O: [[1]],
};

let tetromino = {
  name: "",
  matrix: [],
  column: 0,
  row: 0,
};

function generateTetromino() {
  const nameTetro = TETROMINO_NAMES[0];
  const matrix = TETROMINOES[0];

  const columTetro = 4;
  const rowTetro = 5;

  tetromino = {
    name: nameTetro,
    column: columTetro,
    matrix: matrix,
    row: rowTetro,
  };
}

function drawPlayField() {
    playField[4][3]='O';
  for (let row = 0; row < PLAYFIELD_ROWS; row++) {
    for (let column = 0; column < PLAYFIELD_COLUMNS; column++) {

        if(!playField[row][column])continue;
      const nameFigure = "O";
      const selfIndex = convertPositionToIndex(row,column)

      sells[selfIndex].classList.add(nameFigure);
    }
  }
}
function generatePlayField() {
  for (let i = 0; i < PLAYFIELD_COLUMNS * PLAYFIELD_ROWS; i++) {
    const div = document.createElement("div");
    document.querySelector(".tetris").append(div);
  }
  playField = new Array(PLAYFIELD_ROWS).fill()
            .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
            console.table(playField);
}

function convertPositionToIndex(row, col) {
  return row * PLAYFIELD_COLUMNS + col;
}

generatePlayField();
let sells = document.querySelectorAll(".tetris div");
generateTetromino();
drawPlayField();
