module Api
	module Adminstrator
		class SeatsController < ApplicationController
			protect_from_forgery with: :null_session

			def create
				seat = Seat.new(seats_params)

				if seat.save
					render json: SeatSerializer.new(seat).serialized_json
				else
					render json: { error: seat.errors.messages }, status: 422
				end
			end

			def destroy
				seat = Seat.find_by(pnr: params[:pnr])

				if seat.destroy
					head :no_content
				else
					render json: { error: seat.errors.messages }, status: 422
				end
			end

			private

			def seats_params
				params.require(:seat).permit(:pnr, :available, :price, :flight_id)
			end
		end
	end
end
