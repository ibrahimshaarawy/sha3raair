module Api
	module Passenger
		class SeatsController < ApplicationController
			protect_from_forgery with: :null_session

			def index
				seat = Seat.all

				render json: SeatSerializer.new(seat).serialized_json
			end

			def show
				seat = Seat.find_by(pnr: params[:pnr])

				render json: SeatSerializer.new(flight).serialized_json
			end

			def update
				seat = Seat.find_by(pnr: params[:pnr])

				if seat.update(seats_params)
					render json: SeatSerializer.new(seat).serialized_json
				else
					render json: { error: seat.errors.messages }, status: 422
				end
			end


			def seats_params
				params.require(:seat).permit(:pnr, :available, :price, :flight_id)
			end
		end
	end
end
