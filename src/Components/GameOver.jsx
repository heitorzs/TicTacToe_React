import React from 'react'

export default function GameOver({ gameState }) {

    if (gameState === 'inProgress') {
        return <></>
    } else if (gameState === 'playerOWins') {
        return <div className='game-over'>O Wins</div>
    } else if (gameState === 'playerXWins') {
        return <div className='game-over'>X Wins</div>
    }
    else {
        return <div className='game-over'>Draw</div>

    }


}
