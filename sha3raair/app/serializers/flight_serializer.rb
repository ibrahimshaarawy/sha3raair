class FlightSerializer
  include FastJsonapi::ObjectSerializer
  attributes :destination, :departure, :plane_id
end
