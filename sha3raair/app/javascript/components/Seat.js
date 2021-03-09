import React from 'react'

const  Seat = ({ seat, onToggle }) => {
    return (
        <div className='centered' onDoubleClick={() => onToggle(seat.pnr)}>
        <button className='seat'>{ seat.pnr }</button>
        <p style={{ fontSize: 12 }}>{ seat.price }</p>
        </div>
    )
}

export default  Seat