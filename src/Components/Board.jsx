import React from 'react'
import Tile from './Tile'

export default function Board({tiles}) {
    return (
        <div className='board'>
            {tiles.map((T)=><Tile></Tile>)}
        </div>
    )
}
