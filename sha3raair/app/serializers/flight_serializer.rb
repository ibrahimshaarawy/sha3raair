class FlightSerializer
  include FastJsonapi::ObjectSerializer
  attributes :destination, :departure, :plane_id

  has_many :seat
end
