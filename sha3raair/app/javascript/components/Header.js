import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = () => {
    return (
        <header className='header'>
            <h1>{Sha3raAir}</h1>
            <Button color='black' text='Admin Login' onClick={onClick}/>
        </header>
    )
}

export default Header
