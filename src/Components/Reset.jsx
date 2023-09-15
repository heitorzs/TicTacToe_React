import React from 'react'

function Reset({gameState, handleReset}) {
    console.log(gameState)
    if(gameState === 'inProgress'){
        return
    } else {
        return <button className='reset-button' onClick={handleReset}>Restart Game</button>
    }
}

export default Reset