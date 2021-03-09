module Api
	module Adminstrator
		class AdminsController < ApplicationController
			protect_from_forgery with: :null_session
			
			def index
				admin = Admin.all

				render json: AdminSerializer.new(admin).serialized_json
			end

			def show
				admin = Admin.find_by(user: params[:user])

				render json: AdminSerializer.new(admin).serialized_json
			end

			def create
				admin = Admin.new(admin_params)

				if admin.save
					render json: AdminSerializer.new(admin).serialized_json
				else
					render json: { error: admin.errors.messages }, status: 422
				end
			end

			def destroy
				admin = Admin.find_by(user: params[:user])

				if admin.destroy
					head :no_content
				else
					render json: { error: admin.errors.messages }, status: 422
				end
			end

			def admin_params
				params.require(:admin).permit(:user, :pass)
			end
		end
	end
end
