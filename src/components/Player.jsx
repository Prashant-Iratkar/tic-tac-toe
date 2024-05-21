import { useState } from 'react';
import './Player.css';

function Player(props){
    let [playerName,setPlayerName] = useState(props.playerName);

    let [isEditing,setIsEditing] = useState(false);

    function handelChange(event){
        setPlayerName(event.target.value);
    }

    function handleClick(){
        if(isEditing === true){
            props.setPlayer(playerName); // update playername
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }
    }

    function handelKey(event){
        if(event.key === "Enter"){
            props.setPlayer(playerName);
            setIsEditing(false);
        }
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>

    if(isEditing === true){
        editablePlayerName = 
        <input type="text" 
        required 
        onChange={handelChange}
        onKeyDown={handelKey}
        />
    }

    return(
        <div className='player-container'>
            {editablePlayerName}
            <span className='symbol'>{props.symbol}</span>
            <button onClick={handleClick}>{isEditing? "Save":"Edit"}</button>
        </div>
    );
}

export default Player;

