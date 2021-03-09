module Api
	module Adminstrator
		class PlanesController < ApplicationController
			protect_from_forgery with: :null_session

			def index
				plane = Plane.all

				render json: PlaneSerializer.new(plane).serialized_json
			end

			def show
				plane = Plane.find_by(planeType: params[:planeType])

				render json: PlaneSerializer.new(plane).serialized_json
			end

			def create
				plane = Plane.new(plane_params)

				if plane.save
					render json: PlaneSerializer.new(plane).serialized_json
				else
					render json: { error: plane.errors.messages }, status: 422
				end
			end

			def destroy
				plane = Plane.find_by(planeType: params[:planeType])

				if plane.destroy
					head :no_content
				else
					render json: { error: plane.errors.messages }, status: 422
				end

			end

			def plane_params
				params.require(:plane).permit(:planeType, :seatConfig => [])
			end
		end
	end
end
