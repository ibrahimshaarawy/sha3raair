import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlightForm from './FlightForm'

const Plane = () => {
    const [flight, setFlight] = useState({})

    const handleChange = (e) => {
        e.preventDefault()

        setFlight(Object.assign({}, flight, {[e.target.name]: e.target.value}))
        console.log(flight)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="conatiner">
            <FlightForm 
            handleChange = {handleChange}
            handleSubmit = {handleSubmit} 
            flight={flight}
            />
        </div>
    )
}

export default Plane
