import  React, { useState, useEffect }  from 'react'
import { BrowserRouter as Routrer, Link } from 'react-router-dom'

const SearchFlight = () => {
    return (
        <header className='header'>
            <h1>Sha3raAir</h1>
            <Link to={'/adminlogin'} className="btn">Login</Link>
        </header>
    )
}

export default SearchFlight