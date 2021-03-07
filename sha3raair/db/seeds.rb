admins = Admin.create(
	[
		{
			user: 'sha3raboy',
			pass: 'mu_sha_87'
		}
	])

planes = Plane.create([
	{
		type: 'A380',
		seatconfig: [3, 10, 100, 6, 20, 80, 10, 50, 40]
	},
	{
		type: 'test',
		seatconfig: [1, 1, 100, 1, 1, 80, 1, 1, 40]
	}
])

flights = Flight.create([
	{
		depart: 'Cairo',
		destination: 'Dubai',
		plane: planes.second
	}
])

seats = Seat.create([
	{
		pnr: 'F1234',
		available: true,
		flight: flights.first 
	},
	{
		pnr: 'B1234',
		available: true,
		flight: flights.first
	},
	{
		pnr: 'E1234',
		available: true,
		flight: flights.first
	}
])