import React, { useState } from 'react'
import Board from './Board'

const playerX = 'X';
const playerO = 'O';

export default function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(playerX)

    const handleTileClick = (index) => {
        if (tiles[index] !== null) { //checking if tiles has content
            return
        }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if (playerTurn === playerX) { //changing player turn 
            setPlayerTurn(playerO)
        } else {
            setPlayerTurn(playerX)
        }
    }
    return (
        <div>
            <h1>Jogo da Velha</h1>

            <div>
                <Board
                    tiles={tiles}
                    onTileClick={handleTileClick}
                    playerTurn={playerTurn}
                />
            </div>

        </div>
    )
}
