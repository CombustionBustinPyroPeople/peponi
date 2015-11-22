class Shipment < ActiveRecord::Base
  attr_accessor :name, :receiver, :destination, :description, :bol, :custody, :hasDamaged, :hasSeparated, :isLate, :latitude, :longitude
  has_many :pallet
end
