Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
  	namespace :adminstrator do
  		resources :admins,param: :user, only: [:create, :destroy, :index, :show]
  		resources :planes, param: :planeType, only: [:create, :destroy, :index, :show]
  		resources :flights, param: :destination, only: [:create, :destroy]
  		resources :seats, param: :pnr, only: [:create, :destroy]
  	end
  	namespace :passenger do
  		resources :flights, only: [:index, :show]
  		resources :seats, param: :pnr, only: [:index, :update, :show]
  	end
  end

  get '*path', to: 'pages#index', via: :all


end
