class Shipment < ActiveRecord::Base
  has_many :pallets
end
