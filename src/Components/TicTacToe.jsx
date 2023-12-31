import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver';
import Reset from './Reset';
import GameState from './GameState';

const playerX = 'X';
const playerO = 'O';
const winningCombinations = [
    //rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
    //collumns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
    //diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" }
]

function checkWinner(tiles, setStrikeClass, setGameState, gameState) {
    for (const { combo, strikeClass } of winningCombinations) {

        const tileValue1 = tiles[combo[0]]
        const tileValue2 = tiles[combo[1]]
        const tileValue3 = tiles[combo[2]]

        if (
            tileValue1 !== null &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
          ) {
            setStrikeClass(strikeClass);
            if (tileValue1 === playerX) {
              setGameState(GameState.playerXwins);
            } else {
              setGameState(GameState.playerOwins);
            }
            return;
          }
        }
      
        const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
        if (areAllTilesFilledIn) {
          setGameState(GameState.draw);
        }}

    export default function TicTacToe() {
        const [tiles, setTiles] = useState(Array(9).fill(null));
        const [playerTurn, setPlayerTurn] = useState(playerX);
        const [strikeClass, setStrikeClass] = useState('');
        const [gameState, setGameState] = useState(GameState.inProgress)

        const handleReset = () => {
            setGameState(GameState.inProgress);
            setPlayerTurn(playerX);
            setTiles(Array(9).fill(null));
            setStrikeClass('')
        }
        const handleTileClick = (index) => {
            if (gameState !== GameState.inProgress) {
                return
            }

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

        useEffect(() => {
            checkWinner(tiles, setStrikeClass, setGameState, gameState)
        }, [tiles])

        return (
            <div>
                <h1>Tic Tac Toe</h1>


                <Board
                    tiles={tiles}
                    onTileClick={handleTileClick}
                    playerTurn={playerTurn}
                    strikeClass={strikeClass}
                />
                <GameOver gameState={gameState} />
                <Reset gameState={gameState} handleReset={handleReset} />

            </div>
        )
    }
