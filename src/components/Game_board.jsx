import { useEffect, useState } from 'react';
import './Game_board.css'

function Game_board(props){

let[turn,setTurn]= useState("X");
// let[symbol,setSymbol] = useState("");
let[winner,setWinner] = useState(false);
let[winnerSymbol, setWinnerSymbol] = useState(null); // winnerSymbol
let[conclusion,setConclusion] = useState(null);
let gameResult = null;
let turnChance = null;

let [GameBoard,setGameBoard] =useState([
    [null,null,null],
    [null,null,null],
    [null,null,null]
]);

    function handleClick(event,row_idx,col_idx){

            if(GameBoard[row_idx][col_idx] ===null && winner!=true){
                // updating Gameboard
                let NewGameBoard = [...GameBoard];
            NewGameBoard[row_idx][col_idx] = (turn === 'X') ? "X" : "O";
            setGameBoard(NewGameBoard);

            // Updating UI
            event.target.innerText = turn;
            
            //changing turn
            turn === "X" ? setTurn('O') : setTurn ('X');
        
            //checking Winner
            checkWinner();
        }
    }

    function checkWinner(){

        // check winner for rows
        for(let i=0; i<3; i++){
            if(GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2] && GameBoard[i][0] != null){
                console.log("Winner");
                setWinner(true);
                setWinnerSymbol(GameBoard[i][0]);
            }
        }

        // check winner for column
        for(let j=0; j<3; j++){
            if(GameBoard[0][j] == GameBoard[1][j] && GameBoard[1][j] == GameBoard[2][j] && GameBoard[0][j] != null){
                console.log("Winner");
                setWinner(true);
                setWinnerSymbol(GameBoard[0][j]);
            }
        }

        // check winner for digonal 1
        if(GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0] != null){
            console.log("Winner");
            setWinner(true);
            setWinnerSymbol(GameBoard[0][0]);
        }
        
        //check winner for digonal2
        else if(GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2] != null){
            console.log("Winner");
            setWinner(true);
            setWinnerSymbol(GameBoard[1][1]);
        }

        // Check for draw
        let bulb = false;
        GameBoard.map((row)=>{
            row.map((element)=>{
                if(element == null){
                    bulb =true;
                }
            })
        })
        if(bulb === false && winner=== false){
            setConclusion("Draw");
        } 
    }

    let gameWinner;
    if(winner == true){
        if(winnerSymbol=='X'){
        gameWinner = props.player1; // update player name
    }
    else{
        gameWinner = props.player2; // update player name
    }
    gameResult = <span id="winner-span"> Winner is {gameWinner} </span>
    }
    else{
        if(conclusion === "Draw"){
            gameResult = <span id="winner-span"> The Match is Draw </span> 
        }
    }
    
    useEffect(()=>{
        console.log(GameBoard);
    },[GameBoard]);
    
    function handlereset(){
        setGameBoard([
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]);
        if(winner == true){
            setWinner(false);
        }
        if(conclusion === "Draw"){
            setConclusion("");
        }
        setTurn("X");
    }
    
    return(
            <div className='game-board'>
            {gameResult}
            
                {
                    GameBoard.map((row, row_idx) =>{
                        return(
                            <div className='row' key={row_idx}>
                                {
                                    row.map((element, col_idx) =>{
                                        return <button key={col_idx} onClick={(event)=>{handleClick(event,row_idx,col_idx)}}>{element}</button>
                                    })
                                }
                            </div>
                            
                        )
                    })
                }
                <div className='reset'>
                    <button type="button" onClick={handlereset}>Reset</button>
                </div>
            </div>
    )    
}

export default Game_board;
