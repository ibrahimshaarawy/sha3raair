class AdminSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :pass
end
