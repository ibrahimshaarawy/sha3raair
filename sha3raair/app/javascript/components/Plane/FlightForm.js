import React from 'react'

const FlightForm = (props) => {
    return (
        <div className="container">
            <div>Create New Flights</div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-control">
                    <label className="form-control" name="Departure">Departure</label>
                    <input type="text" name="departure" placeholder="e.x. Cairo..." onChange={props.handleChange} value={props.flight.departure}/>
                </div>
                <div className="form-control">
                    <label className="form-control" name="Destination">Destination</label>
                    <input type="text" name="destination" placeholder="e.x. Paris..." onChange={props.handleChange} value={props.flight.destination}/>
                </div>
                <div>
                <select onChange={props.handleChange} name="planeID">
                    <option value=""> -- select a plane -- </option>
                    <option value="1">A380</option>
                    <option value="2">test</option>
                    <option value="6">B780</option>
                </select>
                </div>
            </form>
        </div>
    )
}

export default FlightForm

