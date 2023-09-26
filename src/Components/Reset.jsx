import React from 'react'
import GameState from './GameState'

function Reset({gameState, handleReset}) {
    console.log(gameState)
    if(gameState === GameState.inProgress){
        return
    } else {
        return <button className='reset-button' onClick={handleReset}>Restart Game</button>
    }
}

export default Reset