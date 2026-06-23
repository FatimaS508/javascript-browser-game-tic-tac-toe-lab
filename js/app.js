
/*------------------------ Cached Element References ------------------------*/
/*
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message');
const boardEl = document.querySelector('.board');


/*-------------------------------- Constants --------------------------------*/
/*const board=
['','','',
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
/*let turn ='X'
let winner = false
let tie=false //no one win
let choice




/*-------------------------------- Functions --------------------------------*/
/*function updateMessage(){
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
 const squareIndex = Number(event.target.id);

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
/*boardEl.addEventListener('click', handleClick);*/












/*------------------------ Cached Element References ------------------------*/

const squareEls=document.querySelectorAll('.sqr')
console.log('squareEls has element')
const messageEl=document.querySelector('#message')
const resetBtnEl=document.querySelector('#reset')


/*-------------------------------- Constants --------------------------------*/
const winningCombos = [ 
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

let board=['','','',
    '','','',
    '','',''
]
let turn='X'
let winner=false
let tie=false





/*-------------------------------- Functions --------------------------------*/
function render(){
    console.log('page is updating!')
    updateBoard()
    updateMessage()
}
function init(){
     board=['','','',
    '','','',
    '','',''
]
 turn='X'
 winner=false
 tie=false
    
    render()
}

function updateBoard(){
    board.forEach((oneSquare,index)=>{
        squareEls[index].textContent=oneSquare
        console.log('board updated in updateBoard func')
    })
}
function updateMessage(){
    if(winner ===false && tie === false){
        console.log('its ' +turn+ 's turn')
        messageEl.textContent= 'its '+turn +'s turn'
    }else if(winner ===false && tie===true){
        console.log('its Tie! ')
        messageEl.textContent='oh no! its a tie'
    }else{
        console.log('Congrat! you WON')
        messageEl.textContent= 'Congrat! you WON'
    }
}
function handleClick(event){
    console.log('handle click function is working')
    const squareIndex=Number(event.target.id)
    if (board[squareIndex] !== ''){ return}
    
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()

}
function placePiece(index){
board[index]=turn
console.log(board)
}
function checkForWinner(){
    for (const combo of winningCombos) {
        
        const a = board[combo[0]];
        const b = board[combo[1]];
        const c = board[combo[2]];
        if (a !== '' && a === b && a === c) {
            winner = true;
            return;
        }
    }
    
}
function checkForTie(){
    if(winner==true){
        return
    }
    for(const val of board){
        if(val === ''){
            tie=false
            return
        }else{
            tie=true
        }
    }
}
function switchPlayerTurn(){
    if(winner){
        return
    }else{
        if(turn==='X'){
            turn='O'
        }else{
            turn='X'
        }
    }console.log('turn works')
}
//placePiece(6)


/*----------------------------- Event Listeners -----------------------------*/

init()
squareEls.forEach((square)=>{
  square.addEventListener('click',handleClick) 
})
resetBtnEl.addEventListener('click',init)


