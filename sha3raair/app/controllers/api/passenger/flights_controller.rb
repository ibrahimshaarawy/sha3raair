module Api
	module Passenger
		class FlightsController < ApplicationController
			protect_from_forgery with: :null_session

			def index
				flight = Flight.all

				render json: FlightSerializer.new(flight, options).serialized_json
			end

			def show
				flight = Flight.find_by(id: id)

				render json: FlightSerializer.new(flight, options).serialized_json
			end

			def options
				@options ||= { include: %i[seat] }
			end
		end
	end
end
