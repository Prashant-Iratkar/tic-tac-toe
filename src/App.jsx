import './App.css'
import logo from './images/logo-1.png'
import Player from './components/Player';
import Game_board from './components/Game_board';
import { useState } from 'react';

function App(){
    let [player1,setPlayer1] = useState("Player 1");
    let [player2,setPlayer2] = useState("Player 2");

    return(
        <div>
            <h1 className="game-heading">Tic Tac To Game</h1>
            <div className='img-container'>
                <img src={logo} height="80px" width="80px" alt='' />
            </div>

            <div className='main-section'>
                <div className='game-container'>
                    <div className='player-section'>
                      <Player playerName="Player 1" symbol="X" setPlayer = {setPlayer1}></Player>  
                      <Player playerName="Player 2" symbol="O" setPlayer = {setPlayer2}></Player>  
                    </div>

                    <div className='game-section'>
                        <Game_board player1 = {player1} player2={player2}></Game_board>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;