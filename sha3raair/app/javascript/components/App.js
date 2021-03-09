import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SearchFlight from './Search/SearchFlight.js'
import Flight from './Flight/Flight.js'
import Header from './Header'
import Seats from './Seats'
import AdminLogin from './AdminLogin/AdminLogin'
import Plane from './Plane/Plane'

const App = () => {
	return(
		<Switch>
		<Route exact path="/" component={SearchFlight}/>
		<Route exact path="/adminlogin" component={AdminLogin}/>
		<Route exact path="/passenger/flights" component={Flight}/>
		<Route exact path="/adminstrator/planes" component={Plane}/>
		</Switch>
		)
}

export default App
