class PlaneSerializer
  include FastJsonapi::ObjectSerializer
  attributes :planeType, :seatConfig
end
