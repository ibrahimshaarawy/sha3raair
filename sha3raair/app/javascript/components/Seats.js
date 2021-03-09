import React from 'react'
import Seat from './Seat'
import { useState } from 'react'

const Seats = () => {
    const [seats, setSeats] = useState([
        {
            pnr: 'F1234',
            available: true,
            price: 120
        },
        {
            pnr: 'B1234',
            available: true,
            price: 100
        },
        {
            pnr: 'E1234',
            available: true,
            price: 80
        }
    ])
    return (
        <>
        { seats.map((seat) => (
            <Seat key={ seat.pnr } seat={ seat } onToggle={toggleSeat}/>
        ))}
        </>
        
    )
}

const toggleSeat = (pnr) => {
    setSeats(seats.map((seat) => seat.pnr === pnr ? { ...seat, available: !seat.available} : seat))
}
export default Seats
