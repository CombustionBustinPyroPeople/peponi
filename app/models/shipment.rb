class Shipment < ActiveRecord::Base
  attr_accessor :name
  has_many :pallet
end
