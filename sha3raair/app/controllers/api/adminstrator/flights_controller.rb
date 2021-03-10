module Api
	module Adminstrator
		class FlightsController < ApplicationController
			protect_from_forgery with: :null_session

			def create
				flight = Flight.new(flight_params)

				if flight.save
					render json: FlightSerializer.new(flight).serialized_json
				else
					render json: { error: flight.errors.messages }, status: 422
				end
			end

			def flight_params
				params.require(:flight).permit(:destination, :departure, :plane_id)
			end
		end
	end
end
