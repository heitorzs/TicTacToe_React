import React, { useState } from 'react'
import Board from './Board'

export default function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));

    return (
        <div>
            <h1>Jogo da Velha</h1>

            <div>
                <Board tiles={tiles} />
            </div>

        </div>
    )
}
