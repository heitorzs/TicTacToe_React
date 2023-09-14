import React from 'react'

export default function Tile({ value, onClick, className, playerTurn}) {
    let hoverClass = null;
    if(value == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
    return (
        <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>
    )
}
 