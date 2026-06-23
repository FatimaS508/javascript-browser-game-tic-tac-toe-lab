/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message');
const boardEl = document.querySelector('.board');


/*-------------------------------- Constants --------------------------------*/
const board=
['X','O','',
    '','','',
    '','','']

const winningCombos = [ //a. Use a variable named board to represent the state of the squares on the board.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];





/*---------------------------- Variables (state) ----------------------------*/
let turn ='X'
turn = 'o'
let winner = false
let tie=false //no one win
let choice




/*-------------------------------- Functions --------------------------------*/
function updateMessage(){
    if(winner === false && tie === false){
        messageEl.textContent = 'Its ' +turn+'s turn';
    }

    else if(winner === false && tie === true){
        messageEl.textContent = "It's a tie!";
    }

    else{
        messageEl.textContent = 'Congratulations '+winner;
    }
}

function render(){
    updateBoard()
    updateMessage()


}
function updateBoard(){
    //loop throgh the board using for each
    board.forEach((cell,index)=>{
        squareEls[index].textContent= cell
    })
}
function handleClick(event){
console.log("square clicked")
 const squareIndex = event.target.id;

    if(board[squareIndex] === 'O' || board[squareIndex] === 'X'){
        return;
    }

    if(winner === true){
        return;
    }
    placePiece(squareIndex);
}




//step 6.1
function placePiece(index){
board[index]=turn
console.log(board)
}
function checkForWinner(){
    winningCombos.forEach(function(item){
        const [i,j,k]= item
        const val1 =board[i]
        const val2= board[j]
        const val3= board[k]
    })
}

function init(){
    console.log('init game')
    updateBoard()
    render()
    
}
init()


/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick);

