class SeatSerializer
  include FastJsonapi::ObjectSerializer
  attributes :pnr, :available, :price, :flight_id
end
