admins = Admin.create(
	[
		{
			user: 'sha3raboy',
			pass: 'mu_sha_87'
		}
	])

planes = Plane.create([
	{
		planeType: 'A380',
		seatConfig: [3, 10, 100, 6, 20, 80, 10, 50, 40]
	},
	{
		planeType: 'test',
		seatConfig: [1, 1, 100, 1, 1, 80, 1, 1, 40]
	}
])

flights = Flight.create([
	{
		departure: 'Cairo',
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