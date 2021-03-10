import React,{ useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Flight = ( ) => {
    const [seats, setSeats] = useState([])

    useEffect(() => {
        axios.get('/api/passenger/flights')
        .then(resp => {
            setSeats(resp.data.included)
        })
        .catch(resp => console.log(resp))
    }, [seats.length])

    const list = seats.map(item => {
        return (<li key={item.attributes.pnr}>{item.attributes.pnr}</li>)

    })
    return (
    <Fragment>
        <div>This is where the Flight will go with the seats</div>
        <ul>{ list }</ul>
    </Fragment>
    )
}

export default Flight