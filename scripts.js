const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;

const TETROMINO_NAMES =['O'];

const TETROMINOES = {
    'O':[
           [1]
        ]
}

let tetromino = {
    name : '',
    matrix : [],
    column : 0,
    row : 0
}

function generateTetromino(){

}

function generatePlayField(){

    for(let i=0; i<PLAYFIELD_COLUMNS*PLAYFIELD_ROWS; i++){
        const div = document.createElement('div');
        document.querySelector('.tetris').append(div);
    }
}

generatePlayField();