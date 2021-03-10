import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlightForm from './FlightForm'
import Header from '../Header'

const Plane = () => {
    const [flight, setFlight] = useState({})

    const handleChange = (e) => {
        e.preventDefault()

        setFlight(Object.assign({}, flight, {[e.target.name]: e.target.value}))
        console.log(flight)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        const id = flight.plane_id
        axios.post('/api/adminstrator/flights', flight)
        .then(resp => {
            const seatConfig = axios.get('api/adminstrator/planes/', { params: { id } }).then(res => res.data);
            console.log(seatConfig)
            setFlight({departure:'', destination:'', plane_id: ''})
        })
        .catch(resp => {})

    }

    return (
        <>
        <Header />
        <div className="conatiner">
            <FlightForm 
            handleChange = {handleChange}
            handleSubmit = {handleSubmit} 
            flight={flight}
            />
        </div>
        </>
    )
}

export default Plane
